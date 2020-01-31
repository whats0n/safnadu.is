// import path from 'path'
// import fs from 'fs'

const config = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  transition: {
    name: 'fade'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~plugins/components',
    '~/directives'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  // proxy: {
  //   '/api/': {
  //     target: 'https://hvirfill.reykjavik.is',
  //     pathRewrite: {
  //       '^/api/': ''
  //     }, 
  //     changeOrigin: true
  //   }
  // },
  css: [
    '@/assets/styles/app.scss'
  ],
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
        // config.resolve.alias.vue = 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  }
}

if (process.env.DEPLOY_ENV === 'deploy') {
  config.router = {
    base: '/dist/'
  }
}

module.exports = config