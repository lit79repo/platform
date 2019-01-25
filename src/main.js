// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
let backendUrl="http://localhost:3000/";
import VueMaterial from 'vue-material'
import './assets/theme.scss'
import 'vue-material/dist/vue-material.css'
import 'material-icons'

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data(){
  },
  components: { App },
  template: '<App/>'
})