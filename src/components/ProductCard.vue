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
        <p class="description mt-3"></p>
        <div>
          <span class="badge badge-pill badge-success">Brand New</span>
          <span class="badge badge-pill badge-info">used</span>
          <span class="badge badge-pill badge-danger">not working</span>
        </div>
        <a href="#" class="btn btn-outline-success mt-4">View Info</a>
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
