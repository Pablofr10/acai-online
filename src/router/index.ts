import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Painel from '@/views/Painel.vue';

function lazyLoad(view: string) {
  return () => import(`@/views/${view}.vue`);
}

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'painel',
    component: Painel,
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: lazyLoad('Produtos'),
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: lazyLoad('Pedidos'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
