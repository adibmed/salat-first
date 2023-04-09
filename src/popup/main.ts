import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { router } from '../router';
const pinia = createPinia();
import { i18n } from '../i18n';
import locations from '../static/locations.json';


chrome.storage.sync.get('city', (result) => {
    if (!result.city) {
      chrome.storage.sync.set({ city: locations[0] }, () => {});
    }
  });

import hijriDateHelper from "../helpers/hijriDateHelper";

const app = createApp(App);

app.config.globalProperties.$hijriDateHelper = hijriDateHelper;

app.use(pinia);
app.use(i18n);
app.use(router);
app.mount('#app');
