<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> <p>Home page</p> </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErroR',
  layout: 'empety',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  h1 {
    padding: 6rem 0 2rem 0;
    color: aliceblue;
    font-size: 40px;
    text-align: center;
  }

  h1:hover {
    color: rgba(252, 176, 69, 1);
  }

  p {
    text-align: center;
    color: aliceblue;
    font-size: 30px;
  }

  p:hover {
    color: rgba(252, 176, 69, 1);
  }
}
</style>
