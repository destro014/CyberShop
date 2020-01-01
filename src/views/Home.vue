<template>
  <div class="home">
    <Products :type="type1" />
    <Products :type="type2" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Products from "@/components/Products.vue";
export default {
  name: "home",
  components: {
    Hero,
    Navbar,
    Products
  },
  data() {
    return {
      type1: "Recently listed",
      type2: "Electronics"
    };
  }
};
</script>

<style lang="scss" scoped></style>
