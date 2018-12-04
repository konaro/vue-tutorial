import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/ProductList.vue'),
    },
    {
      path: '/product/:id',
      name: 'productInfo',
      component: () => import('./views/ProductInfo.vue'),
    },
    { path: '*', redirect: '/product' },
  ],
});
