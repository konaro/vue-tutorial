import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRx from 'vue-rx';

import ProductList from '@/views/ProductList';
import ProductInfo from '@/views/ProductInfo';

Vue.filter('currency', value => value);
Vue.use(VueRx);

jest.mock('@/services/product-service');

describe('ProductList.vue', () => {
  it('sets the correct data', () => {
    const wrapper = shallowMount(ProductList);
    const expected = [
      {
        id: 1,
        name: 'Product I',
        imgUrl: 'https://images.pexels.com/photos/1200458/pexels-photo-1200458.jpeg?auto=compress&cs=tinysrgb&h=350',
        desc: 'Description',
        price: 20.00,
      },
    ];

    expect(wrapper.vm.products).toEqual(expected);
  });

  it('trigger onProductClick method', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const routes = [
      {
        path: '/product/:id',
        name: 'productInfo',
        component: ProductInfo,
      },
    ];
    const router = new VueRouter({ routes });

    const wrapper = shallowMount(ProductList, { localVue, router });
    wrapper.vm.$nextTick(() => {
      wrapper.find('.product-container').trigger('click');
      expect(wrapper.vm.$route.name).toMatch('productInfo');
    });
  });
});
