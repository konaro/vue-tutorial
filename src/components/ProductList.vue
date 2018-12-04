<template>
  <div>
    <div class="product-container" v-for="item in products" :key="item.id">
      <div class="product-image">
        <img class="img-responsive" :src="item.imgUrl"/>
      </div>
      <div class="product-info">
        <div class="product-title">{{ item.name }}</div>
        <div class="product-content">{{ item.desc }}</div>
        <span class="product-price">{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Car',
          imgUrl: 'https://images.pexels.com/photos/1200458/pexels-photo-1200458.jpeg?auto=compress&cs=tinysrgb&h=350',
          desc: 'A luxury car you won\'t miss it.',
          price: 199.99,
        },
        {
          id: 2,
          name: 'Bike',
          imgUrl: 'https://images.pexels.com/photos/1239460/pexels-photo-1239460.jpeg?auto=compress&cs=tinysrgb&h=350',
          desc: 'A durable bike you\'ve never ride.',
          price: 25.00,
        },
      ],
    };
  },
};
</script>

<style>
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
  display: flex;
  width: 30%
}

.product-image img {
  align-self: center;
  width: 100%;
  height: auto;
}

.product-info {
  display: flex;
  padding: 5px 8px;
  flex-direction: raw;
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
