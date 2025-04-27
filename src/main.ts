import './main.scss';
import 'swiper/swiper-bundle.css';

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import fr from '@locales/fr.json';
import en from '@locales/en.json';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: { fr, en },
});

app.use(router);
app.use(i18n);
app.mount('#app');
