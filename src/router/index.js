import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../pages/Home/home'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/goWhere,
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})
