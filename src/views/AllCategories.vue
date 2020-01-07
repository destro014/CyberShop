<template>
  <div class="all-categories shifted">
    <Categories :type="categoryType" />
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
export default {
  name: "AllCategories",
  components: {
    Categories
  },
  data() {
    return {
      categoryType: 1
    };
  }
};
</script>

<style>
</style>