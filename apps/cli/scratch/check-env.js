console.log('argv[1]:', process.argv[1])
console.log('npm_package_name:', process.env.npm_package_name)
console.log('npm_config_argv:', process.env.npm_config_argv)
console.log('running via npx?', !!process.env.npm_config_argv || process.argv[1].includes('_npx'))
