import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
  // default route
  {
    path: "/:pathMatch(.*)*",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
