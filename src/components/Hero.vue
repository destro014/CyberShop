<template>
  <div class="hero container-fluid">
    <div class="categories-bar">
      <ul>
        <router-link
          :to="{name: 'about'}"
          v-for="category in allCategories"
          :key="category.cat_identifiers"
        >
          <li>{{category.title}}</li>
        </router-link>
      </ul>
    </div>
    <div class="promo-carousel">
      <PromoCarousel />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
  methods: {
    // ...mapActions(["fetchCategories"])
  },
  computed: mapGetters(["allCategories"]),
  beforeMount() {
    // this.fetchCategories();
  }
};
</script>

<style lang="scss">
@import "../styles/components/Hero";
</style>
