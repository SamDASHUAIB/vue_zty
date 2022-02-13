<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <!-- 具名插槽， 使用 name 属性来对接 -->
    <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>

    <!-- slot 标签 + name 属性 => 具名插槽 -->

    <!-- 插槽中 DOM 的样式, 子组件和父组件中都可以定义 -->
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>
