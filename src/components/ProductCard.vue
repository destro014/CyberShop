<template>
  <div class="card card-lift--hover shadow-lg--hover border-0">
    <div class="card-body">
      <div class="product-image">
        <progressive-img :src="product.image" :placeholder="this.image" :blur="0" />
      </div>
      <div class="product-details">
        <router-link
          :to="{name : 'product', params: {name: product.title, id: product.product_identifier}}"
        >
          <h6 class="text-uppercase">{{ product.title }}</h6>
        </router-link>
        <div>
          <span class="badge badge-pill badge-success" v-if="product.usability == 0">Brand New</span>
          <span class="badge badge-pill badge-info" v-if="product.usability == 1">used</span>
          <span class="badge badge-pill badge-danger" v-if="product.usability == 2">not working</span>
        </div>
        <div class="price-tag">Nrs. {{ product.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  data() {
    return {
      placeholder: null
    };
  },
  beforeCreate() {
    this.image = "logo-placeholder-large.png";
  }
};
</script>

<style lang="scss">
@import "../styles/components/ProductCard";
</style>
