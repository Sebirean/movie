<template>
  <div class="movie-item" v-if="item.poster_path">
    <div class="movie-item__wrapper">
      <router-link :to="{ name: 'movies', params: { id: movieId } }">
        <img
          class="movie-item__poster"
          :src="
            `https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`
          "
          :alt="item.title"
        />
        <div class="movie-item__rating">
          Rating: <span>{{ item.vote_average }}</span>
        </div>
        <h4 class="movie-item__title">{{ item.title }}</h4>
        <div class="movie-item__genres" v-if="item.genres_new">
          Genres:
          <span
            class="movie-item__genres--name"
            v-for="genres in item.genres_new"
            :key="genres.id"
          >
            {{ genres.name }}</span
          >
        </div>
        <p class="movie-item__release">Release date: {{ item.release_date }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      movieId: ""
    };
  },
  mounted() {
    this.movieId = String(this.item.id);
  }
};
</script>

<style lang="less">
.movie-item {
  a {
    text-decoration: none;
    color: inherit;
  }
  &__genres {
    font-weight: @weight-bold;
    font-size: @size-small-x;
    &--name {
      font-weight: @weight-regular;
      color: @color-dark;
      position: relative;
      &:after {
        content: ",";
      }

      &:last-child {
        &:after {
          content: "";
        }
      }
    }
  }
  &__poster {
    width: 100%;
  }
  &__rating {
    margin-top: 10px;
    font-weight: @weight-bold;
    font-size: @size-small-x;
    span {
      color: @color-accept;
      font-size: @size-minor;
    }
  }

  &__title {
    color: @color-dark;
    margin: 5px 0;
  }
  &__release {
    color: @color-accept;
    font-size: @size-small;
  }
}
</style>
