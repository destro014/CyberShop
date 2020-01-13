<template>
  <div class="product shifted container-fluid" v-if="product">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <progressive-img :src="product.image" :placeholder="this.image" :blur="0" />
      </div>
      <div class="col-lg-6 col-md-6">
        <ul>
          <li>
            <h5 class="display-4">{{product.title}}</h5>
          </li>
          <li>
            <div>
              <span class="badge badge-pill badge-success" v-if="product.usability == 0">Brand New</span>
              <span class="badge badge-pill badge-info" v-if="product.usability == 1">used</span>
              <span class="badge badge-pill badge-danger" v-if="product.usability == 2">not working</span>
            </div>
          </li>
          <li>
            <h6 class="heading font-weight-bold">
              Price:
              <span class="text-primary">NRs. {{product.price}}</span>
            </h6>
          </li>
          <li>{{product.details}}</li>

          <li>Availablity: {{product.situation}}</li>
          <li>{{product.stock}} in stock</li>
          <li>Sold by: {{product.seller}}</li>
        </ul>
        <button class="btn btn-outline-primary">Contact Seller</button>
      </div>
    </div>
    <hr />
    <products :type="type1" :typeid="typeid1" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Products from "@/components/Products.vue";
export default {
  name: "ProductDetails",
  components: {
    Products
  },
  data() {
    return {
      name: this.$route.params.name,
      id: this.$route.params.id,
      type1: "Similar products",
      typeid1: "0"
      // product: null
    };
  },
  beforeCreate() {
    this.image = "../../logo-placeholder-large.png";
  },
  computed: {
    ...mapGetters(["product"]),
    ...mapGetters(["seller"])
  },
  methods: {
    ...mapActions(["fetchProduct"]),
    ...mapActions(["fetchSeller"])
  },
  beforeMount() {
    this.fetchProduct(this.id);
    this.fetchSeller(this.product.seller);
  }
};
</script>

<style lang="scss">
.product {
  padding-top: 100px !important;
  h5 {
    margin-bottom: 0;
  }
  ul {
    li {
      margin: 5px 0;
    }
  }
}
@media (max-width: 991px) {
  .shifted {
    padding-top: 140px;
  }
}
</style>