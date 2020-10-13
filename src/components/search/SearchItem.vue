<template>
  <div class="search-item" v-if="search.poster_path">
    <div class="search-item__wrapper">
      <router-link :to="{ name: 'movies', params: { id: search.id } }">
        <img
          class="search-item__poster"
          :src="
            `https://image.tmdb.org/t/p/w220_and_h330_face/${search.poster_path}`
          "
          :alt="search.title"
        />
        <div class="search-item__rating">
          Rating: <span>{{ search.vote_average }}</span>
        </div>
        <h4 class="search-item__title">{{ search.title }}</h4>
        <div class="search-item__genres" v-if="search.genres_new">
          Genres:
          <span
            class="search-item__genres--name"
            v-for="genres in search.genres_new"
            :key="genres.id"
          >
            {{ genres.name }}</span
          >
        </div>
        <p class="search-item__release">
          Release date: {{ search.release_date.replace(/\-/g, ".") }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchItem",
  props: {
    search: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less">
.search-item {
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
