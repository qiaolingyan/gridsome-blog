<template>
  <Layout>
    <div class="post-wrap">
      无
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
    name: "Link"
  }
</script>

<style scoped>

</style>
