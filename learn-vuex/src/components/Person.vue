<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red;">Count组件的求和为{{ sum }}</h3>
    <h3>列表中的第一个人的名字是: {{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
import { nanoid } from 'nanoid'
export default {
  name: 'Person',
  props: {},
  data() {
    return {
      name: '',
    }
  },
  computed: {
    personList() {
      // 模块化, 手写 没有借助 mapState
      return this.$store.state.personOption.personList
    },
    // sum() {
    //   return this.$store.state.countOption.sum
    // },
    firstPersonName() {
      /*
      getters 的形式为
        {
          countOption/bigSum: 0
          personOption/firstPersonName: "张三"
        }
      */
      return this.$store.getters['personOption/firstPersonName']
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name }
      // 模块化前缀 personOption/
      this.$store.commit('personOption/ADD_PERSON', personObj)
      this.name = ''
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name }
      // 模块化前缀 personOption/
      this.$store.dispatch('personOption/addPersonWang', personObj)
      this.name = ''
    },
  },
  mounted() {
    /*
      {
        countOption/bigSum: 0
        personOption/firstPersonName: "张三"
      }
    */
    console.log('这里是 getters', this.$store.getters)
    /*
      {
        countOption: Object
        personOption: Object
      }
    */
    console.log('这里是 state', this.$store.state)
    console.log(this.$store)
  },
}
</script>
<style scoped></style>
