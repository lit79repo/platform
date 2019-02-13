import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import './assets/theme.scss'
import 'vue-material/dist/vue-material.min.css'
import 'material-icons/iconfont/material-icons.css'
import lowdb_loader from '@/lib/lowdb_loader';
import lowdb from 'lowdb';
window.lowdb = lowdb;
window.lowdb_loader = lowdb_loader;
Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
