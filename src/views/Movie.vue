<template>
  <div>
    <p class="title is-1">{{ title }}</p>
    <div class="is-center" v-if="loading">
      <div class="la-square-jelly-box la-3x">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column is-3" v-for="(movie, index) in movies" :key="index">
        <div class="card hvr-underline-from-center">
          <div class="card-image">
            <figure class="image is-3by4">
              <img :src="movie.images.small" :alt="movie.title">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content has-text-centered">
                <p class="heading">{{ movie.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: 'Movie in theatre',
      loading: true,
      rawResponse: undefined,
      movies: undefined
    }
  },
  methods: {
    getMoviesInTheatre() {
      axios
        .get('/movie/in_theaters', {
          params: {
            city: 'shanghai'
          }
        })
        .then(res => {
          this.rawResponse = res.data
          this.movies = this.rawResponse.subjects
        })
        .catch(err => {
          console.log('Axios get error ' + err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  mounted() {
    this.getMoviesInTheatre()
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
}

.hvr-underline-from-center {
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 50%;
  right: 50%;
  bottom: 0;
  background: #ff3860;
  height: 2px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before,
.hvr-underline-from-center:focus:before,
.hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}

.is-center {
  height: 82vh;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
</style>
