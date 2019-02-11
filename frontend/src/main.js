import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import './assets/theme.scss'

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
