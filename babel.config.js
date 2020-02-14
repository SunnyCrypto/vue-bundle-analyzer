module.exports = {
  plugins: ['lodash'],
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/env', { targets: { node: 6 } }]
  ]
}
