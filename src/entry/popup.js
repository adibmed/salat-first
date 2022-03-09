import Vue from "vue";
import App from "../view/popup.vue";
import router from "../router";
import "../index.css";
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  el: "#app",
  router,
  pinia,
  render: (h) => h(App),
});
