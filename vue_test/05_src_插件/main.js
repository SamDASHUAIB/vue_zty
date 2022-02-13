//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭Vue的生产提示
Vue.config.productionTip = false

//应用（使用）插件
Vue.use(plugins, 1, 2, 3)
//创建vm
new Vue({
  el: '#app',
  render: (h) => h(App),
})
/*
  插件(工具集)
  增强功能, 本质就是一个包含了 install(Vue, options) 函数的对象
    引入 js
    Vue.use(xxx) 使用插件 => 调用 js 文件中的 install 方法
*/
