<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/"
          ><img src="@/assets/images/logo.png" alt=""
        /></router-link>
      </div>
      <div class="header__navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/favourites">Favourites</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="less">
.header {
  background: @color-bg-header;
  position: fixed;
  width: 100%;
  z-index: 10;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__navigation {
    padding: 25px 0;
    a {
      text-transform: uppercase;
      color: @color-dark;
      text-decoration: none;
      margin: 0 5px;
    }
  }
  &__logo {
    img {
      max-width: 100px;
    }
  }
}
</style>
