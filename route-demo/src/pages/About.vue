<template>
  <h2>我是 About 的内容</h2>
</template>
<script>
export default {
  name: 'About',
  // 通过路由规则, 进入该组件之前被调用(需要放行, 才能真正进入) 也就是说, 此组件作为 路由组件时, 生效
  // 作为普通组件 <About/> 的时候是不生效的
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    next() // 放行后, 才能真正进入
  },
  // 通过路由规则, 离开该组件时被调用
  // eslint-disable-next-line no-unused-vars
  beforeRouteLeave(to, from, next) {
    console.log('将要离开组件')
    next() // 放行后, 才能真正离开
  },
}
</script>
