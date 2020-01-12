<template>
  <div class="product-details shifted" v-if="product">
    <!-- {{id}}
    <br />
    {{product.title}}
    <br />
    {{product.type}}
    <br />
    {{product.description}}
    <br />
    {{product.price}}
    <br />
    {{product.rating}}
    <br />
    {{product.title}}
    <br />
    <progressive-img :src="product.image" :placeholder="this.image" :blur="0" />-->
    <div class="row">
      <div class="col-lg-6">
        <progressive-img :src="product.image" :placeholder="this.image" :blur="0" />
      </div>
      <div class="col-lg-6">
        <ul>
          <li>
            <h5 class="display-4">{{product.title}}</h5>
          </li>
          <li>{{product.type}}</li>
          <li>{{product.description}}</li>
          <li>{{product.price}}</li>
          <li>{{product.price}}</li>
          <li>{{product.title}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetails",
  data() {
    return {
      name: this.$route.params.name,
      id: this.$route.params.id,
      product: null
    };
  },
  beforeCreate() {
    axios.get("../../recent.json").then(response => {
      response.data.filter(obj => {
        if (obj.id == this.id) {
          this.product = obj;
        }
      });
    });
    this.image = "../../logo-placeholder-large.png";
  }
};
</script>

<style lang="scss">
.product-details {
  padding-top: 100px;
  h5 {
    margin-bottom: 0;
  }
}
</style>