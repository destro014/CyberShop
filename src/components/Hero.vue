<template>
  <div class="hero container-fluid">
    <div class="categories-bar">
      <ul>
        <li>
          <div class="category">Electronic devices</div>
        </li>
        <li>Electronic Accesories</li>
        <li>Arts and Crafts</li>
        <li>Home and Lifestyle</li>
        <li>Sports and Outdoor</li>
        <li>Babies and toys</li>
        <li>Health and Beauty</li>
        <li>Clothes and fashion</li>
        <li>Automobiles and vehicles</li>
        <li>Automobiles and vehicles</li>
      </ul>
    </div>
    <div class="promo-carousel">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/img/promo/1.png" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/img/promo/1.png" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/img/promo/1.png" alt="Third slide" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
@import "../styles/components/Hero";
</style>
