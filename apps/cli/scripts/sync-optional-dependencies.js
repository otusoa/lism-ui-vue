import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliDir = path.resolve(__dirname, '..');
const packageJsonPath = path.join(cliDir, 'package.json');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const version = packageJson.version;
const optionalDependencies = packageJson.optionalDependencies ?? {};

let changed = false;
for (const dependencyName of Object.keys(optionalDependencies)) {
  if (optionalDependencies[dependencyName] !== version) {
    optionalDependencies[dependencyName] = version;
    changed = true;
  }
}

if (!changed) {
  process.exit(0);
}

packageJson.optionalDependencies = optionalDependencies;
fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
