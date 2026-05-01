import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliDir = path.resolve(__dirname, '..');
const pkgJson = JSON.parse(fs.readFileSync(path.join(cliDir, 'package.json'), 'utf-8'));
const version = pkgJson.version;

const targets = [
  { nodeOs: 'darwin', nodeArch: 'x64' },
  { nodeOs: 'darwin', nodeArch: 'arm64' },
  { nodeOs: 'linux', nodeArch: 'x64' },
  { nodeOs: 'linux', nodeArch: 'arm64' },
  { nodeOs: 'win32', nodeArch: 'x64' },
  { nodeOs: 'win32', nodeArch: 'arm64' },
];

const packages = targets.map(t => `@lism-ui-vue/cli-${t.nodeOs}-${t.nodeArch}`);
packages.push('@lism-ui-vue/cli');

console.log(`Target version: ${version}\n`);

for (const pkg of packages) {
  console.log(`--------------------------------------`);
  console.log(`Promoting ${pkg}@${version} to 'latest'...`);
  
  const { status } = spawnSync('npm', ['dist-tag', 'add', `${pkg}@${version}`, 'latest'], { 
    stdio: 'inherit', 
    shell: true 
  });

  if (status !== 0) {
    console.warn(`[Warn] Failed to promote ${pkg}. Make sure it is already published.`);
  }
}

console.log('\n✅ Done.');
