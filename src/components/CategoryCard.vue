<template>
  <div class="category-card" v-if="category">
    <router-link :to="{name : 'category', params: {name: category.title, id: category.id}}">
      <div class="card shadow--hover border-0">
        <div class="icon">
          <font-awesome-icon :icon="['fas',category.icon ]" />
        </div>
        <div class="category-name">{{category.title}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["category"]
};
</script>

<style lang="scss">
@import "../styles/components/CategoryCard.scss";
</style>