import type { RouteRecordRaw } from 'vue-router'
const index: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/page',
    component: () => import('@/views/page.vue')
  }
]
export default index
