<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//引入组件
// App 组件是汇总所有组件的
import School from './School.vue'
import Student from './Student.vue'

// {} 其实是 Vue.extend({}) 的简写形式
export default {
  name: 'App',
  components: {
    School,
    Student,
  },
}
</script>
