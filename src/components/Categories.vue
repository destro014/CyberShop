<template>
  <div class="categories">
    <div class="container-fluid">
      <h5>Categories</h5>
      <div class="row">
        <div class="col-lg-2" v-for="(category, i) in categories" :key="i">
          <router-link :to="{name : 'about'}">
            <div class="card shadow--hover border-0">
              <div class="icon">
                <font-awesome-icon :icon="['fas',category.icon ]" />
              </div>
              <div class="category">{{category.name}}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
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
