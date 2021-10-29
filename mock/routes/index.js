const Router = require('@koa/router')

const UserController = require('../controllers/userController')

const router = new Router({
  prefix: '/mock'
})

router.get('/user_info', UserController.getUserInfo)

router.get('/test', UserController.test)

module.exports = router
