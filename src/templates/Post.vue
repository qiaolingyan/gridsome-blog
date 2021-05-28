<template>
  <Layout>
    <!-- Post Content-->
      <div class="post-wrap" v-html="mdToHtml($page.post.content)">
      </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    general: allStrapiGeneral {
      edges{
        node{
          id
          title
          subtitle
          cover{
            url
          }
          profile{
          url
          }
          github_name
          github_url
        }
      }
    }
    post: strapiPost (id: $id) {
      id
      title
      content
      created_at
      cover {
        url
      }
      tags {
        id
        title
      }
    }
  }
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: "Post",
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown)
    }
  }
}
</script>

<style scoped>
</style>
