<template>
  <div class="hero container-fluid">
    <div class="categories-bar">
      <ul>
        <router-link :to="{name: 'about'}">
          <li>Electronic devices</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Electronic Accesories</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Arts and Crafts</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Home and Lifestyle</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Sports and Outdoor</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Babies and toys</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Health and Beauty</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Clothes and fashion</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Automobiles and vehicles</li>
        </router-link>

        <router-link :to="{name: 'about'}">
          <li>Automobiles and vehicles</li>
        </router-link>
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
