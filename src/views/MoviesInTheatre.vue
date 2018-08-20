<template>
  <div>
    <p class="title is-1">{{ title }}</p>
    <div class="is-center" v-if="loading">
      <loading></loading>
    </div>
    <div class="columns is-multiline">
      <div class="column is-3" v-for="(movie, index) in movies" :key="index">
        <div class="card hvr-underline-from-center">
          <router-link :to="'/movies/subject/' + movie.id">
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
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '../components/Loading'

export default {
  components: { Loading },
  data() {
    return {
      title: 'Movie in theatre'
    }
  },
  computed: {
    ...mapState({
      loading: state => state.moviesInTheatre.loading,
      movies: state => state.moviesInTheatre.movies
    })
  },
  mounted() {
    this.$store.dispatch('moviesInTheatre/getMoviesInTheatre')
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
  background: #ff60a2;
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
</style>
