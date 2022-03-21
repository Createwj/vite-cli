import { createRouter as _createRouter, createWebHistory } from 'vue-router';

const importRoutes = import.meta.globEager('./modules/*.js');

const routes = Object.keys(importRoutes).reduce(
  (routesArr, path) => routesArr.concat(importRoutes[path].default),
  []
);

function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes,
  });
}

export const router = createRouter();

export function setupRouter(app) {
  app.use(router);
  router.beforeResolve((to, from, next) => {
    to.meta.title && (document.title = to.meta.title);
    next();
  });
}

export default router;
