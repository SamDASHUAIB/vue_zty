<template>
  <div>
    <h2>我是 Home 的内容</h2>
    <!-- 导航区 -->
    <ul class="nav nav-tabs">
      <li>
        <!-- <a class="list-group-item active" href="./home-news.html">
          News
        </a> -->
        <!-- 子路由, 需要带着 /home/xxxx 前面带着爹的路径 -->
        <!-- 导航区 -->
        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/news"
        >
          News
        </router-link>
      </li>
      <li>
        <!-- <a class="list-group-item" href="./home-message.html">
          Message
        </a> -->
        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/message"
        >
          Message
        </router-link>
      </li>
    </ul>
    <!-- 展示区(不同的组件有不同的展示) -->
    <!-- include="News" 中的 News 是组件名 (name 属性 vue 文件中定义的), 不是 route 中的 name 属性 -->
    <!-- <keep-alive include="News">
      <router-view></router-view>
    </keep-alive> -->
    <!--
      keep-alive 的作用, 让不展示(未激活)的路由组件保持挂载, 而不是销毁
      缓存组件 多个, 使用数组(白名单)
     -->
    <keep-alive :include="['News', 'Message']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'Home',
}
</script>
