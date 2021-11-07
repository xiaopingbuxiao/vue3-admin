function importAllIcon (r) {
  r.keys().forEach(r)
}
importAllIcon(require.context('./svg/', true, /\.svg$/))
