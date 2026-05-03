import pkg from './package.json' with { type: 'json' }

export function getOptionalDependencyPackageName(
  platform = process.platform,
  architecture = process.arch,
) {
  return `${pkg.name}-${platform}-${architecture}`
}

export function getBinaryFileName(platform = process.platform) {
  const binName = Object.keys(pkg.bin)[0]
  return platform === 'win32' ? `${binName}.exe` : binName
}

export function createCliEnv(sourceEnv, invokedAs) {
  const binName = Object.keys(pkg.bin)[0]
  let displayName = invokedAs

  // npx (npm exec) や pnpm dlx の検知
  const isNpx = sourceEnv.npm_command === 'exec' || sourceEnv.PNPM_DLX === 'true'

  if (!invokedAs || invokedAs === 'wrapper' || invokedAs === 'cli') {
    if (isNpx) {
      displayName = `npx @lism-ui-vue/cli`
    } else {
      displayName = binName
    }
  }

  return {
    ...sourceEnv,
    LISM_VUE_CLI_NAME: displayName,
  }
}
