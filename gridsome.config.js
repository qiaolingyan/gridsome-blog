// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '快乐中国',
  siteDescription: '我要下班',
  plugins: [{
      use: '@gridsome/source-filesystem',
      options: {
        typename: 'BlogPost',
        path: './content/blog/**/*.md'
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        // apiURL: 'http://106.75.182.115:1337', // 可能经常变
        // apiURL: 'http://localhost:1337', // 开始
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   email: '1379282164@qq.com',
        //   password: 'Qly19940116'
        // }
      }
    }
  ],
  templates: {
    StrapiPost: [{
      path: '/post/:id',
      component: './src/templates/Post.vue'
    }],
    StrapiTag: [{
      path: '/tag/:id',
      component: './src/templates/Tag.vue'
    }]
  }
}