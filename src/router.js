import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MoviesInTheatre from './views/MoviesInTheatre.vue'
import MovieIntro from './views/MovieIntro.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies_in_theatre',
      name: 'movies_in_theatre',
      component: MoviesInTheatre
    },
    {
      path: '/movies/subject/:id',
      name: 'movie-introduction',
      component: MovieIntro,
      props: true
    }
  ],
  linkActiveClass: 'is-active'
})