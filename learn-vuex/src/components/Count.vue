<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h1>当前求和放大10倍后为: {{ bigSum }}</h1>
    <h1>我在 {{ school }}, 学习 {{ subject }}</h1>
    <h3 style="color: red">Person组件的总人数是{{ personList.length }}</h3>
    <select v-model="n">
      <!-- 注意 加了 : 之后才是 number 类型, 否则只是 string 类型 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1, // 用户选择的数字
    }
  },
  methods: {
    // #region
    // increment() {
    //   this.$store.commit('JIA', this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN', this.n)
    // },
    // **********************
    // 自动生成
    // increment(value) {
    //   this.$store.commit('JIA', value)
    // },
    // #endregion
    /*
      两个参数
        第一个属性名 => 方法名
        第二个属性值 => commit mutations 中对应的方法名(函数名 大写)
    */
    ...mapMutations('countOption', { increment: 'JIA', decrement: 'JIAN' }),
    // ********************************
    // #region
    // incrementOdd() {
    //   // if (this.$store.state.sum % 2) {
    //   //   this.$store.dispatch('jia', this.n)
    //   // }
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // incrementWait() {
    //   // setTimeout(() => {
    //   //   this.$store.dispatch('jia', this.n)
    //   // }, 500)
    //   this.$store.dispatch('jiaWait', this.n)
    // },
    // **** 自动生成
    // incrementOdd(value) {
    //   this.$store.dispatch('jiaOdd', value)
    // },
    // #endregion
    ...mapActions('countOption', {
      incrementOdd: 'jiaOdd',
      incrementWait: 'jiaWait',
    }),
  },
  computed: {
    // #region
    // he() {
    //   return this.$store.state.sum
    // },
    // xuexiao() {
    //   return this.$store.state.school
    // },
    // xueke() {
    //   return this.$store.state.subject
    // },
    // 批量, 自动, 生成
    /*
      两个参数
        计算属性名
        用到的 state 中的变量名(string 类型, 务必加上单引号)
    */
    // 对象写法
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
    // 数组写法, 计算属性名和 用到的 state 中的变量名一致时使用
    // #endregion
    // ...mapState(['sum', 'school', 'subject', 'personList']),
    // 加上模块化后
    ...mapState('countOption', ['sum', 'school', 'subject']),
    ...mapState('personOption', ['personList']),
    // *******************************
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
    ...mapGetters('countOption', ['bigSum']),
  },
  mounted() {
    const x = mapState({ he: 'sum', xuexiao: 'shcool', xueke: 'subject' })
    // {he: ƒ, xuexiao: ƒ, xueke: ƒ}
    console.log(x)
  },
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
