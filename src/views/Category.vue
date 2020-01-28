<template>
  <div class="category shifted container-fluid">
    <h2>{{name}}</h2>
    <div class="row">
      <div class="col-lg-2 filter">
        <h5>Filter</h5>
      </div>
      <div class="col-lg-10 category-products">
        <Products :typeId="id" :typeLength="1" />
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products.vue";

export default {
  name: "Category",
  components: {
    Products
  },
  data() {
    return {
      name: this.$route.params.name,
      id: this.$route.params.id
    };
  },
  methods: {
    updateCategory() {
      this.id = this.$route.params.id;
      this.name = this.$route.params.name;
    }
  },
  watch: { $route: "updateCategory" }
};
</script>

<style lang="scss">
.category-products {
  .products {
    margin-top: 0;
  }
}
.filter {
  margin-top: 16px;
}
</style>