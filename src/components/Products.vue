<template>
  <div class="products container-fluid">
    <h5>{{ type }} products {{typeid}}</h5>
    <div class="row">
      <div class="col-lg-3" v-for="(product, i) in products" :key="i">{{product.title}}</div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";
export default {
  name: "Products",
  components: { VueperSlides, VueperSlide },
  props: ["type", "typeid", "data"],
  data() {
    return {
      products: null
    };
  },
  mounted() {
    axios.get(this.data).then(response => {
      this.products = response.data;
    });
  }
};
</script>

<style>
@import "../styles/components/Products.scss";
</style>
