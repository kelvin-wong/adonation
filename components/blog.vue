<template>
  <div class="container has-text-centered">
    <article>
      <header class="title">
        <slot name="title"></slot>
      </header>
      <section class="has-text-left">
        <slot name="content"></slot>
      </section>
    </article>
  </div>
</template>

<script>
import BlogImage from '~/components/image.vue'

export default {
  components: {
    BlogImage
  }
}
</script>


<style scoped>
.container {
  max-width: 800px;
}
p {
  font-size: 1.1rem;
}
</style>
