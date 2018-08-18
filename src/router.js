import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from './views/Movie.vue'
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
      name: 'movie',
      component: Movie
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