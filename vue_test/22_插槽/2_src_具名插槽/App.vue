<template>
  <div class="container">
    <!-- 个性化, 不同的展示, 做成 slot 样子由父组件来定(传递不同的 DOM 结构) -->
    <Category title="美食">
      <!-- 组件标签里面的标签体内容就是 slot -->
      <!-- 老写法 slot="xxx" slot 属性指定具名插槽 -->
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <!-- 使用 slot="xxx" 对接具名插槽 -->
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!-- Vue2.6版本开始使用 v-slot 指令 v-slot:xxx 冒号后面是具名插槽的 name -->
      <!-- template + v-slot:xxx 命令 => 具名插槽 -->
      <!-- 没有被 template 包裹的部分 OR template + v-slot:default => 默认插槽 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'],
    }
  },
}
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
