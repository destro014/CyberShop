import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faPlug,
  faSearch,
  faList,
  faArrowCircleRight,
  faFutbol,
  faBaby,
  faCar,
  faTshirt
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
library.add(faPlug, faSearch, faList, faArrowCircleRight, faFutbol, faBaby, faCar, faTshirt);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

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