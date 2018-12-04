<template>
  <div>
    <h2>Product Info</h2>
    <div class="product-container">
      <div class="product-title">{{ product.name }}</div>
      <div class="product-image">
        <img :src="product.imgUrl" />
      </div>
      <div class="product-info">
        <div class="product-content">{{ product.desc }}</div>
        <span class="product-price">{{ product.price | currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    item: {
      Object,
      default: {},
    },
  },
  data() {
    return {
      product: this.item,
    };
  },
  watch: {
    item(value) {
      this.product = value;
    },
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: #eee;
  border-radius: 3px;
  font-family: sans-serif;
}

.product-title {
  width: 100%;
  padding: 10px 20px;
  font-size: 2.5em;
}

.product-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
}

.product-image img {
  align-self: center;
  width: 60%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.product-info {
  width: 100%;
  padding: 10px;
}

.product-content {
  width: 100%;
  font-size: 1.5em;
}

.product-price {
  color: rgba(255, 30, 0, 0.884);
  font-size: 2em;
  float: right;
}
</style>
