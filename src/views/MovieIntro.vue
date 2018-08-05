<template>
  <div>
    <div class="is-center" v-if="loading">
      <loading></loading>
    </div>
    <div v-else>
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
                <strong>Director: </strong>{{ directors }}
                <br>
                <strong>Actor: </strong> {{ casts }}
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
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Loading from '../components/Loading'

export default {
  components: { Loading },
  props: ['id'],
  computed: {
    ...mapState({
      loading: state => state.movieIntro.loading,
      movie: state => state.movieIntro.movie
    }),
    ...mapGetters('movieIntro', {
      directors: 'getAllDirectors',
      casts: 'getAllCasts'
    })
  },
  mounted() {
    this.$store.dispatch('movieIntro/getMovie', this.id)
  }
}
</script>
