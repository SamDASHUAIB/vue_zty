import Vue from 'vue'
import Vuex from 'vuex'

import countOption from './count'
import personOption from './person'
Vue.use(Vuex)

/*
  什么时候使用 vuex？
    多个组件依赖于同一个状态
    来自不同组件的行为需要变更同一状态 读/写
  Vue components 客人
  store(总经理, 领导, 所有的方法都在 store 身上)
    actions 服务员 异步 ajax 用于响应组件中的动作
      类型 Object
      dispatch
    mutations 厨师 用于操作数据(state)
      类型 Object
      commit
    state 菜 用于存储数据(共享)
      类似于 Vue component 中的 data
      类型 Object
    getters 用于将 state 中的数据进行加工
      类似于 计算属性

    import 语句总是, 提升到最前面执行
*/

export default new Vuex.Store({
  modules: {
    countOption,
    personOption,
  },
})
