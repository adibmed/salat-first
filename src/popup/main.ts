import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "../router";
const pinia = createPinia();
import { i18n } from "../i18n";

const app = createApp(App);
app.use(pinia);
app.use(i18n);
app.use(router);
app.mount("#app");
