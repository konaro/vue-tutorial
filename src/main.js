import Vue from 'vue';
import VueRx from 'vue-rx';
import router from '@/router';

import ProductApp from '@/ProductApp';

import Currency from '@/filters/Currency';

Vue.config.productionTip = true;

Vue.filter('currency', Currency);
Vue.use(VueRx);

new Vue({
  router,
  render: h => h(ProductApp),
}).$mount('#app');
