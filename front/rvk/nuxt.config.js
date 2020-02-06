// import path from 'path'
// import fs from 'fs'

const title = 'Safnaðu - viðburðaríkum frítíma í Reykjavík'
const description =
  'Það er með ólíkindum hversu mikið framboð er af skemmtilegum, fróðlegum og spennandi hlutum að sjá, prófa og njóta á söfnum Reykjavíkurborgar. Á safnadu.is færðu yfirlit yfir þær sýningar, viðburði og afþreyingu sem boðið er upp á hverju sinni.'
const image = 'img/Deilimynd.jpg'

const config = {
  router: {
    linkActiveClass: 'is-active'
  },
  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'og:description', name: 'og:description', content: description },
      { hid: 'og:image', name: 'og:image', content: image },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      { hid: 'twitter:image', name: 'twitter:image', content: image }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/fullstory.js' },
      { src: '/js/google-analytics.js' },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-53773496-2',
        async: true
      },
      { src: 'https://cdn.lightwidget.com/widgets/lightwidget.js' }
    ]
  },
  transition: {
    name: 'fade'
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  plugins: ['~plugins/components', '~/directives'],
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-facebook-pixel-module',
      {
        track: 'PageView',
        pixelId: '387630665468416',
        disabled: false
      }
    ]
  ],
  axios: {
    proxy: true
  },
  css: [
    {
      src: '~/assets/styles/app.scss',
      lang: 'scss'
    }
  ],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
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
    base: '/web/'
  }
}

module.exports = config
