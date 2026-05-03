export function getOptionalDependencyPackageName(platform, architecture) {
  return `@lism-ui-vue/cli-${platform}-${architecture}`
}

export function getBinaryFileName(platform) {
  return platform === 'win32' ? 'lism-ui-vue.exe' : 'lism-ui-vue'
}

export function createCliEnv(sourceEnv, invokedAs) {
  let displayName = invokedAs
  if (!invokedAs || invokedAs === 'wrapper' || invokedAs === 'cli') {
    displayName = `npx ${sourceEnv.npm_package_name ?? '@lism-ui-vue/cli'}`
  }

  return {
    ...sourceEnv,
    LISM_VUE_CLI_NAME: displayName,
  }
}
