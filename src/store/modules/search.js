export default {
  state: {
    search: [],
    searchLink: `${process.env.VUE_APP_URL_API}/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&include_adult=false`,
    utmSearchQuery: "&query=",
    searchText: "",
    utmSearchPage: "&page=",
    pageSearch: 2
  },
  getters: {
    getSearch(state) {
      return state.search;
    }
  },
  mutations: {
    setSearchText(state, text) {
      state.searchText = text;
    },
    setSearchScroll(state, search) {
      if (state.pageSearch <= search.total_pages) {
        state.search = [...state.search, ...search.results];
        state.pageSearch++;
      }
    },
    setSearch(state, search) {
      state.search = search.results;
    }
  },
  actions: {
    async fetchSearch({ commit, state }) {
      try {
        const res = await fetch(
          state.searchLink +
            state.utmSearchQuery +
            state.searchText +
            state.utmSearchPage +
            "1"
        );
        const data = await res.json();
        commit("setSearch", data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchSearchScroll({ commit, state }) {
      try {
        const res = await fetch(
          state.searchLink +
            state.utmSearchQuery +
            state.searchText +
            state.utmSearchPage +
            state.pageSearch
        );
        const data = await res.json();
        commit("setSearchScroll", data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
};
