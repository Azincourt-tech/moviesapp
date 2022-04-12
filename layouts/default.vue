<template>
    <div class="app">
    <Nuxt keep-alive />
    <Footer />
    </div>
</template>


<script>
import Footer from '~/components/Footer.vue'

export default {
    name: 'DefaultLayout',
  components: { Footer },
  
}
</script>

