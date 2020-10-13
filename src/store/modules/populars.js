export default {
  state: {
    populars: [],
    popularsLink:
      `/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=`,
    pages: 1,
    genersNamePopular: ""
  },
  getters: {
    getPopulars(state) {
      return state.populars;
    }
  },
  mutations: {
    updatePopular(state, populars) {
      if (state.pages <= populars.total_pages) {
        state.populars = [...state.populars, ...populars.results];
        state.pages++;
      }
    }
  },
  actions: {
    async fetchPopular({ commit, state }) {
      try {
        const res = await fetch(
          process.env.VUE_APP_URL_API + state.popularsLink + state.pages
        );
        const data = await res.json();
        commit("updatePopular", data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
};
