<template>
  <div class="home shifted">
    <hero />
    <Products :type="'Recent Products'" :typeId="typeid0" :typeLength="4" />
    <Categories :type="categoryType" />
    <Products :type="'Electronic devices'" :typeId="typeid1" :typeLength="typeLength1" />
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
      type0: "Recently listed products",
      typeid0: 0,
      type1: "Electronics devices",
      typeid1: 1,
      typeLength1: 4,
      categoryType: 0
    };
  }
};
</script>

<style lang="scss" scoped></style>
