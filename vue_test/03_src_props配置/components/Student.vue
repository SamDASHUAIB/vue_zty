<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    console.log(this)
    return {
      msg: '我是一个尚硅谷的学生',
      // data 和 props 中的属性, 属性名冲突, 优先取 props
      myAge: this.age, // 直接 this.age 能够取得到 props 中的 age props 的优先级比 data 更高, 属性名冲突, 优先取 props
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    },
  },
  /*
    props 确认收款, 且 props 中的数据不允许修改, 如要修改, 请使用 data 中转一个变量, 将 props 值保存后, 再修改 data 中的此项
  */
  //简单声明接收，数组 Array 形式
  // props:['name','age','sex']

  // 接收的同时对数据进行类型限制 Object
  /* props:{
			name:String,
			age:Number,
			sex:String
		} */
  // 对象形式: 接收的同时对数据进行 类型限制 + 默认值的指定 + 必要性的限制
  props: {
    name: {
      type: String, //name的类型是字符串
      required: true, //name是必要的
    },
    age: {
      type: Number,
      default: 99, //默认值
    },
    sex: {
      type: String,
      required: true,
    },
    // 在 props 中写成 xxxYyy 形式
    myName: {
      type: String,
      required: true,
    },
  },

  // props 的三种写法
  // 简单声明接收
  // props: ['name'],
  // // 数据类型限制
  // props: {
  //   name: String,
  // },
  // // 类型限制 + 默认值 OR 是否必填
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //     default: 'sam'
  //   }
  // }
}
</script>
