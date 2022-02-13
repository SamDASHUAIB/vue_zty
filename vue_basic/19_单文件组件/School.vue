<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// {} 其实是 Vue.extend({}) 的简写形式
export default {
  name: 'School', // 最好和文件名(.vue)保持一致
  data() {
    return {
      name: '尚硅谷',
      address: '北京昌平',
    }
  },
  methods: {
    showName() {
      alert(this.name)
    },
  },
}
</script>

<style>
.demo {
  background-color: orange;
}
</style>
