module.exports = (ctx, next) => {
  const req = ctx.request

  ctx.ok = function (data) {
    return {
      api: req.header.host + req.url.match(/([\\/\-\w]+)\??/)[1],
      code: 200,
      data: data,
      ret: 'success::调用成功',
      timestamp: new Date().getTime()
    }
  }

  ctx.forbidden = function () {
    return {
      api: req.header.host + req.url.match(/([\\/\-\w]+)\??/)[1],
      code: 401,
      data: null,
      message: '无接口调用权限',
      timestamp: new Date().getTime()
    }
  }

  return next()
}
