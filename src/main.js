import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlug, faSearch, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPlug, faSearch, faList);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "bootstrap";

window.$ = window.jQuery = require("jquery");

import("../src/scripts/argon.js");
import VueProgressiveImage from "vue-progressive-image";

Vue.use(VueProgressiveImage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
