export default [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/page",
    component: () => import("@/views/page.vue"),
  },
]
