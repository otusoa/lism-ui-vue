import { spawnSync } from 'node:child_process';

const targets = [
  { nodeOs: 'darwin', nodeArch: 'x64' },
  { nodeOs: 'darwin', nodeArch: 'arm64' },
  { nodeOs: 'linux', nodeArch: 'x64' },
  { nodeOs: 'linux', nodeArch: 'arm64' },
  { nodeOs: 'win32', nodeArch: 'x64' },
  { nodeOs: 'win32', nodeArch: 'arm64' },
];

const packages = targets.map(
  (t) => `@lism-ui-vue/cli-${t.nodeOs}-${t.nodeArch}`
);
packages.push('@lism-ui-vue/cli');

for (const pkg of packages) {
  console.log(`\n======================================`);
  console.log(`Setting up OIDC for ${pkg}...`);
  console.log(`======================================\n`);
  
  // Step 1: Create placeholder package (This handles the "package doesn't exist" problem)
  // Without --github.* flags, it publishes a minimal placeholder.
  console.log(`[1/2] Creating placeholder package on npm...`);
  spawnSync('npx', ['--yes', 'setup-npm-trusted-publish', pkg], { stdio: 'inherit', shell: true });

  // Step 2: Configure Trusted Publishing (OIDC)
  // Now that the package exists, we can use --github.* flags to run `npm trust`.
  console.log(`\n[2/2] Configuring GitHub OIDC trust...`);
  const args = [
    '--yes',
    'setup-npm-trusted-publish',
    pkg,
    '--github.repo', 'otusoa/lism-ui-vue',
    '--github.file', 'go-cli.yml'
  ];

  const { status } = spawnSync('npx', args, { stdio: 'inherit', shell: true });

  if (status !== 0) {
    console.error(`Failed to set up OIDC for ${pkg}`);
    process.exit(1);
  }
}

console.log('\n✅ All packages have been successfully configured for OIDC publishing!');
