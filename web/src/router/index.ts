import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      name: 'webChannel',
      component: () => import('@/views/WebChannelView.vue'),
    },
    {
      path: '/graphs',
      name: 'graphs',
      component: () => import('@/views/GraphsView.vue'),
    },
  ],
})

export default router
