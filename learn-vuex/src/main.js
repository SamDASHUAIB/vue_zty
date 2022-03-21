import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

/*
  多个组件的共享状态进行集中式管理(读/写), 也是一种组件间通信的方式, 且适用于任意组件间通信
  共享状态 => 集中式管理
  什么时候使用 vuex?
    多个组件依赖同一状态
    来自不同组件的行为需要变更同一状态
*/
