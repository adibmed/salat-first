import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { i18n } from "../i18n";

const app = createApp(App)
app.use(i18n)
app.mount('#app')
