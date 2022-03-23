import type { RouteRecordRaw } from 'vue-router'
const index: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  }
]
export default index
