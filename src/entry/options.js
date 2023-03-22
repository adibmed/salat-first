import Vue from "vue";
import App from "../view/options.vue";
import "../index.css";
import { createPinia, PiniaVuePlugin } from "pinia";
import i18n from "../i18n";

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

new Vue({
  el: "#app",
  i18n,
  pinia,
  render: (h) => h(App),
});
