import assert from 'node:assert/strict'
import test from 'node:test'

import {
  createCliEnv,
  getBinaryFileName,
  getOptionalDependencyPackageName,
} from './wrapper-utils.js'

test('getOptionalDependencyPackageName builds the platform package name', () => {
  assert.equal(getOptionalDependencyPackageName('win32', 'x64'), '@lism-ui-vue/cli-win32-x64')
  assert.equal(getOptionalDependencyPackageName('linux', 'arm64'), '@lism-ui-vue/cli-linux-arm64')
})

test('getBinaryFileName uses the Windows executable suffix only on win32', () => {
  assert.equal(getBinaryFileName('win32'), 'lism-ui-vue.exe')
  assert.equal(getBinaryFileName('linux'), 'lism-ui-vue')
})

test('createCliEnv exposes the npx-style display name', () => {
  assert.deepEqual(createCliEnv({ npm_package_name: '@lism-ui-vue/cli', PATH: 'x' }), {
    npm_package_name: '@lism-ui-vue/cli',
    PATH: 'x',
    LISM_VUE_CLI_NAME: 'npx @lism-ui-vue/cli',
  })
})

test('createCliEnv falls back to the package default when npm_package_name is missing', () => {
  assert.equal(createCliEnv({}).LISM_VUE_CLI_NAME, 'npx @lism-ui-vue/cli')
})
