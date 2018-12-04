<template>
  <div id="productApp">
    <h1>Product App!</h1>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList';

export default {
  components: {
    ProductList,
  },
};
</script>
