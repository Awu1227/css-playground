import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('@cp/Filter.vue')
    },
    {
      path: '/object-position',
      name: 'object-position',
      component: () => import('@cp/ObjectPosition.vue')
    },
  ]
})

export default router
