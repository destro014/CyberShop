<template>
  <div class="products container-fluid">
    <div class="title">
      <h5>{{ type }}</h5>
      <a href="#">View more</a>
    </div>
    <div class="row">
      <div
        class="col-lg-3 col-md-3 col-sm-6 col-xs-12"
        v-for="(product, i) in computedProducts()"
        :key="i"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "Products",
  components: { ProductCard },
  props: ["type", "typeid"],
  data() {
    return {
      // products: null
    };
  },
  computed: {
    // ...mapGetters(["allProducts"]),
    ...mapGetters(["recentProducts"]),
    ...mapGetters(["electronicsProducts"])
  },
  methods: {
    // ...mapActions(["fetchProducts"]),
    ...mapActions(["fetchRecentProducts"]),
    ...mapActions(["fetchElectronicsProducts"]),
    computedProducts() {
      if (this.typeid == 0) {
        return this.recentProducts;
      }
      if (this.typeid == 1) {
        return this.electronicsProducts;
      }
    }
  },
  beforeMount() {
    if (this.typeid == 0) {
      this.fetchRecentProducts();
    }
    if (this.typeid == 1) {
      this.fetchElectronicsProducts();
    }
    // else {
    //   this.fetchProducts();
    // }
  }
};
</script>

<style lang="scss">
@import "../styles/components/Products.scss";
</style>
