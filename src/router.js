import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Portfolio from "./pages/Portfolio.vue";
import SingleProject from "./pages/SingleProject.vue";
import Contacts from "./pages/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
    {
      path: "/portfolio/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
});
export { router };
