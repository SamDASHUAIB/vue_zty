<template>
  <div id="app">
    <div>
      <div class="row">
        <Banner></Banner>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <!-- 导航区 -->
          <div class="list-group">
            <!-- 在原始 html 中我们使用 a 标签实现页面的跳转 -->
            <!-- <a class="list-group-item" href="./about.html">About</a> -->
            <!-- <a class="list-group-item active" href="./home.html">Home</a> -->
            <!-- 在 vue 中我们使用 router-link 来实现路由的切换 active-class="active" 激活时(点击时)添加 active 类名 -->
            <!-- 导航项 对应的 path 使用 to 属性来指定 -->
            <router-link
              class="list-group-item"
              active-class="active"
              to="/about"
            >
              About
            </router-link>
            <router-link
              class="list-group-item"
              active-class="active"
              to="/home"
            >
              Home
            </router-link>
            <!-- 将 push 模式变成 replace 模式 -->
            <!-- <router-link
              class="list-group-item"
              active-class="active"
              to="/home"
              replace
            >
              Home
            </router-link> -->
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <!-- 展示区 -->
            <div class="panel-body">
              <!-- 激活路由(点击 => path => 组件)对应的组件所在 -->
              <!-- 此处展示的组件, 由用户的点击的导航项决定 -->
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    Banner,
  },
}
</script>

<style></style>
