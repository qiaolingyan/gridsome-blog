<template>
  <Layout>
    <div class="post-wrap">
      Pages are usually used for normal pages or for listing items from a GraphQL collection.
      Add .vue files here to create pages. For example **About.vue** will be **site.com/about**.
      Learn more about pages: https://gridsome.org/docs/pages/
  
      You can delete this file.
    </div>
  </Layout>
</template>
<page-query>
  query{
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
  }
</page-query>
<script>
  export default {
    name: "Help"
  }
</script>

<style scoped>

</style>
