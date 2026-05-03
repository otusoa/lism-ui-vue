import { describe, it, expect, vi } from 'vitest'
import {
  getOptionalDependencyPackageName,
  getBinaryFileName,
  createCliEnv,
} from './wrapper-utils.js'
import { setupUpdateNotifier } from './wrapper.js'
import updateNotifier from 'update-notifier'

// update-notifier をモック
vi.mock('update-notifier', () => {
  const notify = vi.fn()
  return {
    default: vi.fn(() => ({
      notify,
    })),
  }
})

describe('wrapper-utils', () => {
  it('getOptionalDependencyPackageName builds the platform package name', () => {
    expect(getOptionalDependencyPackageName('win32', 'x64')).toBe('@lism-ui-vue/cli-win32-x64')
    expect(getOptionalDependencyPackageName('linux', 'arm64')).toBe('@lism-ui-vue/cli-linux-arm64')
  })

  it('getBinaryFileName uses the Windows executable suffix only on win32', () => {
    expect(getBinaryFileName('win32')).toBe('lism-ui-vue.exe')
    expect(getBinaryFileName('linux')).toBe('lism-ui-vue')
  })

  it('createCliEnv exposes the npx-style display name when npx/pnpm dlx is detected', () => {
    expect(
      createCliEnv({ npm_package_name: '@lism-ui-vue/cli', npm_command: 'exec' }, 'wrapper'),
    ).toMatchObject({
      LISM_VUE_CLI_NAME: 'npx @lism-ui-vue/cli',
    })
    expect(createCliEnv({ PNPM_DLX: 'true' }, 'wrapper')).toMatchObject({
      LISM_VUE_CLI_NAME: 'npx @lism-ui-vue/cli',
    })
  })

  it('createCliEnv uses the binary name when generic wrapper is used but NOT npx', () => {
    expect(createCliEnv({}, 'wrapper').LISM_VUE_CLI_NAME).toBe('lism-ui-vue')
  })

  it('createCliEnv uses the invoked name when it is not a generic wrapper name', () => {
    expect(createCliEnv({}, 'some-other-name').LISM_VUE_CLI_NAME).toBe('some-other-name')
  })

  it('createCliEnv falls back to the binary name when invokedAs is missing', () => {
    expect(createCliEnv({}).LISM_VUE_CLI_NAME).toBe('lism-ui-vue')
  })
})

describe('update-notifier', () => {
  it('should call update-notifier with correct package info', () => {
    const pkg = { name: 'test-package', version: '1.0.0' }
    setupUpdateNotifier(pkg)

    // updateNotifier が呼ばれたか
    expect(updateNotifier).toHaveBeenCalledWith({ pkg })

    // notify メソッドが呼ばれたか
    const mockNotifier = vi.mocked(updateNotifier).mock.results[0].value
    expect(mockNotifier.notify).toHaveBeenCalledWith({
      isGlobal: true,
      defer: true,
    })
  })
})
