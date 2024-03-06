import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugin/i18n";

//style
import "./assets/scss/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");


// router.beforeEach((to, from, next) => {
//   i18n.locale = to.params.locale || "ru";
//   if (to.path.length > 1 && to.path[to.path.length - 1] == "/") {
//     next({
//       path: to.path.substring(0, to.path.length - 1),
//     });
//   } else next();
// });