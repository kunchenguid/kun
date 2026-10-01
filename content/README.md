# content/

Raw public ledger of Kun Chen's X posts/replies, Substack posts, and YouTube
transcripts. One file per item:

`YYYY-MM-DD_<source>_<slug>.md` where `source` is `x`, `substack`, or `youtube`.

`MANIFEST.json` lists every content file with `path`, `source`, `id`,
`created_at`, and `sha256` (file bytes). Consumers should:

1. Fetch remote `content/MANIFEST.json`
2. Download only new/changed paths
3. Delete local files removed from the manifest

First empty local cache = full pull once. Idempotent by source `id`.

```sh
node ../scripts/pull-kun.mjs --dir ~/.cache/kun
```

Kept separate from `OPINIONS.md` / `VOICE.md` (those stay compact distilled maps).
