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
      <div class="movie__recommendations container">
        <h1 class="movie__title">Recommendations</h1>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <movie-item
              class="swiper-slide"
              v-for="(item, index) in getRecommendations"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import MovieItem from "@/components/MovieItem";

import Swiper from "swiper";

export default {
  name: "MoviesPage",
  components: {
    MovieItem
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mySwiper: null
    };
  },
  computed: {
    ...mapGetters(["getMovie", "getRecommendations"])
  },
  created() {
    this.setMovieId(this.id);
    this.fetchMovie();
    this.setRecommendationsId(this.id);
    this.fetchRecommendations();
  },
  updated() {
    this.$refs.backgroundMovie.style.background = `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${this.getMovie.poster_path})`;
    this.mySwiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      slidesPerView: 6,
      spaceBetween: 30,
      loop: true
    });
  },
  methods: {
    ...mapActions(["fetchMovie", "fetchRecommendations"]),
    ...mapMutations(["setMovieId", "setRecommendationsId"])
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

  &__title {
    text-align: center;
  }
}
</style>
