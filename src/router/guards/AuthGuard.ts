import { RouteLocationNormalized, Router } from "vue-router";

export function UseAuthGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized) => {
    if (!to.meta.requiresAuth) {
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  });
}
