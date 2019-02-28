import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../pages/Home/home'
import City from '../pages/City/City'

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
    {
      path: '/city',
      name: 'City',
      component: City
    },
  ]
})
