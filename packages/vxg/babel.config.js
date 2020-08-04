const vxgPackage = require('./package.json')

const env = process.env.NODE_ENV

module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
    }],
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    ['transform-define', {
      __VXG_VERSION__: vxgPackage.version,
      __REQUIRED_VUE__: vxgPackage.peerDependencies.vue,
    }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
    ['@babel/plugin-proposal-optional-chaining', { loose: true }],
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: { node: true },
        }],
      ],
      plugins: [
        ['module-resolver', {
          root: ['./src'],
          alias: {
            '~components': 'components',
            '~directives': 'directives',
            '~mixins': 'mixins',
            '~scss': 'scss',
            '~util': 'util',
          },
        }],
      ],
    },
    es5: {
      presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
    },
    lib: {
      presets: [
        ['@babel/preset-env', {
          targets: 'last 1 chrome version',
          modules: false,
        }],
        '@vue/babel-preset-jsx'
      ],
    },
  },
}

if (['lib', 'es5'].includes(env)) {
  module.exports.plugins.push('./build/babel-transform-sass-paths.js')
}

if (env !== 'lib') {
  module.exports.plugins.push('@babel/plugin-proposal-object-rest-spread')
}
