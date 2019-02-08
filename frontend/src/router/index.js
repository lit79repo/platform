import Vue from 'vue'
import Router from 'vue-router'
import Panel from '@/components/panel'
import Auth from '@/components/auth'
import Main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/panel',
      name: 'Panel',
      component: Panel
    },
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
