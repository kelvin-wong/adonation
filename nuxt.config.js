module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Adonation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Donation by Ads' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', defer: true },
      {
        innerHTML: '(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-6140044473305282", enable_page_level_ads: true })',
        type: 'text/javascript'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#EA001E' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/bulma'
  ]
}
