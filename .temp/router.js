import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
})
