<template>
  <div class="has-text-centered">
    <div :id="getId(category)"></div>
  </div>
</template>

<script>
const categories = {
  'travel': 'ff79175a12',
  'onlineShop': 'c757102ef2'
}

export default {
  props: {
    category: {
      type: String
    }
  },
  methods: {
    getId: function (category) {
      return 'admitad-' + category
    }
  },
  mounted: function () {
    let s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://ad.admitad.com/shuffle/' + categories[this.category] + '/?inject_to=' + this.getId(this.category)
    let x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(s, x)
  }
}
</script>

<style>
</style>
