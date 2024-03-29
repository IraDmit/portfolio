import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:lang(en|ru)?",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../App.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});





export default router;
