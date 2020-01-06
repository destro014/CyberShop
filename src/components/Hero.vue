<template>
  <div class="hero container-fluid">
    <div class="categories-bar">
      <ul>
        <li>
          <router-link :to="{name: 'about'}">Electronic devices</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Electronic Accesories</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Arts and Crafts</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Home and Lifestyle</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Sports and Outdoor</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Babies and toys</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Health and Beauty</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Clothes and fashion</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Automobiles and vehicles</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Automobiles and vehicles</router-link>
        </li>
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
