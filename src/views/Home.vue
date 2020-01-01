<template>
  <div class="home">
    <Navbar />
    <Hero />

    <Products productTypes="Recently listed" />
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
  }
};
</script>

<style lang="scss" scoped>
</style>
