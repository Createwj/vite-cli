export default [
  {
    path: "/home",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/page.vue"),
  },
];
