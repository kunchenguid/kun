#!/usr/bin/env node
/**
 * Incremental pull of kunchenguid/kun public content + root docs.
 *
 * Usage:
 *   node scripts/pull-kun.mjs
 *   node scripts/pull-kun.mjs --dir ~/.cache/kun
 *   KUN_PULL_DIR=/path node scripts/pull-kun.mjs
 *
 * Defaults:
 *   Local cache: $KUN_PULL_DIR or ~/.cache/kun (or ./kun-cache if HOME unset)
 *   Remote: raw.githubusercontent.com/kunchenguid/kun/main/...
 *           fallback cdn.jsdelivr.net/gh/kunchenguid/kun@main/...
 *
 * Syncs content/ via content/MANIFEST.json (download new/changed, delete removed).
 * Also syncs ENTRY.md, VOICE.md, OPINIONS.md, TOOLS.md by hash compare.
 * First empty cache = full pull. No LLM. Exit 1 on hard fetch failure.
 */
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, unlink, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const OWNER = 'kunchenguid';
const REPO = 'kun';
const BRANCH = 'main';
const ROOT_DOCS = ['ENTRY.md', 'VOICE.md', 'OPINIONS.md', 'TOOLS.md'];
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`;
const JSDELIVR_BASE = `https://cdn.jsdelivr.net/gh/${OWNER}/${REPO}@${BRANCH}`;

function usage() {
  console.log(`Usage: node scripts/pull-kun.mjs [--dir <cacheDir>] [--help]

Pulls content/MANIFEST.json then incrementally syncs content/*.md and root docs
(ENTRY.md, VOICE.md, OPINIONS.md, TOOLS.md) from kunchenguid/kun@main.

Options:
  --dir <path>   Local cache directory (default: $KUN_PULL_DIR or ~/.cache/kun)
  --help         Show this help

Env:
  KUN_PULL_DIR   Override default cache directory
`);
}

function parseArgs(argv) {
  const out = { dir: process.env.KUN_PULL_DIR || null, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') out.help = true;
    else if (a === '--dir') out.dir = argv[++i];
    else if (a.startsWith('--dir=')) out.dir = a.slice(6);
    else throw new Error(`Unknown argument: ${a}`);
  }
  return out;
}

function defaultDir() {
  try {
    return join(homedir() || '', '.cache', 'kun');
  } catch {
    return resolve('kun-cache');
  }
}

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

async function fetchBytes(relPath) {
  const urls = [`${RAW_BASE}/${relPath}`, `${JSDELIVR_BASE}/${relPath}`];
  let lastErr;
  for (const url of urls) {
    try {
      const res = await fetch(url, { redirect: 'follow' });
      if (!res.ok) {
        lastErr = new Error(`HTTP ${res.status} for ${url}`);
        continue;
      }
      const ab = await res.arrayBuffer();
      return Buffer.from(ab);
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error(`Failed to fetch ${relPath}`);
}

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function loadLocalManifest(cacheDir) {
  const p = join(cacheDir, 'content', 'MANIFEST.json');
  if (!existsSync(p)) return { version: 1, updated_at: null, files: [] };
  try {
    return JSON.parse(await readFile(p, 'utf8'));
  } catch {
    return { version: 1, updated_at: null, files: [] };
  }
}

async function loadDocHashes(cacheDir) {
  const p = join(cacheDir, '.pull-meta.json');
  if (!existsSync(p)) return {};
  try {
    const j = JSON.parse(await readFile(p, 'utf8'));
    return j.doc_hashes || {};
  } catch {
    return {};
  }
}

async function saveDocHashes(cacheDir, hashes) {
  const p = join(cacheDir, '.pull-meta.json');
  await writeFile(p, JSON.stringify({ doc_hashes: hashes, updated_at: new Date().toISOString() }, null, 2) + '\n');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }
  const cacheDir = resolve(args.dir || defaultDir());
  await ensureDir(join(cacheDir, 'content'));

  let remoteManifestBuf;
  try {
    remoteManifestBuf = await fetchBytes('content/MANIFEST.json');
  } catch (err) {
    console.error(`pull-kun: failed to fetch content/MANIFEST.json: ${err.message || err}`);
    process.exit(1);
  }

  let remoteManifest;
  try {
    remoteManifest = JSON.parse(remoteManifestBuf.toString('utf8'));
  } catch (err) {
    console.error(`pull-kun: invalid remote MANIFEST.json: ${err.message || err}`);
    process.exit(1);
  }

  const localManifest = await loadLocalManifest(cacheDir);
  const localByPath = new Map((localManifest.files || []).map((f) => [f.path, f]));
  const remoteFiles = remoteManifest.files || [];
  const remotePaths = new Set(remoteFiles.map((f) => f.path));

  let neu = 0;
  let updated = 0;
  let removed = 0;

  for (const entry of remoteFiles) {
    const rel = entry.path;
    if (!rel || !rel.startsWith('content/')) continue;
    const local = localByPath.get(rel);
    const dest = join(cacheDir, rel);
    if (local && local.sha256 === entry.sha256 && existsSync(dest)) {
      continue;
    }
    let buf;
    try {
      buf = await fetchBytes(rel);
    } catch (err) {
      console.error(`pull-kun: failed to fetch ${rel}: ${err.message || err}`);
      process.exit(1);
    }
    const hash = sha256(buf);
    if (entry.sha256 && hash !== entry.sha256) {
      console.error(`pull-kun: hash mismatch for ${rel}: got ${hash}, expected ${entry.sha256}`);
      process.exit(1);
    }
    await ensureDir(dirname(dest));
    await writeFile(dest, buf);
    if (local) updated += 1;
    else neu += 1;
  }

  // delete local content files removed from remote manifest
  for (const [rel, entry] of localByPath) {
    if (!remotePaths.has(rel)) {
      const dest = join(cacheDir, rel);
      if (existsSync(dest)) {
        await unlink(dest);
        removed += 1;
      }
    }
  }

  // Also delete orphan .md under content/ not in remote (except keep nothing extra)
  try {
    const contentDir = join(cacheDir, 'content');
    const names = await readdir(contentDir);
    for (const name of names) {
      if (name === 'MANIFEST.json' || name === 'README.md') continue;
      if (!name.endsWith('.md')) continue;
      const rel = `content/${name}`;
      if (!remotePaths.has(rel)) {
        const dest = join(contentDir, name);
        await unlink(dest);
        removed += 1;
      }
    }
  } catch {
    /* empty */
  }

  await writeFile(join(cacheDir, 'content', 'MANIFEST.json'), remoteManifestBuf);

  // Root docs
  const docHashes = await loadDocHashes(cacheDir);
  for (const doc of ROOT_DOCS) {
    let buf;
    try {
      buf = await fetchBytes(doc);
    } catch (err) {
      console.error(`pull-kun: failed to fetch ${doc}: ${err.message || err}`);
      process.exit(1);
    }
    const hash = sha256(buf);
    const dest = join(cacheDir, doc);
    if (docHashes[doc] === hash && existsSync(dest)) {
      continue;
    }
    await writeFile(dest, buf);
    if (docHashes[doc]) updated += 1;
    else neu += 1;
    docHashes[doc] = hash;
  }
  await saveDocHashes(cacheDir, docHashes);

  console.log(`pulled: ${neu} new / ${updated} updated / ${removed} removed → ${cacheDir}`);
}

main().catch((err) => {
  console.error(`pull-kun: ${err.message || err}`);
  process.exit(1);
});
