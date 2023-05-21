import { RouteLocationNormalized, Router } from "vue-router";
import { useIsAuthenticated } from "../../common/auth/login";

export function UseAuthGuard(router: Router) {
  const isAuthenticated = useIsAuthenticated();

  router.beforeEach((to: RouteLocationNormalized) => {
    if (!to.meta.requiresAuth) {
      return;
    }

    if (!isAuthenticated.value) {
      return "/login";
    }
  });
}
