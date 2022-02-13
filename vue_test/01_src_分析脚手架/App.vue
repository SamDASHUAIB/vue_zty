<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 01_src_分析脚手架
//引入组件
import School from './components/School'
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    School,
    Student,
  },
}
</script>
