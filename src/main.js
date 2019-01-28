// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
let backendUrl="http://localhost:3000/";
import VueMaterial from 'vue-material';
import './assets/theme.scss';
import 'vue-material/dist/vue-material.css';
import 'material-icons';
import core from '@/frontend.modules/main';

let lit79 = new core();

Vue.use(VueMaterial);

Vue.config.productionTip = false;


let app = new Vue({
  el: '#app',
  router,
  data() {
  	return {
  		lit79: lit79
  	}
  },
  components: { App },
  template: '<App/>'
});