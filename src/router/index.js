import Vue from 'vue'
import VueRouter from 'vue-router'
import mainbody from '../views/mainbody'

Vue.use(VueRouter)

  const routes = [
    {
      path:"/home",
      component:mainbody
    }
]

const router = new VueRouter({
  routes
})

export default router
