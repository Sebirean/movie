export default {
  state: {
    movie: [],
    movieLink: "/movie/",
    movieUtm: `?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`,
    movieId: 0
  },
  getters: {
    getMovie(state) {
      return state.movie;
    }
  },
  mutations: {
    setMovieId(state, id) {
      state.movieId = id;
    },
    setMovie(state, movie) {
      state.movie = movie;
    }
  },
  actions: {
    async fetchMovie({ commit, state }) {
      try {
        const res = await fetch(
          process.env.VUE_APP_URL_API + state.movieLink + state.movieId + state.movieUtm
        );
        const data = await res.json();
        commit("setMovie", data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
};
