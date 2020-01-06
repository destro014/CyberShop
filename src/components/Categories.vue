<template>
  <div class="categories">
    <div class="container-fluid">
      <h5>Categories</h5>
      <div class="row">
        <div class="col-lg-2">
          <div class="card shadow--hover border-0">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'plug']" />
            </div>
            <div class="category">
              Electronics Device
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card shadow--hover border-0">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'futbol']" size="6x" />
            </div>
            <div class="category">
              Sports and Outdoor
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card shadow--hover border-0">
            <div class="icon">
              <!-- <font-awesome-icon :icon="['fas', 'baby', '5x']" /> -->
              <font-awesome-icon icon="baby" size="xs" />
            </div>
            <div class="category">
              Babies and Toys
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card shadow--hover border-0">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'car']" />
            </div>
            <div class="category">
              Automobile and Vehicles
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card shadow--hover border-0">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'tshirt']" />
            </div>
            <div class="category">
              Clothes and Lifestyle
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card shadow--hover border-0">
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
            </div>
            <div class="category">
              View All
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories"
};
</script>

<style lang="scss">
@import "../styles/components/Categories.scss";
</style>
