import Vue from 'vue'
import firebase from 'firebase'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Blogs from '@/components/Blogs'
import lessons from '@/components/Lessons'
import websiteSchool from '@/components/mainwebsite'
import Auth from '@/components/auth'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/auth',
      component: Auth
    },
    {
      path: '/main',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/lessons',
      name: 'Lessons',
      component: lessons
    },
    {
    	path: "/l",
    	name: "l",
    	component: websiteSchool
    }
  ]
})
export default router