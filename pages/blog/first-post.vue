<template>
  <div>
    <blog>
      <h1 slot="title">Welcome to ADonation</h1>
      <template slot="content">
        <p>
          The idea of this site is simple. You can make a donation contribution through clicking/viewing an advertisement. Every month, I will donate all the revenue from the ads to a non-profit organization. Alos, all the revenue report will be posted in this blog. Later, I will try to group the advertisements into different categories. You can choose your advertisements by your will!
        </p><br>
        <p>
          In the first stage, I have signed up a few affiliate programs to get the ads, including <a href="https://www.google.com/adsense/" target="_blank">Google AdSense</a>, <a href="https://www.adcash.com/" target="_blank">Adcash</a>, <a href="https://hilltopads.com/" target="_blank">Hilltop Ads</a> and <a href="https://www.admitad.com/" target="_blank">Admitad</a>. I have been rejected to join Google AdSense, Adcash and Hilltop Ads due to lack of content. Admitad is an affiliate program network so the content is not that important for the application.
        </p>
        <blog-image src="/20171121/adcash.png" caption="Adcash"></blog-image>
        <blog-image src="/20171121/hilltop.png" caption="Hilltop Ads"></blog-image>
        <blog-image src="/20171121/google.png" caption="Google"></blog-image>
      </template>
    </blog>
  </div>
</template>

<script>
import Blog from '~/components/blog.vue'
import BlogImage from '~/components/image.vue'

export default {
  components: {
    Blog,
    BlogImage
  }
}
</script>
