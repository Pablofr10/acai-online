import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import money from 'v-money';
import Vue2Filters from 'vue2-filters';

Vue.config.productionTip = false;

Vue.use(money, { precision: 4 });
Vue.use(Vue2Filters);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
