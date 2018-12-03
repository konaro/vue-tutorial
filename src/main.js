import Vue from 'vue';
import ProductApp from './ProductApp';

Vue.config.productionTip = true;

new Vue({
  render: h => h(ProductApp),
}).$mount('#app');
