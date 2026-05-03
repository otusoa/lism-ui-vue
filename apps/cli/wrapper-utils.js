import pkg from './package.json' with { type: 'json' }

export function getOptionalDependencyPackageName(platform = process.platform, architecture = process.arch) {
  return `${pkg.name}-${platform}-${architecture}`
}

export function getBinaryFileName(platform = process.platform) {
  const binName = Object.keys(pkg.bin)[0]
  return platform === 'win32' ? `${binName}.exe` : binName
}

export function createCliEnv(sourceEnv, invokedAs) {
  let displayName = invokedAs
  if (!invokedAs || invokedAs === 'wrapper' || invokedAs === 'cli') {
    displayName = `npx ${sourceEnv.npm_package_name ?? pkg.name}`
  }

  return {
    ...sourceEnv,
    LISM_VUE_CLI_NAME: displayName,
  }
}
