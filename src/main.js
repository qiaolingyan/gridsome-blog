// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// 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

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


import './assets/css/index.css'
import './assets/fonts/iconfont.css'
// import './assets/fonts/iconfont.js'

import DefaultLayout from '~/layouts/Default.vue'
import FileItem from '~/components/FileItem.vue'

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  Vue.component('Layout', DefaultLayout)
  Vue.component('File', FileItem)
}
