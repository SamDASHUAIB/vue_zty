export default {
  namespaced: true,
  state: {
    personList: [{ id: '001', name: '张三' }],
  },
  mutations: {
    /*
      简单操作
    */
    ADD_PERSON(state, personObj) {
      console.log('mutations 中的 ADD_PERSON 被调用了')
      state.personList.unshift(personObj)
    },
  },
  actions: {
    /*
      异步 OR 复杂的判断
        链式
    */
    addPersonWang(context, value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('添加的人必须姓王')
      }
    },
  },
  getters: {
    // 此处的 state 就是 模块中的 state 不是总的 state
    firstPersonName(state) {
      return state.personList[0].name
    },
  },
}
