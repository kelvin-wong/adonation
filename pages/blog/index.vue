<template>
  <div class="container has-text-centered">
    <h1 class="title is-uppercase">
      Blog
    </h1>
    <p
      v-for="(data, date) in links"
      :key="date"
    >{{ computedDate(date) }} - <nuxt-link :to="data.slug" append>{{ data.title }}</nuxt-link>
    </p>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      links: {
        'Nov 21, 2017': {
          title: 'My first post',
          slug: 'first-post'
        }
      }
    }
  },
  methods: {
    computedDate: function (date) {
      date = new Date(date)
      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return date.toLocaleDateString('en-HK', options)
    }
  }
}
</script>

<style scoped>
</style>
