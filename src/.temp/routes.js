const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-edit-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\templates\\Edit.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\templates\\MyPage.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-link-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\Link.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-help-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\Help.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-edit-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\Edit.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-category-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\Category.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\Contact.vue")
const c10 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\About.vue")
const c11 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c12 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "E:\\lagou\\lagou-node\\part3\\blog-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/edit/:id/",
    component: c3
  },
  {
    path: "/my-page/",
    component: c4
  },
  {
    path: "/link/",
    component: c5
  },
  {
    path: "/help/",
    component: c6
  },
  {
    path: "/edit/",
    component: c7
  },
  {
    path: "/category/",
    component: c8
  },
  {
    path: "/contact/",
    component: c9
  },
  {
    path: "/about/",
    component: c10
  },
  {
    name: "404",
    path: "/404/",
    component: c11
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c12
  },
  {
    name: "*",
    path: "*",
    component: c11
  }
]
