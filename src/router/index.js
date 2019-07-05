import Vue from 'vue'
import Router from 'vue-router'
import Keep from '@/components/Keep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Keep',
      component: Keep
    }
  ]
})
