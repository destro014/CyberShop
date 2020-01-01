<template>
  <div class="products">
    <h1>{{ type }} products</h1>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "Products",
  components: { VueperSlides, VueperSlide },
  props: ["type"],
  data() {
    return {
      type: this.type
    };
  }
};
</script>

<style></style>
