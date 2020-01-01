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
      <vueper-slides :arrows="false" fixed-height="true">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :content="slide.content"
          :image="'src/assets/img/promo/' + slide.image"
          :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
          :dragging-distance="70"
          prevent-y-scroll
        />
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Hero",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          title: "Slide #1",
          content: "Slide content.",
          image: "1.png"
        },
        {
          title: "Slide #2",
          content: "Slide content.",
          image: "1.png"
        },
        {
          title: "Slide #2",
          content: "Slide content.",
          image: "1.png"
        },
        {
          title: "Slide #2",
          content: "Slide content.",
          image: "1.png"
        },
        {
          title: "Slide #2",
          content: "Slide content.",
          image: "1.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../styles/components/Hero";
</style>
