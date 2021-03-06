import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    //titleTemplate: '%s - PerfectSecurityApplication',
    title: '世界一セキュリティが堅牢なアプリ',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '世界一セキュリティが堅牢なアプリです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '世界一セキュリティが堅牢なアプリ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://perfectsecurityapplication.web.app' },
      { hid: 'og:title', property: 'og:title', content: '世界一セキュリティが堅牢なアプリ' },
      { hid: 'og:description', property: 'og:description', content: '凄腕ハッカーのみ突破することができる、世界一セキュリティが堅牢なアプリです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://perfectsecurityapplication.web.app/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },　//twitterの画像サイズ summary_large_image
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: process.env.GAID,
    debug: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
