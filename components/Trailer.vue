<template>
  <div>
    <div v-for="(video, index) in videos" :key="index" class="videos">
      <div class="container videos">
        <iframe
          width="70%"
          height="600"
          :src="`https://www.youtube.com/embed/${video.key}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TrailerVideo',

  data() {
    return {
      videos: [],
    }
  },

  async fetch() {
    await this.getVideo()
  },

  methods: {
    async getVideo() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}/videos?api_key=a866f83e29aa185916154312b86a8e1f&language=en-US`
      )

      this.videos = response.data.results
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 2rem auto 1rem;

  .videos {
    align-items: center;

    @media screen and (max-width: 500px) {
    .videos{
      width: 90%;
      height: 100px;
      margin: 2rem auto 3rem;
      }
    }
  }
}
</style>
