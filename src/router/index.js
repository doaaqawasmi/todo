import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import projects from '../views/ProjectS.vue'
import team from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/team',
    name: 'team',
    component: team
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
