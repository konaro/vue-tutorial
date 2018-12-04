<template>
  <div id="productApp">
    <h1>Product App!</h1>
    <product-list @product-click="onProductClick"></product-list>
    <product-info v-if="product" :item="product"></product-info>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList';
import ProductInfo from '@/components/ProductInfo';

export default {
  data() {
    return {
      product: undefined,
    };
  },
  components: {
    ProductList,
    ProductInfo,
  },
  methods: {
    onProductClick(product) {
      this.product = product;
    },
  },
};
</script>
