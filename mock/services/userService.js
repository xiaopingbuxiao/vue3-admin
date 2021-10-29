var Mock = require('mockjs')

class UserService {
  static getUserInfo () {
    return {
      userName: '小明',
      age: 18,
      role: 'admin',
      address: '上海市松江区xxx',
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}

module.exports = UserService
