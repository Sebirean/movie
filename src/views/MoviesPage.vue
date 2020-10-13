<template>
  <div class="movie">
    <div class="movie__wrapper">
      <div class="movie__top" ref="backgroundMovie">
        <div class="movie__top--bg"></div>
        <div class="container">
          <div class="movie__content">
            <div>
              <img
                :src="
                  `https://image.tmdb.org/t/p/w220_and_h330_face/${getMovie.poster_path}`
                "
              />
            </div>
            <div>
              <h1 class="movie__title">{{ getMovie.title }}</h1>
              <span>
                {{ getMovie.release_date }}
              </span>
              •
              <span v-for="genre in getMovie.genres" :key="genre.id">
                {{ genre.name }}
              </span>
              <h2>Description</h2>
              <p>{{ getMovie.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "MoviesPage",
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters(["getMovie"])
  },
  mounted() {
    this.setMovieId(this.id);
    this.fetchMovie();
  },
  updated() {
    this.$refs.backgroundMovie.style.background = `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${this.getMovie.poster_path})`;
  },
  methods: {
    ...mapActions(["fetchMovie"]),
    ...mapMutations(["setMovieId"])
  }
};
</script>

<style lang="less">
.movie {
  &__top {
    background-size: cover !important;
    min-height: 700px;
    background-repeat: no-repeat !important;
    position: relative;

    &--bg {
      position: absolute;
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }

  &__content {
    padding-top: 100px;
    position: relative;
    z-index: 9;
    display: flex;
    justify-content: left;
    color: @color-light;
    div {
      margin-left: 40px;

      &:first-child {
        margin: 0;
      }
    }
  }
}
</style>
