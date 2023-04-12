import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path:'/morework',
    component: WorkView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
