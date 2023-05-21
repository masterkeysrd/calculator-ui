import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import { UseAuthGuard } from "./guards/AuthGuard";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/MainView.vue"),
    meta: {
        requiresAuth: true,
    },
    children: [
      {
        path: "/",
        name: "Index",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/records",
        name: "Records",
        component: () => import("../views/RecordView.vue"),
      }
    ]
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
