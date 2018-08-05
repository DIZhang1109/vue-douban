import Vue from 'vue'
import Vuex from 'vuex'
import moviesInTheatre from './modules/moviesInTheatre'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moviesInTheatre
  }
})