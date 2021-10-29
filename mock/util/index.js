const net = require('net')

const availablePorts = (port = 3000) => {
  const server = net.createServer()
  return new Promise((resolve, reject) => {
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        availablePorts(port + 1)
      } else {
        console.log(error)
        process.exit(1)
      }
    })
    server.on('listening', () => {
      server.close()
      resolve(port)
    })

    server.listen(port)
  })
}

module.exports = {
  availablePorts
}
