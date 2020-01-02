<template>
  <div class="home shifted">
    <hero />
    <Products :type="type1" :typeid="typeid1" :data="url1" />
    <Products :type="type2" :typeid="typeid2" :data="url2" />
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
      typeid1: 1,
      url1: "/recent.json",
      url2: "/electronics.json",
      type2: "Electronics",
      typeid2: 2
    };
  }
};
</script>

<style lang="scss" scoped></style>
