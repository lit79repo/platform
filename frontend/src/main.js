// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ionic from '@ionic/vue'
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
 
if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}
Vue.use(Ionic);

Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
