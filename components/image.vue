<template>
  <div>
    <figure>
      <img :src="src">
      <figcaption>{{ caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    caption: {
      type: String
    }
  }
}
</script>

<style scoped>
figure {
  text-align: center;
  margin: 20px auto;
}
figcaption {
  font-size: 0.9rem;
}
</style>
