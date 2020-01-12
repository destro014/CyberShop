<template>
  <div class="home shifted">
    <hero />
    <Products :type="type1" :typeid="typeid1" />
    <Categories :type="categoryType" />
    <Products :type="type2" :typeid="typeid2" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Products from "@/components/Products.vue";
import Categories from "@/components/Categories.vue";
export default {
  name: "home",
  components: {
    Hero,
    Navbar,
    Products,
    Categories
  },
  data() {
    return {
      type1: "Recently listed",
      typeid1: 0,
      categoryType: 0,
      type2: "Electronics",
      typeid2: 1
    };
  }
};
</script>

<style lang="scss" scoped></style>
