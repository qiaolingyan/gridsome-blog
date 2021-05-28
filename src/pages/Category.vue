<template>
  <Layout>
    <ul class="list-group post-wrap">
      <li class="list-group-item category-list-item"
          v-for="edge in $page.tags.edges"
          :key="edge.node.id"
      >
        <g-link :to="'/tag/'+edge.node.id">{{ edge.node.title }}</g-link>
      </li>
    </ul>
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
    tags:allStrapiTag{
      edges{
        node{
          title
          id
        }
      }
    }
  }
</page-query>
<script>
  export default {
    name: "Category"
  }
</script>

<style scoped>

</style>
