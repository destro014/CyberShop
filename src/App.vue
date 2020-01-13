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
    $route: {
      handler: (to, from) => {
        document.title = to.params.name
          ? to.params.name + " || " + to.meta.title
          : to.meta.title;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  background: #eee;
}
</style>
