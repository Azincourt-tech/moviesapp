<template>
  <div>
    <loading v-if="$fetchState.pending" />

    <div v-else class="container single-movie">
      <NuxtLink class="button" :to="{ name: 'index' }">Back</NuxtLink>
      <div class="movie-info">
        <div class="movie-img">
          <img
            :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
          />
        </div>
        <div class="movie-content">
          <h1>Title: {{ movie.title }}</h1>
          <p class="movie-fact tag-line">
            <span>Tagline:</span>" {{ movie.tagline }} "
          </p>
          <div class="movie-fact">
            <span>Production companies:</span>
            <span v-for="(c, index) in movie.production_companies" :key="index" class="company">
              {{ c.name }};
            </span>
          </div>

          <div class="movie-fact">
              <span >Genres:</span>
              <span v-for="(g, index) in movie.genres" :key="index" class="company">
                {{ g.name }};
              </span>
            </div>

          <p class="movie-fact">
            <span>Released</span>
            {{
              new Date(movie.release_date).toLocaleString('en-us', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })
            }}
          </p>
          <p class="movie-fact">
            <span>Duration:</span> {{ movie.runtime }} minutes
          </p>
          <div class="movie-fact">
            <span>budget:</span>
            {{ movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}$
          </div>
          <p class="movie-fact">
            <span>Revenue:</span>
            {{
              movie.revenue.toLocaleString('en-us', {
                style: 'currency',
                currency: 'USD',
              })
            }}
          </p>
          <p class="movie-fact"><span>Overview:</span> {{ movie.overview }}</p>
        </div>
      </div>
    </div>
    <trailer class="container videos" />
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/Loading.vue'
import Trailer from '~/components/Trailer.vue'

export default {
  name: 'SingleMovie',
  components: { Loading, Trailer },

  data() {
    return {
      movie: '',
      genres: [],
    }
  },

  async fetch() {
    await this.getSingleMovie()
    await this.getVideo()
  },

  head() {
    return {
      title: this.movie.title,
    }
  },
  fetchDelay: 1000,
  methods: {
    async getSingleMovie() {
        const data = axios.get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=a866f83e29aa185916154312b86a8e1f&language=en-US`
      )
      const result = await data
      this.movie = result.data
    },
  },
}
</script>

<style lang="scss" scoped>
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 500px;
        width: 100%;
        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }
    .movie-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
      }
      h1:hover{
        color: #ffab03;
      }
      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;
        span {
          font-weight: 600;
          text-decoration: underline;
          color: #ffab03;
        }

        .company{
          text-decoration: none;
          color: #fff;

        }
         
      }
      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;

        .video {
          width: 100%;
          margin: 2rem auto;
        }
      }
    }
  }
}
</style>
