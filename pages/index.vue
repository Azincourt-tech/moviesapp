<template>
  <div class="home">
    <!-- Hero -->
    <Hero />

    <!-- Movies -->
    <div class="container movies">
      <div id="movie-grid" class="movie-grid">
        <div v-for="(movie, index) in movies" :key="index" class="movie">
          <div class="movie-img">
            <img
              src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt=""
            />
            <p class="review">{{ movie.vote_average }}</p>
            <p class="overview">{{ movie.overview }}</p>
          </div>
          <div class="info">
            <p class="title">
              {{ movie.title.slice(0, 25) }}
              <span v-if="movie.title.legth > 25">...</span>
            </p>
            <p class="release">
              Released:
              {{
                new Date(movie.release_date).toLocaleString('en-us', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </p>
            <nuxt-link class="button button-light" :to="{name: 'movies-movieid', params: {movieid: movie.id} }"> Get More Info</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Hero from '~/components/Hero.vue';

export default {
  name: 'IndexPage',
  components: { Hero },

  data() {
    return {
      movies: [],
    }
  },

  async fetch() {
    await this.getMovies()
  },

  methods: {
    async getMovies() {
      const data = axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=a866f83e29aa185916154312b86a8e1f&language=en-US&page=1'
      )

      const result = await data
      result.data.results.forEach((movie) => {
        this.movies.push(movie)
      })
    },
  },
}
</script>
