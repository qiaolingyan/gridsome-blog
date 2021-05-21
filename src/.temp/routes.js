const c1 = () => import(/* webpackChunkName: "page--src-pages-user-id-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\user\\[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\templates\\Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\templates\\Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\templates\\MyPage.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\Contact.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/tag/:id/",
    component: c2
  },
  {
    path: "/post/:id/",
    component: c3
  },
  {
    path: "/my-page/",
    component: c4
  },
  {
    path: "/contact/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
