import dev from './dev.config'
import test from './test.config'
import prod from './prod.config'

const env = process.env.VUE_APP_ENV

const config = {
  dev: dev,
  test: test,
  production: prod,
}

export default {
  env: env,
  ...config[env],
}
