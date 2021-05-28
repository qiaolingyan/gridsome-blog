<template>
  <Layout>
    <div class="post-wrap">
      <div class="editor-page">
        <div class="container page">
          <div class="row">
        
            <div class="col-md-10 offset-md-1 col-xs-12">
              <form @submit.prevent>
                <fieldset>
                  <fieldset class="form-group">
                    <input v-model="article.title" required type="text" class="form-control form-control-lg"
                           placeholder="Article Title">
                  </fieldset>
                  <fieldset class="form-group">
                    <input v-model="article.description" required type="text" class="form-control"
                           placeholder="What's this article about?">
                  </fieldset>
                  <fieldset class="form-group">
                <textarea v-model="article.content" required class="form-control" rows="8"
                          placeholder="Write your article (in markdown)"></textarea>
                  </fieldset>
                  <fieldset class="form-group">
                    <select class="form-control" multiple v-model="article.tags">
                      <option :value ="edge.node.id" v-for="edge in $page.tags.edges"
                              :key="edge.node.id">{{ edge.node.title }}</option>
                    </select>
                  </fieldset>
                  <button @click.prevent="onSubmit" class="btn btn-lg pull-xs-right btn-primary">
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
      
          </div>
        </div>
      </div>
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
  import {post} from '../api/post'
  export default {
    name: "Edit",
    data(){
      return {
        article:{
          title: '',
          description: '',
          body: '',
          tags: []
        }
      }
    },
    methods: {
      async onSubmit() {
        try{
          const { data } = await post(this.article)
          window.alert('创建成功')
          this.article = {
            title: '',
            description: '',
            body: '',
            tags: []
          }
        }catch (e) {
          window.alert('创建失败')
        }
       
      }
    }
  }
</script>

<style scoped>

</style>
