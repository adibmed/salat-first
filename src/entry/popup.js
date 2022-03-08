import Vue from "vue";
import App from "../view/popup.vue";
import router from "../router";
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
