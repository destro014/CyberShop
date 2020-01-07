<template>
  <div class="categories">
    <div class="container-fluid">
      <h5>Categories</h5>
      <div class="row">
        <div class="col-lg-2" v-for="(category, i) in categories" :key="i">
          <CategoryCard :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";
export default {
  name: "Categories",
  components: {
    CategoryCard
  },
  data() {
    return {
      categories: [
        { name: "Electronics Device", icon: "plug" },
        { name: "Sports and Outdoor", icon: "futbol" },
        { name: "Babies and Toys", icon: "baby" },
        { name: "Automobile and Vehicles", icon: "car" },
        { name: "Clothes and Lifestyle", icon: "tshirt" },
        { name: "View all", icon: "arrow-circle-right" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../styles/components/Categories.scss";
</style>
