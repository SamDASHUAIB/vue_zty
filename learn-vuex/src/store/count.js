export default {
  // 模块化, 必须写 namespaced: true
  namespaced: true,
  state: {
    sum: 0, // 求和结果
    school: '尚硅谷',
    subject: '前端',
  },
  mutations: {
    /*
      state
        储存数据
      value (payload)
        commit 携带的 变量值
    */
    JIA(state, value) {
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },
  },
  actions: {
    /*
      context (迷你版本的 $store)
        上下文, 上下可能需要的东西(属性, 方法)整合成一个对象
        {
          dispatch: function, => 用于链式调用
          commit: function, => 必须调用 mutations
          getters: {},
          state: {},
        }
      value (payload)
        dispatch 携带的 变量值
    */
    // jia(context, value) {
    //   context.commit('JIA', value)
    // },
    // jian(context, value) {
    //   context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit('JIA', value)
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit('JIA', value)
      }, 500)
    },
  },
  getters: {
    // 用于将 state 中的数据进行加工, 类似于 computed
    // 提供一个参数 state
    // getters 可以设置快捷访问。
    // bigSum(state) {
    //   return state.sum * 10
    // },
    bigSum: state => state.sum * 10,
  },
}
