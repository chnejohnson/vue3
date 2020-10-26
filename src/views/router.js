import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/recognition", component: () => import("./Recognition.vue") },
  { path: "/payment", component: () => import("./Payment.vue") },
  { path: "/example", component: () => import("./Example.vue") }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
