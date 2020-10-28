import Vue from "vue";
import Vuex from "vuex";
import populars from "./modules/populars";
import search from "./modules/search";
import genres from "./modules/genres";
import movie from "./modules/movie"
import recommendations from "./modules/recommendations"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    populars,
    search,
    genres,
    movie,
    recommendations
  }
});
