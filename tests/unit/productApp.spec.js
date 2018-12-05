import { shallowMount } from '@vue/test-utils';

import ProductApp from '@/ProductApp';

describe('ProductApp.vue', () => {
  it('renders a message', () => {
    const wrapper = shallowMount(ProductApp, {
      stubs: ['router-view'],
    });

    expect(wrapper.text()).toMatch('Product App!');
  });
});
