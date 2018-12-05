<template>
  <div>
    <div class="product-container" v-for="product in products"
      :key="product.id" @click="onProductClick(product)">
      <div class="product-image">
        <img class="img-responsive" :src="product.imgUrl"/>
      </div>
      <div class="product-info">
        <div class="product-title">{{ product.name }}</div>
        <div class="product-content">{{ product.desc }}</div>
        <span class="product-price">{{ product.price | currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import productService from '@/services/product-service';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.products = productService.get();
  },
  methods: {
    onProductClick(product) {
      this.$router.push({ name: 'productInfo', params: { id: product.id } });
    },
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
  margin: 4px 2px;
  background: #eee;
  border-radius: 3px;
  font-family: sans-serif;
}

.product-image {
  align-self: center;
  width: 30%
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-info {
  display: flex;
  padding: 5px 8px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  width: 70%;
}

.product-title {
  width: 100%;
  font-size: 1.5em;
  font-weight: bold;
}

.product-content {
  width: 100%;
  font-size: 1em;
}

.product-price {
  width: 100%;
  font-size: 1.1em;
  color: rgba(255, 30, 0, 0.884);
  text-align: right;
}
</style>
