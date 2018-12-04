import Vue from 'vue';
import router from './router';

import ProductApp from './ProductApp';

import Currency from './filters/Currency';

Vue.config.productionTip = true;

Vue.filter('currency', Currency);

new Vue({
  router,
  render: h => h(ProductApp),
}).$mount('#app');
