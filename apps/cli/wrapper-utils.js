export function getOptionalDependencyPackageName(platform, architecture) {
  return `@lism-ui-vue/cli-${platform}-${architecture}`
}

export function getBinaryFileName(platform) {
  return platform === 'win32' ? 'lism-ui-vue.exe' : 'lism-ui-vue'
}

export function createCliEnv(sourceEnv) {
  return {
    ...sourceEnv,
    LISM_VUE_CLI_NAME: `npx ${sourceEnv.npm_package_name ?? '@lism-ui-vue/cli'}`,
  }
}
