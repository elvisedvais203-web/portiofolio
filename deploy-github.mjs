/**
 * Déploie le portfolio sur https://github.com/elvisedvais203-web/portiofolio
 * Usage: set GITHUB_TOKEN=votre_token && node deploy-github.mjs
 * Token: https://github.com/settings/tokens (scope: repo)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OWNER = 'elvisedvais203-web';
const REPO = 'portiofolio';
const BRANCH = 'main';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

const IGNORE = new Set([
  '.git', 'node_modules', '.cursor', 'deploy-github.mjs',
  'push-to-github.ps1', 'push-to-github.bat', '.env'
]);

function walk(dir, base = '') {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    if (IGNORE.has(name)) continue;
    const full = path.join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) files.push(...walk(full, rel));
    else files.push({ path: rel.replace(/\\/g, '/'), full });
  }
  return files;
}

async function api(method, endpoint, body) {
  const res = await fetch(`https://api.github.com${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(body ? { 'Content-Type': 'application/json' } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) throw new Error(`${method} ${endpoint}: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

async function main() {
  if (!TOKEN) {
    console.error('Définissez GITHUB_TOKEN (https://github.com/settings/tokens, scope repo)');
    process.exit(1);
  }

  const files = walk(__dirname);
  console.log(`Fichiers à publier: ${files.length}`);

  let parentSha = null;
  try {
    const ref = await api('GET', `/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
    parentSha = ref.object.sha;
  } catch {
    console.log('Branche main absente — création du premier commit.');
  }

  const tree = [];
  for (const f of files) {
    const content = fs.readFileSync(f.full);
    const blob = await api('POST', `/repos/${OWNER}/${REPO}/git/blobs`, {
      content: content.toString('base64'),
      encoding: 'base64'
    });
    tree.push({ path: f.path, mode: '100644', type: 'blob', sha: blob.sha });
    process.stdout.write('.');
  }
  console.log('\nArborescence…');

  const newTree = await api('POST', `/repos/${OWNER}/${REPO}/git/trees`, {
    tree,
    ...(parentSha ? { base_tree: (await api('GET', `/repos/${OWNER}/${REPO}/git/commits/${parentSha}`)).tree.sha } : {})
  });

  const commit = await api('POST', `/repos/${OWNER}/${REPO}/git/commits`, {
    message: 'Deploy portfolio — KADIEBWE MAKINA EDVAIS',
    tree: newTree.sha,
    ...(parentSha ? { parents: [parentSha] } : {})
  });

  if (parentSha) {
    await api('PATCH', `/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, { sha: commit.sha });
  } else {
    await api('POST', `/repos/${OWNER}/${REPO}/git/refs`, {
      ref: `refs/heads/${BRANCH}`,
      sha: commit.sha
    });
  }

  console.log('\n✓ Code publié sur GitHub.');
  console.log('  Repo: https://github.com/elvisedvais203-web/portiofolio');
  console.log('  Activez Pages: Settings → Pages → Source: GitHub Actions');
  console.log('  Site: https://elvisedvais203-web.github.io/portiofolio/');
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
