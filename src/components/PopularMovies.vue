<template>
  <div class="popular container">
    <div class="popular__search">
      <input type="text" v-model="searchEnterText" placeholder="Search" />
    </div>
    <h1 class="popular__title">{{ isSearch ? "Search" : "Popular movie" }}</h1>
    <div class="popular__wrapper" v-if="!isSearch">
      <popular-item
        v-for="popular in getPopulars"
        :key="popular.id"
        :popular="popular"
      />
    </div>
    <div class="popular__search-block" v-if="isSearch">
      <search-item
        v-for="search in getSearch"
        :key="search.id"
        :search="search"
      />
    </div>
  </div>
</template>
<script>
import PopularItem from "@/components/PopularItem";
import SearchItem from "@/components/search/SearchItem";
import { mapGetters, mapActions, mapMutations } from "vuex";

import addGenres from "@/mixins/addGenres";

export default {
  name: "PopularMovies",
  components: {
    PopularItem,
    SearchItem
  },
  mixins: [addGenres],
  data() {
    return {
      searchEnterText: "",
      isSearch: false
    };
  },
  computed: {
    ...mapGetters(["getPopulars", "getSearch"])
  },
  watch: {
    searchEnterText(newText) {
      this.setSearchText(newText);
      newText ? (this.isSearch = true) : (this.isSearch = false);
      if (this.isSearch) {
        this.fetchSearch();
      }
    }
  },
  mounted() {
    this.fetchGenres();
    this.fetchPopular();
  },
  beforeUpdate() {
    this.addGenresData(this.getPopulars);
    this.addGenresData(this.getSearch);
    this.scroll();
  },
  methods: {
    ...mapActions([
      "fetchPopular",
      "fetchGenres",
      "fetchSearch",
      "fetchSearchScroll"
    ]),
    ...mapMutations(["setSearchText"]),
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.isSearch ? this.fetchSearchScroll() : this.fetchPopular();
        }
      };
    }
  }
};
</script>

<style lang="less">
.popular {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
  &__search-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }

  &__search {
    margin-top: 20px;
    margin-bottom: 20px;
    input {
      border: 1px solid @color-dark;
      padding: 10px 20px;
      outline: none;
    }
  }
}
</style>
