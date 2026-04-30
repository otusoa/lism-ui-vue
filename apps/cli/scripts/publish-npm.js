import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliDir = path.resolve(__dirname, '..');
const distDir = path.join(cliDir, 'dist');

// ルートのバージョンを取得
const mainPkgJson = JSON.parse(fs.readFileSync(path.join(cliDir, 'package.json'), 'utf-8'));
const version = mainPkgJson.version;

const getNpmTag = (pkgVersion) => {
  const prereleaseMatch = pkgVersion.match(/-(alpha|beta|rc|next)(?:\.|$)/)
  return prereleaseMatch ? prereleaseMatch[1] : 'latest'
}

const npmTag = getNpmTag(version)

const publishPackage = (cwd, name, tag) => {
  console.log(`Publishing ${name} with tag ${tag}...`)
  const { status } = spawnSync('npm', ['publish', '--access', 'public', '--provenance', '--tag', tag], {
    cwd,
    stdio: 'inherit',
  })
  if (status !== 0) {
    console.error(`Failed to publish ${name}`)
    process.exit(1)
  }
}

// GoのOS/Arch表記とNodeのOS/Arch表記のマッピング
const targets = [
  { goOs: 'darwin', goArch: 'amd64', nodeOs: 'darwin', nodeArch: 'x64' },
  { goOs: 'darwin', goArch: 'arm64', nodeOs: 'darwin', nodeArch: 'arm64' },
  { goOs: 'linux', goArch: 'amd64', nodeOs: 'linux', nodeArch: 'x64' },
  { goOs: 'linux', goArch: 'arm64', nodeOs: 'linux', nodeArch: 'arm64' },
  { goOs: 'windows', goArch: 'amd64', nodeOs: 'win32', nodeArch: 'x64', ext: '.exe' },
  { goOs: 'windows', goArch: 'arm64', nodeOs: 'win32', nodeArch: 'arm64', ext: '.exe' },
];

for (const target of targets) {
  const ext = target.ext || '';
  const binaryFileName = `lism-ui-vue-${target.goOs}-${target.goArch}${ext}`;
  const binaryPath = path.join(distDir, binaryFileName);

  if (!fs.existsSync(binaryPath)) {
    console.warn(`Binary not found: ${binaryFileName}. Skipping...`);
    continue;
  }

  const pkgName = `@lism-ui-vue/cli-${target.nodeOs}-${target.nodeArch}`;
  const pkgDir = path.join(cliDir, 'packages', pkgName);
  fs.mkdirSync(pkgDir, { recursive: true });

  // 1. バイナリのコピー
  const destBinName = `lism-ui-vue${ext}`;
  fs.copyFileSync(binaryPath, path.join(pkgDir, destBinName));
  if (target.goOs !== 'windows') {
    fs.chmodSync(path.join(pkgDir, destBinName), 0o755); // 実行権限を付与
  }

  // 2. サブパッケージ用 package.json 作成
  const pkgJson = {
    name: pkgName,
    version: version,
    description: `The ${target.nodeOs}-${target.nodeArch} binary for @lism-ui-vue/cli`,
    os: [target.nodeOs],
    cpu: [target.nodeArch],
    type: "module"
  };
  fs.writeFileSync(path.join(pkgDir, 'package.json'), JSON.stringify(pkgJson, null, 2));

  // 3. 各サブパッケージを npm publish
  publishPackage(pkgDir, pkgName, npmTag)
}

publishPackage(cliDir, '@lism-ui-vue/cli', npmTag)
