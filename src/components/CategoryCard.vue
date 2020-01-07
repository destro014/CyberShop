<template>
  <div class="category-card">
    <router-link :to="{name : category.link}">
      <div class="card shadow--hover border-0">
        <div class="icon">
          <font-awesome-icon :icon="['fas',category.icon ]" />
        </div>
        <div class="category">{{category.name}}</div>
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