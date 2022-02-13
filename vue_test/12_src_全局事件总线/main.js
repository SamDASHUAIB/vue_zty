//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({})
// const d = new Demo()
// Vue.prototype.x = d

//创建vm
new Vue({
  el: '#app',
  render: (h) => h(App),
  // 必须在 App 组件完成挂载之前将 全局事件总线安装完成, 否则, 还没安装 总线, 就先在 App 组件中使用了, 肯定会报错啊
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  },
})

/*
  事件总线要符合两个要求
    第一: 所有的 vc 都要能够"看得见" 管理所有 vc
    第二: 需要能够使用 $emit $on $off 等自定义事件所需的方法

  ∵ 所有 vc 都要看得见
  ∴ VueComponent.prototype
  又∵ VueComponent 是由 Vue.extend() 创建的, 而且, 每次都是新的，不能用 VueComponent
  ∴ 考虑 vm.__proto__, 即 Vue.prototype
  又 ∵ vc.__proto__.__proto__ === VueComponent.prototype.__proto__ === Vue.prototype 所有的 vc 都可以访问到 Vue.prototype 上的 属性和方法
  ∴ 在 Vue.prototype 上定义的 $bus 所有的 vc 都可以访问到。
  ∵ $emit $on $off 全部定义在 Vue.prototype 上,
  ∴ 全局事件总线就是 vm 的实例对象
*/
