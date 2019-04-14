<template>
  <div class="container">
    <div class="columns">
      <div class="column is-offset-2 is-8">
        <p class="subtitle is-6">
          <nuxt-link :to="{name :'index'}">Back to Blog home</nuxt-link>
        </p>
        <h1 class="title is-2">
          {{ $route.params.post.title }}
        </h1>
        <div class="description">{{$route.params.post.description}}</div>
        <div class="content" v-html="compiledMarkdown"></div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
export default {
  computed: {
    compiledMarkdown: function () {
      if (!this.$route.params.post.body) return 'No content';
      return marked(this.$route.params.post.body, { sanitize: true })
    }
  }
}
</script>
<style media="screen" scoped>
  .content, .description, .title {
    padding: 10px;
    margin: 10px;
  }
</style>