import axios from 'axios'

const state = {
  loading: true,
  movies: []
}

const mutations = {
  setMovieData: (state, {
    data
  }) => {
    state.movies = data
  },
  finishLoading: state => {
    state.loading = false
  }
}

const actions = {
  getMoviesInTheatre: ({
    commit
  }) => {
    axios
      .get('/movie/in_theaters', {
        params: {
          city: 'shanghai'
        }
      })
      .then(res => {
        commit('setMovieData', {
          data: res.data.subjects
        })
      })
      .catch(err => {
        console.log('Axios get error ' + err)
      })
      .finally(() => {
        commit('finishLoading')
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}