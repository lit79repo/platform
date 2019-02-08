// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ShardsVue from 'shards-vue'
import Ionic from '@ionic/vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'


Vue.use(Ionic);
Vue.use(ShardsVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
