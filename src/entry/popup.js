import Vue from "vue";
import App from "../view/popup.vue";
import router from "../router";
import "../index.css";

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
