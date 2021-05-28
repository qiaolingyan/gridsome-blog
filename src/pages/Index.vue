<template>
  <Layout>
    <div class="panel panel-default">
      <div class="panel-heading">
        <input class="search-input" placeholder="请输入关键字" v-model="searchKey" clearable></input>
        <button class="search-btn" @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain>√</button>
      </div>
    </div>
      <!-- Main Content -->
      <File v-for="edge in posts" :key="edge.node.id" :post="edge.node">
      </File>
      
      <Pager class="pager-nav" :info="$page.posts.pageInfo" />

  </Layout>
</template>
<page-query>
  query($page: Int){
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
    posts: allStrapiPost(perPage: 10, page: $page) @paginate{
      pageInfo {
        totalPages
        currentPage
      }
      edges{
        node{
          id
          title
          content
          description
          created_at
          tags {
            id
            title
          }
        }
      }
    }
  }
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  name: 'Home',
  components: {
    Pager
  },
  data(){
    return {
      searchKey:'',
      posts:[]
    }
  },
  computed: {
    general() {
      return this.$page.general.edges[0].node
    }
  },
  mounted(){
    this.posts = this.$page.posts.edges
  },
  watch:{
    '$page.posts.edges':{
      handler(){
        this.posts = this.$page.posts.edges
      }
    }
  },
  methods:{
    search(){
      this.posts = this.$page.posts.edges.filter((edge) => {
        return edge.node.title.indexOf(this.searchKey) !== -1
      })
    }
  }
}
</script>

<style>
</style>
