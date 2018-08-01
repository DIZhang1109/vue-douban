<template>
  <transition name="slide-fade">
    <div>
      <p class="title is-1">{{ movie.title }}</p>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="movie.images.medium" :alt="movie.title">
            </figure>
            <br>
            <div class="field is-grouped is-grouped-multiline has-addons has-addons-centered">
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag">Watched</span>
                  <span class="tag is-info">{{ movie.reviews_count }}</span>
                </div>
              </div>
              <div class="control">
                <div class="tags has-addons">
                  <div class="tags has-addons">
                    <span class="tag">Wishlist</span>
                    <span class="tag is-info">{{ movie.wish_count }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Director: </strong>{{ getAllDirectors }}
                <br>
                <strong>Actor: </strong> {{ getAllCasts }}
                <br>
                <strong>Year: </strong> {{ movie.year }}
                <br>
                <strong>Rate: </strong> {{ movie.rating.average }}
                <br>
                <strong>Summary: </strong>
                <br>{{ movie.summary }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      loading: true,
      movie: undefined
    }
  },
  methods: {
    getMovie(subjectId) {
      axios
        .get('/movie/subject/' + subjectId)
        .then(res => {
          this.movie = res.data
        })
        .catch(err => {
          console.log(`Axios get error ${err}`)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  computed: {
    getAllDirectors() {
      return this.movie.directors.map(it => it.name).join(' ')
    },
    getAllCasts() {
      return this.movie.casts.map(it => it.name).join(' ')
    }
  },
  mounted() {
    this.getMovie(this.id)
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-enter {
  transform: translateX(50px);
  opacity: 0;
}
</style>
