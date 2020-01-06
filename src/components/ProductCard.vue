<template>
  <div class="card card-lift--hover shadow-lg--hover border-0">
    <div class="card-body">
      <div class="product-image">
        <progressive-img
          src="1.png"
          placeholder="logo-placeholder-large.png"
          :blur="0"
        />
        <!-- <img src="../assets/img/promo/1.png" /> -->
      </div>
      <div class="product-details">
        <h6 class="text-uppercase">{{ product.title }}</h6>
        <div>
          <span
            class="badge badge-pill badge-success"
            v-if="product.usability == 0"
            >Brand New</span
          >
          <span
            class="badge badge-pill badge-info"
            v-if="product.usability == 1"
            >used</span
          >
          <span
            class="badge badge-pill badge-danger"
            v-if="product.usability == 2"
            >not working</span
          >
        </div>
        <div class="price-tag">Nrs. {{ product.price }}</div>
        <a href="#" class="btn btn-outline-success">View Info</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../styles/components/ProductCard";
</style>
