<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props 实现: 子给父传递数据(函数参数 ) -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- 子 emit 父 v-on -->
    <Student @atguigu.once="getStudentName" @demo="m1" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- 组件, 使用原生事件, 加上 native 绑定在 Student 组件的最外侧的 html 元素上 -->
    <!-- 灵活性很强 -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'App',
  components: { School, Student },
  data() {
    return {
      msg: '你好啊！',
      studentName: '',
    }
  },
  /*
    两条规则(Vue 给的)
    **** 优先级更高 —— 定义成 普通函数的 method 其中的 this 一定就是 当前组件 vc 的实例对象
      触发自定义事件的组件(定义了自定义事件的 组件 $emit) 就是, 自定义事件回调函数中的 this
      触发自定义事件的是 子组件
  */
  methods: {
    // 作为 开放给 子组件 的接口
    getSchoolName(name) {
      console.log('App收到了学校名：', name)
    },
    // 作为 自定义事件的 回调
    // 除了 name 剩下的参数全部整理到 params 数组身上
    getStudentName(name, ...params) {
      console.log('App收到了学生名：', name, params)
      // 子组件传递过来的 name 保存到父组件的 data 中
      this.studentName = name
    },
    m1() {
      console.log('demo事件被触发了！')
    },
    show() {
      alert(123)
    },
  },
  mounted() {
    // this.getStudentName 函数, 回调函数必须留在父亲这里
    this.$refs.student.$on('atguigu', this.getStudentName) //绑定自定义事件
    this.$refs.student.$once('atguigu', this.getStudentName) //绑定自定义事件（一次性）
    // this.getStudentName 函数中的 this 是 App 的 vc 而不是 Student 的 vc 对象(规则冲突, 但优先级是 '定义成 普通函数的 method 其中的 this 一定就是 当前组件 vc 的实例对象' 这条规则更高)
    // 触发事件 atguigu 的是组件 Student, 因此, 普通形式的回调函数中的 this 就是 Student 的 vc 对象 (Vue 的规定)
    this.$refs.student.$on('atguigu', function(name, ...params) {
      console.log('App收到了学生名', name, params)
      // 这里的 this 是 Student 的组件实例对象
      this.studentName = name
    })
    // 箭头函数形式的 回调, 没有 自己的 this 所以借用外层 mounted 函数的 this 也就是 App 组件的 vc 对象
    this.$refs.student.$on('atguigu', (name, ...params) => {
      console.log('App收到了学生名', name, params)
      this.studentName = name
    })
  },
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
