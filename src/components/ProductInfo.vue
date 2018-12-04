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
      <div class="purchase-form">
        <div class="form-control">
          <label for="qty">Qty: </label>
          <input type="number" id="qty" v-model="quantity">
        </div>
        <div class="purchase-amount">{{ amount | currency }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      product: this.item,
      quantity: 0,
    };
  },
  watch: {
    item(value) {
      this.product = value;
    },
  },
  computed: {
    amount() {
      return this.product.price * this.quantity;
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

.purchase-form {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: center;
  align-items: baseline;
}

.form-control {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
}

.purchase-amount {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.form-control label {
  font-size: 1.2em;
}

.form-control input::-webkit-inner-spin-button{
  -webkit-appearance: none;
}

.form-control input {
  margin: 0 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 2px;
  line-height: 20px;
  width: 40px;
  font-size: 1.1em;
  text-align: center;
}
</style>
