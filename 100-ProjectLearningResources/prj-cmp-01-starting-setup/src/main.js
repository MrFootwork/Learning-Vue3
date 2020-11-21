import { createApp } from 'vue';

import App from './App.vue';
import LearningResources from './components/learning-resources/LearningResources.vue';

const app = createApp(App);

app.component('learning-resources', LearningResources);

app.mount('#app');
