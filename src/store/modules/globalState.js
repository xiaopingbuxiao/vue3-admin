
export default {
  namespaced: 'globalState',
  state: {
    collapse: false,

  },
  mutations: {
    collapseToggle (state) {
      state.collapse = !state.collapse
    },
  },
  actions: {

  },
  modules: {

  },
}
