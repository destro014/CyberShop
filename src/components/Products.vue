<template>
  <div class="products">
    <h1>products</h1>
    {{ categories }}
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      categories: null
      //   productTypes: "Recently listed"
    };
  }
};

import axios from "axios";

// axios.get("http://cybershop.pe.hu/api/categories").then(response => {
//   this.categories = response.title;
// });
</script>

<style></style>
