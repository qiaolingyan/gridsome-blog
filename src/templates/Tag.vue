<template>
  <Layout>
    
    <!-- Main Content -->
      <File v-for="post in $page.tag.posts" :key="post.id" :post="post">
      </File>
    
      <!--<Pager :info="$page.tag.posts.pageInfo" />-->
  
  </Layout>
</template>
<page-query>
  query ($id: ID){
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
    tag: strapiTag(id:$id){
      id
      title
      posts{
        id
        title
        content
        description
        created_at
      }
    }
  }
</page-query>
<script>
  export default {
    name: "Tag"
  }
</script>

<style scoped>

</style>
