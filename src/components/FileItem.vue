<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <g-link :to="'/edit/'+post.id">
        <span class="iconfont icon-edit"></span>
      </g-link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <g-link :to="'/post/'+post.id">
          {{ post.title }}
      </g-link>
    </div>
    <div class="panel-body">
      <p>
        {{ post.description }}
      </p>
      <p>
        <span class="tag_list" v-for="tag in post.tags" :key="tag.id">
          <g-link :to="'/tag/'+tag.id">{{ tag.title }}</g-link>
          &nbsp;&nbsp;
          
        </span>
        <span class="created_at">
          最近更新 {{ post.created_at }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FileItem",
    props:{
      post:{
        type:Object
      }
    }
  }
</script>

<style scoped>

</style>
