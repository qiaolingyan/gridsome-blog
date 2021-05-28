<template>
  <div class="layout">
  
    <!-- Page Header -->
    <header class="masthead" :style="{backgroundImage:`url(${this.GRIDSOME_API_URL}${general.cover.url})`}">
      <div
          class="fullscreen"
          @click="handleFullscreen"
      >
        <span class="iconfont icon-favorite"></span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ general.title }}</h1>
              <span class="subheading">{{ general.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="main-content">
      <aside class="card row">
        <div class="col-md-2 dropdown">
          <button
              id="dropdownMenu1"
              class="btn btn-default dropdown-toggle"
              :class="show ? 'show' : ''"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
              @click="show=!show">
            了解博主
          </button>
          <ul class="dropdown-menu" :class="show ? 'show' : ''" aria-labelledby="dropdownMenu1">
            <li class="dropdown-menu-item"><g-link to="https://github.com">github主页</g-link></li>
            <li class="dropdown-menu-item"><g-link to="https://blog.zhysry.cn">其他博客</g-link></li>
          </ul>
        </div>
        <div class="col-md-3 dropdown">
          <button
              id="dropdownMenu2"
              class="btn btn-default dropdown-toggle"
              :class="show2 ? 'show' : ''"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
              @click="show2=!show2">
            其他网站
          </button>
          <ul class="dropdown-menu" :class="show2 ? 'show' : ''" aria-labelledby="dropdownMenu2">
            <li class="dropdown-menu-item"><g-link to="https://segmentfault.com/">segmentfault</g-link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-2">
              <span>
                <button></button>
              </span>
            </div>
            <div class="col-md-7"></div>
            <div class="col-md-3"></div>
          </div>
        </div>
        
        <div class="col-md-2">
          <div style="font-size: 20px;color:#606266;margin-top: 5px">
            <b>{{ general.github_name }}</b>
          </div>
          <div style="color:#606266;">
            <g-link :to="general.github_url">外链</g-link>
            <br>
          </div>
        </div>
        <div class="col-md-1">
          <div class="profile-wrap">
            <g-image alt="Example image" :src="`${this.GRIDSOME_API_URL}${general.profile.url}`"/>
          </div>
        </div>
      </aside>
  
      <section class="row">
        <div class="col-md-3 main-content-left">
          <div class="list-group-wrap">
            <div class="list-group">
              <g-link to="/" exact class="list-group-item" exact-active-class="">
                <span class="iconfont icon-file"></span>
                博客列表
              </g-link>
              <g-link to="/edit" exact class="list-group-item">
                <span class="iconfont icon-edit"></span>
                文章编辑
              </g-link>
              <g-link to="/category" exact class="list-group-item">
                <span class="iconfont icon-edit"></span>
                文章分类
              </g-link>
              <g-link to="/contact" exact class="list-group-item">
                <span class="iconfont icon-mobile-phone"></span>
                建议提交
              </g-link>
              <g-link to="/link" exact class="list-group-item">
                <span class="iconfont icon-edit"></span>
                其他链接
              </g-link>
              <g-link to="/help" exact class="list-group-item">
                <span class="iconfont icon-help"></span>
                使用帮助
              </g-link>
            </div>
          </div>
        </div>
    
        <!-- Main Content -->
        <div class="container col-md-9">
          <slot/>
        </div>
      </section>
    </section>
    
    
    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
                </a>
              </li>
            </ul>
            <p class="copyright text-muted">Copyright &copy; Your Website 2020</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        show:false,
        show2:false,
        isFullscreen:false
      }
    },
    computed: {
      general() {
        return this.$page.general.edges[0].node
      }
    },
    mounted(){
      const fn = () => {
        this.isFullscreen = !this.isFullscreen
      }
      document.addEventListener('fullscreenchange',() => {
        fn()
      })
      document.addEventListener('mozfullscreenchange',() => {
        fn()
      })
      document.addEventListener('webkitfullscreenchange',() => {
        fn()
      })
      document.addEventListener('msfullscreenchange',() => {
        fn()
      })
    },
    methods:{
      handleFullscreen(){
        let element = document.documentElement
        console.log(this.isFullscreen)
        if(!this.isFullscreen){
          if(element.requestFullscreen){
            element.requestFullscreen()
          }else if(element.msRequestFullscreen){
            element.msRequestFullscreen()
          }else if(element.webkitRequestFullScreen){
            element.webkitRequestFullscreen()
          }else if(element.mozRequestFullScreen){
            element.mozRequestFullScreen()
          }
        }else{
          if(element.requestFullscreen){
            document.exitFullscreen()
          }else if(element.msRequestFullscreen){
            document.msExitFullscreen()
          }else if(element.webkitRequestFullScreen){
            document.webkitCancelFullscreen()
          }else if(element.mozRequestFullScreen){
            document.mozCancelFullScreen()
          }
        }
      }
    }
  }
</script>
<style>

</style>
