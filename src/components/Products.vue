<template>
  <div class="products container-fluid">
    <div class="title">
      <h5>{{ type}}</h5>
      <router-link
        :to="{name : 'category', params: {name: type, id: typeId}}"
        v-if="typeLength==4 "
      >View more</router-link>
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
  props: ["type", "typeId", "typeLength"],
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["allProducts"]),
    ...mapGetters(["recentProducts"]),
    ...mapGetters(["electronicsProducts"]),
    ...mapGetters(["electronicsAccessories"])
  },
  methods: {
    // ...mapActions(["fetchProducts"]),
    ...mapActions(["fetchRecentProducts"]),
    ...mapActions(["fetchElectronicsProducts"]),
    ...mapActions(["fetchElectronicsAccessories"]),
    computedProducts() {
      if (this.typeId == 0) {
        return this.recentProducts;
      }
      if (this.typeId == 1) {
        if (this.typeLength == 4 || this.typeLength == 0) {
          return this.electronicsProducts;
        } else {
          return this.electronicsProducts;
        }
      }
      if (this.typeId == 2) {
        return this.electronicsAccessories;
      }
    }
  },
  beforeMount() {
    this.fetchRecentProducts();
    this.fetchElectronicsProducts();
    this.fetchElectronicsAccessories();

    // else {
    //   this.fetchProducts();
    // }
  }
};
</script>

<style lang="scss">
@import "../styles/components/Products.scss";
</style>
