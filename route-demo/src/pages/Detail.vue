<template>
  <ul>
    <!-- <li>消息编号: {{ $route.query.id }}</li> -->
    <!-- <li>消息编标题: {{ $route.query.title }}</li> -->
    <li>消息编号: {{ id }}</li>
    <li>消息编标题: {{ title }}</li>
  </ul>
</template>
<script>
export default {
  name: 'Detail',
  // props 接收路径传参, 已经在 route 中配置好了 props 用的地方(具体组件)只要声明接收([key1, key2, ...])
  props: ['id', 'title'],
}
</script>
<style scoped></style>
