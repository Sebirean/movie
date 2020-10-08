<template>
  <div class="main">
    <popular-movies />
  </div>
</template>

<script>
import PopularMovies from "@/components/PopularMovies";

export default {
  name: "Home",
  components: {
    PopularMovies
  }
};
</script>
