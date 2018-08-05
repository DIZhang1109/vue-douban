import axios from 'axios'

const state = {
  loading: true,
  movie: []
}

const mutations = {
  setMovieData: (state, {
    data
  }) => {
    state.movie = data
  },
  finishLoading: state => {
    state.loading = false
  },
  resetStatus: state => {
    state.loading = true
    state.movie = []
  }
}

const actions = {
  getMovie: ({
    commit
  }, subjectId) => {
    commit('resetStatus')
    axios
      .get('/movie/subject/' + subjectId)
      .then(res => {
        commit('setMovieData', {
          data: res.data
        })
      })
      .catch(err => {
        console.log(`Axios get error ${err}`)
      })
      .finally(() => {
        commit('finishLoading')
      })
  }
}

const getters = {
  getAllDirectors: state => state.movie.directors.map(it => it.name).join(' '),
  getAllCasts: state => state.movie.casts.map(it => it.name).join(' ')
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}