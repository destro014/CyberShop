<template>
  <nav
    id="navbar-main"
    class="navbar navbar-main navbar-expand-lg navbar-light navbar-transparent bg-primary headroom"
  >
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand mr-lg-5">
        <img alt="image" src="../assets/img/logo/SVG/Logo-icon-only.svg" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar_global"
        aria-controls="navbar_global"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbar_global">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link :to="{ name: 'home' }">
                <img alt="image" src="../assets/img/logo/SVG/Logo-icon-only.svg" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown" role="button">
              <font-awesome-icon :icon="['fas', 'list']" />
              <span class="nav-link-inner--text">Categories</span>
            </a>
            <div class="dropdown-menu">
              <router-link
                v-for="(category,index) in allCategories"
                :key="index"
                :to="{name: category.link}"
                class="dropdown-item"
              >{{category.title}}</router-link>
            </div>
          </li>
        </ul>

        <div class="search desktop ml-10">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </span>
              </div>
              <input class="form-control" placeholder="Search" type="text" />
            </div>
          </div>
        </div>
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'help' }" class="nav-link">Help</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="search mobile">
      <div class="form-group mb-0">
        <div class="input-group input-group-alternative">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <font-awesome-icon :icon="['fas', 'search']" />
            </span>
          </div>
          <input class="form-control" placeholder="Search" type="text" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      // categories: null
    };
  },
  methods: {
    ...mapActions(["fetchCategories"])
  },
  computed: mapGetters(["allCategories"]),
  beforeMount() {
    this.fetchCategories();
  }
};
</script>

<style lang="scss">
@import "../styles/components/Navbar.scss";
</style>
