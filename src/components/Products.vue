<template>
  <div class="products container-fluid">
    <div class="title">
      <h5>{{ type }} products</h5>
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
    ...mapGetters(["allProducts"]),
    ...mapGetters(["recentProducts"]),
    ...mapGetters(["electronicsProducts"])
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    ...mapActions(["fetchRecentProducts"]),
    ...mapActions(["fetchElectronicsProducts"]),
    computedProducts() {
      if (this.typeid == 0) {
        return this.recentProducts;
      }
      if (this.typeid == 1) {
        // this.allProducts.filter(obj => {
        //   if (obj.category.id == this.typeid) {
        //     return obj;
        //   }
        // });
        return this.electronicsProducts;
      } else {
        return this.allProducts;
      }
    }
  },
  beforeMount() {
    this.fetchProducts();
    this.fetchRecentProducts();
    this.fetchElectronicsProducts();
  }
};
</script>

<style lang="scss">
@import "../styles/components/Products.scss";
</style>
