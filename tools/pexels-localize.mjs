import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const SRC_DIR = path.resolve("src");
const PUBLIC_DIR = path.resolve("public/images");
const URLS_FILE = "/tmp/pexels_urls.txt";

const raw = fs.readFileSync(URLS_FILE, "utf8")
  .split("\n")
  .map(s => s.trim())
  .filter(Boolean);

const urls = raw.filter(u => u.startsWith("https://images.pexels.com/photos/") && /pexels-photo-/.test(u));

fs.mkdirSync(PUBLIC_DIR, { recursive: true });

const byId = new Map();
for (const u of urls) {
  const m = u.match(/\/photos\/(\d+)\/pexels-photo-\1\.(\w+)/);
  if (!m) continue;
  const id = m[1];
  const ext = m[2].toLowerCase();
  const wMatch = u.match(/[?&]w=(\d+)/);
  const w = wMatch ? Number(wMatch[1]) : 0;

  const prev = byId.get(id);
  if (!prev || w > prev.w) byId.set(id, { url: u, ext, w });
}

const entries = [...byId.entries()];
console.log(`Found ${urls.length} URLs, deduped to ${entries.length} unique photo IDs.`);

for (const [id, info] of entries) {
  const outfile = path.join(PUBLIC_DIR, `pexels-${id}.${info.ext}`);
  if (fs.existsSync(outfile) && fs.statSync(outfile).size > 0) continue;

  console.log(`Downloading ${id} -> ${path.relative(process.cwd(), outfile)}`);
  try {
    execSync(`curl -L --silent --show-error --fail "${info.url}" -o "${outfile}"`, { stdio: "inherit" });
  } catch (e) {
    console.warn(`⚠️ Failed to download ${id}. Skipping.`);
  }
}

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(SRC_DIR).filter(f => /\.(ts|tsx|js|jsx|css|md|mdx)$/.test(f));

let changedFiles = 0;
for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  const after = before.replace(
    /https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\1\.(\w+)[^"')\s]*/g,
    (_m, id, ext) => `/images/pexels-${id}.${ext.toLowerCase()}`
  );

  if (after !== before) {
    fs.writeFileSync(file, after);
    changedFiles++;
  }
}

console.log(`Rewrote URLs in ${changedFiles} files.`);
console.log("Done.");
