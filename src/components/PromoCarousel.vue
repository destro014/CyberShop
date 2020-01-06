<template>
  <vueper-slides
    :arrows="false"
    :dragging-distance="70"
    prevent-y-scroll
    autoplay
    :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false"
    @autoplay-resume="internalAutoPlaying = true"
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :link="slide.link"
      :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
    />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Hero",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
        {
          link: "about",
          image: require("../assets/img/promo/1.png")
        },
        {
          image: require("../assets/img/promo/1.png"),
          link: "about"
        },
        {
          image: require("../assets/img/promo/1.png"),
          link: "register"
        },
        {
          image: require("../assets/img/promo/1.png"),
          link: "login"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../styles/components/PromoCarousel";
</style>
