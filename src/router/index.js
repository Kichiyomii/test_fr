import { createRouter, createWebHashHistory } from 'vue-router'
import Quiz from '../pages/Quiz.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Quiz
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
