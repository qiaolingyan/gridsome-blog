<template>
  <Layout>
    <!-- Main Content-->
      <div class="post-wrap">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
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
  metaInfo: {
    title: 'About'
  }
}
</script>
