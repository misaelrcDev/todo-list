import { createApp } from 'vue';
import App from 'App.vue';
import router from './router';
import store from './store';
import '@plugins/vee-validate';
import '@/assets/css/tailwind.css';

createApp(App).use(store).use(router).mount('#app');
