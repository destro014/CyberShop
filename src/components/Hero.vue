<template>
  <div class="hero container-fluid">
    <div class="categories-bar">
      <ul>
        <li>
          <div class="category">Electronic devices</div>
        </li>
        <li>Electronic Accesories</li>
        <li>Arts and Crafts</li>
        <li>Home and Lifestyle</li>
        <li>Sports and Outdoor</li>
        <li>Babies and toys</li>
        <li>Health and Beauty</li>
        <li>Clothes and fashion</li>
        <li>Automobiles and vehicles</li>
        <li>Automobiles and vehicles</li>
      </ul>
    </div>
    <div class="promo-carousel">
      <PromoCarousel />
    </div>
  </div>
</template>

<script>
import PromoCarousel from "@/components/PromoCarousel.vue";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Hero",
  components: { PromoCarousel },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../styles/components/Hero";
</style>
