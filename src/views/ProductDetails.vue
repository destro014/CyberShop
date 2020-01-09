<template>
  <div class="product-details shifted" v-if="product">
    <h1>This is the product details of {{name}}</h1>
    {{id}}
    <br />
    {{product.title}}
    <br />
    {{product.type}}
    <br />
    {{product.description}}
    <br />
    {{product.price}}
    <br />
    {{product.rating}}
    <br />
    {{product.title}}
    <br />
    <progressive-img :src="product.image" :placeholder="this.image" :blur="0" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetails",
  data() {
    return {
      name: this.$route.params.name,
      id: this.$route.params.id,
      product: null
    };
  },
  beforeCreate() {
    axios.get("../../recent.json").then(response => {
      response.data.filter(obj => {
        if (obj.id == this.id) {
          this.product = obj;
        }
      });
    });
    this.image = "../../logo-placeholder-large.png";
  }
};
</script>

<style>
</style>