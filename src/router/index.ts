import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/BooksContainer.vue')
    },
    {
      path: '/register-book',
      name: 'register-book',
      component: () => import('../views/BooksFormContainer.vue')
    }
  ]
})

export default router
