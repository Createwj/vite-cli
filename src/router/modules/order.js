export default [
  {
    path: "/my",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "index",
        component: () => import("@/views/my/index.vue"),
      },
      {
        path: "about",
        component: () => import("@/views/my/about.vue"),
      },
    ],
  },
];
