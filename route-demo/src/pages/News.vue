<template>
  <div>
    <h2 :style="{ opacity }">欢迎学习 Vue</h2>
    <ul>
      <li>
        news001
        <input type="text" />
      </li>
      <li>
        news002
        <input type="text" />
      </li>
      <li>
        news003
        <input type="text" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1,
      timer: null,
    }
  },
  // 路由组件独有的两个生命周期钩子
  // activated() {
  //   // 未激活 => 激活 "切入" 触发
  //   console.log('切入')
  //   this.timer = setInterval(() => {
  //     console.log('@')
  //     this.opacity -= 0.01
  //     if (this.opacity <= 0) {
  //       this.opacity = 1
  //     }
  //   }, 16)
  // },
  // deactivated() {
  //   // 激活 => 未激活 "切走" 触发
  //   console.log('切走')
  //   clearInterval(this.timer)
  // },
}
</script>
<style scoped></style>
