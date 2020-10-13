import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/favourites",
    name: "favourites",
    component: () =>
      import("../views/Favourites.vue")
  },
  {
    path: "/movies/:id",
    name: "movies",
    component: () =>
        import("../views/MoviesPage"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
