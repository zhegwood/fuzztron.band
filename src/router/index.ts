import { createRouter, createWebHistory } from 'vue-router'
import BioView from '@/views/BioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BioView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('@/views/BookingView.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/views/MusicView.vue'),
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('@/views/VideosView.vue'),
    },
    {
      path: '/tech-stage',
      name: 'tech-stage',
      component: () => import('@/views/TechStageView.vue'),
    },
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    */
  ],
})

export default router
