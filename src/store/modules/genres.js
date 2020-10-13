export default {
  state: {
    genres: [],
    genresLink:
      `/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
  },
  getters: {
    getGenres(state) {
      return state.genres;
    }
  },
  mutations: {
    updateGenres(state, genres) {
      state.genres = [...state.genres, ...genres];
    }
  },
  actions: {
    async fetchGenres({ commit, state }) {
      try {
        const res = await fetch(process.env.VUE_APP_URL_API + state.genresLink);
        const data = await res.json();
        commit("updateGenres", data.genres);
      } catch (e) {
        console.log(e)
        throw e;
      }
    }
  }
};
