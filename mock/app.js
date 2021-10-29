
const Koa = require('koa')
const logger = require('koa-logger')
const cors = require('@koa/cors')

const router = require('./routes/index')
const postProcessing = require('./middleware/postProcessing')
const { availablePorts } = require('./util')

const app = new Koa()

app.use(logger())
  .use(cors())
  .use(postProcessing)
  .use(router.routes())
  .use(router.allowedMethods())

availablePorts(3000).then(port => {
  app.listen(port, () => {
    console.log(`mock server is running on port ${port}... 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎`)
  })
})
