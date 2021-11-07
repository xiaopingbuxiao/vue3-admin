
const files = require.context('./', true, /index\.(?:vue|jsx)/)

const components = files.keys().map(file => {
  const component = files(file).default
  return component
})
console.log(components)

let installed = false

export default {
  install (app, options) {
    if (installed) {
      return
    }
    components.forEach(component => {
      app.component(component.name, component)
    })
    installed = true
  },
}
