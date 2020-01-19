<template>
  <div class="categories">
    <div class="container-fluid">
      <h5>Categories</h5>
      <div class="row">
        <div
          class="col-lg-2 col-md-3 col-sm-6 col-xs-6"
          v-for="(category, i) in categories()"
          :key="i"
        >
          <CategoryCard :category="category" />
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6" v-if="type == 0">
          <div class="category-card">
            <router-link :to="{name : 'categories'}">
              <div class="card shadow--hover border-0">
                <div class="icon">
                  <font-awesome-icon :icon="['fas','arrow-circle-right' ]" />
                </div>
                <div class="category-name">View All</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Categories",
  props: ["type"],
  components: {
    CategoryCard
  },
  data() {
    return {
      // categories: null
    };
  },
  methods: {
    ...mapActions(["trimCategories"]),
    categories() {
      if (this.type == 1) {
        return this.allCategories;
      } else {
        return this.someCategories;
      }
    }
  },
  computed: {
    ...mapGetters(["someCategories"]),
    ...mapGetters(["allCategories"])
  },
  beforeMount() {
    this.trimCategories();
  }
};
</script>

<style lang="scss">
@import "../styles/components/Categories.scss";
@import "../styles/components/CategoryCard.scss";
</style>
