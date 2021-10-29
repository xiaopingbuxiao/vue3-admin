const UserService = require('../services/userService')

class UserController {
  static async getUserInfo (ctx, next) {
    debugger
    ctx.body = ctx.ok(UserService.getUserInfo())
  }

  static async test (ctx) {
    ctx.body = ctx.ok()
  }
}

module.exports = UserController
