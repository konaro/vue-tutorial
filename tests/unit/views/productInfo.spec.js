import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import VueRx from 'vue-rx';

import ProductInfo from '@/views/ProductInfo';

const $route = {
  path: '/product/1',
  params: { id: 1 },
};

Vue.filter('currency', value => value);

Vue.use(VueRx);
jest.mock('@/services/product-service');

describe('ProductInfo.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductInfo, { mocks: { $route } });
  });

  it('sets the correct data', () => {
    const expected = {
      id: 1,
      name: 'Product I',
      imgUrl: 'https://images.pexels.com/photos/1200458/pexels-photo-1200458.jpeg?auto=compress&cs=tinysrgb&h=350',
      desc: 'Description',
      price: 20.00,
    };

    expect(wrapper.vm.product).toEqual(expected);
  });

  it('compute correct amount', () => {
    const input = wrapper.find('#qty');
    input.element.value = 2;
    input.trigger('input');

    expect(wrapper.vm.amount).toBeCloseTo(40.00);
  });

  it('trigger onBackClick method', () => {
    wrapper.setMethods({ onBackClick: jest.fn() });

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.onBackClick).toHaveBeenCalledTimes(1);
  });
});
