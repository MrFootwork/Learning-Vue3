import { createApp } from 'vue';

import store from './store/index';
import router from './router';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-badge', BaseBadge);

app.mount('#app');
