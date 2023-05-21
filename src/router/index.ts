import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import { UseAuthGuard } from "./guards/AuthGuard";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: {
        requiresAuth: true,
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

UseAuthGuard(router);

export default router;
