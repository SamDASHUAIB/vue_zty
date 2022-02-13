<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入一个hunhe 混入就是复用配置
// 混入的配置属于默认配置, 如与组件中的部分重复, 则以 组件中的 自定义为准, 但是 生命周期函数都会执行一次, 且 mixin 中的先执行
// import {hunhe,hunhe2} from '../mixin'

export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
      x: 666,
    }
  },
  // mixins:[hunhe,hunhe2],
}
</script>
