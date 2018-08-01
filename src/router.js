import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Book from './views/Book.vue'
import Movie from './views/Movie.vue'
import Music from './views/Music.vue'
import MovieIntro from './views/MovieIntro.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/movie/subject/:id',
      name: 'movie-introduction',
      component: MovieIntro,
      props: true
    }
  ],
  linkActiveClass: 'is-active'
})