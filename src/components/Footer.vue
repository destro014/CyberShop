<template>
  <footer class="footer container-fluid">
    <div class="row">
      <div class="col-md-4">
        <div class="brand-info">
          <img src="../assets/img/logo/1x/Logo-with-text.png" alt />
          <p>Cybershop Nepal, Buy and sell</p>
        </div>
      </div>
      <div class="col-md-4">
        <h6>Useful Link</h6>
        <ul>
          <li>
            <router-link :to="{ name: 'help' }">About CyberShop</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'help' }">Customer Support</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'help' }">FAQs</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'help' }">Sell on Cyber Shop</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-4 app">
        <h6>Download our mobile app</h6>
        <img src="../assets/img/appstore/app-01.png" alt />
        <img src="../assets/img/appstore/app-02.png" alt />
      </div>
    </div>
    <hr />
    <div class="row align-items-center justify-content-md-between">
      <div class="col-md-6">
        <div class="copyright">
          &copy; 2019
          <a href="#" target="_blank">Cybershop</a>.
        </div>
      </div>
      <div class="col-md-6">
        <ul class="nav nav-footer justify-content-end">
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Privacy Policy</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Terms &amp; Conditions</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" target="_blank">Carriers</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../styles/components/Footer.scss";
</style>
