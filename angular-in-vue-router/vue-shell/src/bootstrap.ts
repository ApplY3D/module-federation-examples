import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const initVue = () => {
  createApp(App)
    .use(router)
    .mount('#app');
};

//@ts-expect-error remote
import('angularApp/utils')
  .then(({ bootstrapAngularApp }) => bootstrapAngularApp())
  .then(initVue);
