import Vue from 'vue'
import Router from 'vue-router'
const thingspage = resolve => require(['./assets/thingspage.vue'], resolve)
const home = resolve => require(['./assets/home.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/thingspage',
      component: thingspage
    }
  ]
})
