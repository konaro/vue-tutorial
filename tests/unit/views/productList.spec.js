import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';

import ProductList from '@/views/ProductList';
import ProductInfo from '@/views/ProductInfo';
import { doesNotReject } from 'assert';

const mockProducts = [
  {
    id: 1,
    name: 'Product I',
    imgUrl: 'https://images.pexels.com/photos/1200458/pexels-photo-1200458.jpeg?auto=compress&cs=tinysrgb&h=350',
    desc: 'Description',
    price: 20.00,
  },
];

jest.mock('@/services/product-service', () => ({
  get: () => mockProducts,
}));

Vue.filter('currency', value => value);

describe('ProductList.vue', () => {
  it('sets the correct data', () => {
    const wrapper = shallowMount(ProductList);

    expect(wrapper.vm.products).toEqual(mockProducts);
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
