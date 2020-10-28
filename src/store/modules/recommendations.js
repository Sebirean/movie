export default {
  state: {
    recommendations: [],
    recommendationsLink: `${process.env.VUE_APP_URL_API}/movie/`,
    recommendationsLinkSecond: `/recommendations?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1`,
    recommendationsId: 0
  },
  getters: {
    getRecommendations(state) {
      return state.recommendations;
    }
  },
  mutations: {
    setRecommendationsId(state, id) {
      state.recommendationsId = id;
    },
    updateRecommendations(state, recommendations) {
      state.recommendations = [
        ...state.recommendations,
        ...recommendations.results
      ];
    }
  },
  actions: {
    async fetchRecommendations({ commit, state }) {
      try {
        const res = await fetch(
          state.recommendationsLink +
            state.recommendationsId +
            state.recommendationsLinkSecond
        );
        const data = await res.json();
        commit("updateRecommendations", data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
};
