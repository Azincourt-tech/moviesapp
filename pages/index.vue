<template>
  <div>
    <!-- Hero -->
    <Hero />
    <Body />
  </div>
</template>

<script>
import Body from '~/components/Body.vue';
import Hero from '~/components/Hero.vue';

export default {
  name: 'IndexPage',
  components: { Hero, Body }
}
</script>