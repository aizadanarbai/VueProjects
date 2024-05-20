import { ABOUT_ROUTES } from "@/apps/About/urls";
import { HOME_ROUTES } from "@/apps/Home/urls";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [...HOME_ROUTES, ...ABOUT_ROUTES];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
