import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import money from 'v-money';
import filters from '@/Utils/filters';

Vue.config.productionTip = false;

Vue.use(money, { precision: 4 });

new Vue({
  router,
  store,
  filters,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
