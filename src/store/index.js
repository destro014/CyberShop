import Vue from "vue";
import Vuex from "vuex";
import categories from './modules/categories';
import productDetails from './modules/productDetails';
import products from './modules/products';
import register from './modules/register';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
    productDetails,
    products,
    register,
  }
});