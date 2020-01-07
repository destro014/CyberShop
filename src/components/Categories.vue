<template>
  <div class="categories">
    <div class="container-fluid">
      <h5>Categories</h5>
      <div class="row">
        <div class="col-lg-2" v-for="(category, i) in categories" :key="i">
          <CategoryCard :category="category" />
        </div>
        <div class="col-lg-2" v-if="type == 0">
          <CategoryCard
            :category="{name: 'View All', icon: 'arrow-circle-right', link: 'categories'}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";
import axios from "axios";
export default {
  name: "Categories",
  props: ["type"],
  components: {
    CategoryCard
  },
  data() {
    return {
      categories: null
    };
  },
  beforeMount() {
    axios.get("categories.json").then(response => {
      this.categories = response.data;
      if (this.type == 0) {
        this.categories = this.categories.slice(0, 5);
      }
    });
  }
};
</script>

<style lang="scss">
@import "../styles/components/Categories.scss";
</style>
