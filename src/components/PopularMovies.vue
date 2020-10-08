<template>
  <div class="popular container">
    <div class="popular__wrapper">
      <popular-item
        v-for="popular in populars"
        :key="popular.text"
        :popular="popular"
      />
    </div>
  </div>
</template>

<script>
import PopularItem from "@/components/PopularItem";
export default {
  name: "PopularMovies",
  components: {
    PopularItem
  },
  data() {
    return {
      populars: []
    };
  }
  // async created() {
  //   // GET request using fetch with async/await
  //   const response = await fetch("https://api.npms.io/v2/search?q=vue");
  //   const data = await response.json();
  //   this.totalVuePackages = data.total;
  // }
};
</script>

<style lang="less">
.popular {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
}
</style>
