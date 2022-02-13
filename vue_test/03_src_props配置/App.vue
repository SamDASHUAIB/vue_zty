<template>
  <div>
    <!-- 打钱 -->
    <!-- 传递 props 父 => 子 -->
    <!-- 在 template 中写成 xxx-yyy 形式 -->
    <Student name="李四" sex="女" :age="18" my-name="sam" />
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: 'App',
  components: { Student },
}
</script>
