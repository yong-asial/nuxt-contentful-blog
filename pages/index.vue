<template>
  <div class="container">
  <div class="columns">
    <div class="column is-offset-2 is-8">
      <h1 class="title is-2">Latest Posts</h1>
      <hr>
      <h2 class="title is-4" v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{name : 'blog', params: {post: post.fields}}">{{ post.fields.title }}</nuxt-link>
      </h2>
    </div>
  </div>
</div>
</template>
<script>
  import {createClient} from '~/plugins/contentful.js'
  const client = createClient();
  export default {
    // 'env' is available in the context object
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSION_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be avaiable in the template
        return {
          posts: posts.items
        }
      }).catch(console.error)
    }
  }
</script>
