import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../pages/Home/home'
import City from '../pages/City/City'
import Details from '../pages/Details/Details'

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
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    },
  ]
})
