<template>
  <!-- <div class="main-nav">
      <div class="brand">
        <img src="../assets/img/logo/SVG/Logo-icon-only.svg" alt />
      </div>
      <div class="search">
        <input type="text" placeholder="Search anything" />
      </div>
      <div class="menu">
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
          <li>About</li>
          <li>Help</li>
        </ul>
      </div>
  </div>-->

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
              <a href="./examples/landing.html" class="dropdown-item">Landing</a>
              <a href="./examples/profile.html" class="dropdown-item">Profile</a>
              <a href="./examples/login.html" class="dropdown-item">Login</a>
              <a href="./examples/register.html" class="dropdown-item">Register</a>
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
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
@import "../styles/components/Navbar.scss";
</style>
