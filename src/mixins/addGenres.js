import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getGenres"])
  },
  methods: {
    addGenresData(arr) {
      arr.forEach(item => {
        if (item.genre_ids?.length) {
          item.genres_new = [];
          item.genre_ids.reduce((arr, id) => {
            item.genres_new.push(
              this.getGenres.find(genrId => genrId.id === id)
            );
          }, []);
        }
      });
    }
  }
};
