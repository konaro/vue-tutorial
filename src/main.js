import Vue from 'vue';
import ProductApp from './ProductApp';

import Currency from './filters/Currency';

Vue.config.productionTip = true;

Vue.filter('currency', Currency);

new Vue({
  render: h => h(ProductApp),
}).$mount('#app');
