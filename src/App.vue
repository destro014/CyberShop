<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },    
  watch: {
      '$route' (to, from) {
        document.title = to.meta.title || 'Your Website'
      }
    },


};
</script>

<style lang="scss">
#app {
  background: #eee;
}
</style>
