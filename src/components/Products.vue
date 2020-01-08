<template>
  <div class="products container-fluid">
    <div class="title">
      <h5>{{ type }} products</h5>
      <a href="#">View more</a>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" v-for="(product, i) in products" :key="i">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "Products",
  components: { ProductCard },
  props: ["type", "typeid", "url"],
  data() {
    return {
      products: null
    };
  },
  created() {
    axios.get(this.url).then(response => {
      this.products = response.data;
      if (this.typeid == 1) {
        this.products = this.products.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      }
      this.products = this.products.slice(0, 4);
    });
  }
};
</script>

<style lang="scss">
@import "../styles/components/Products.scss";
</style>
