<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学生姓名：{{ nameFromStudent }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
      nameFromStudent: '',
    }
  },
  mounted() {
    // 一旦挂载, 我们就监听 hello 事件
    // 注意写成 箭头函数形式。
    this.$bus.$on('hello', (data) => {
      console.log('我是School组件，收到了数据', data)
      this.nameFromStudent = data
    })
  },
  beforeDestroy() {
    // 总线用完了后, 记得销毁
    this.$bus.$off('hello')
  },
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
