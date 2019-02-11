import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/main'
import Register from '@/components/register'
import Lessons from '@/components/lessons'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/lessons',
      name: 'Lessons',
      component: Lessons
    }
  ]
})
