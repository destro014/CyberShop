<template>
  <div class="hero container-fluid">
    <div class="categories-bar">
      <ul>
        <router-link :to="{name: 'about'}" v-for="(category,index) in categories" :key="index">
          <li>{{category.name}}</li>
        </router-link>
      </ul>
    </div>
    <div class="promo-carousel">
      <PromoCarousel />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PromoCarousel from "@/components/PromoCarousel.vue";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Hero",
  components: { PromoCarousel },
  data() {
    return {
      categories: null
    };
  },
  beforeMount() {
    axios.get("../../categories.json").then(response => {
      this.categories = response.data;
      this.categories = this.categories.slice(0, 10);
    });
  }
};
</script>

<style lang="scss">
@import "../styles/components/Hero";
</style>
