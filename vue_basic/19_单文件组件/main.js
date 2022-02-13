import App from './App.vue'

// 创建 Vue 实例, 指明 Vue 为哪个容器服务
new Vue({
  el: '#root', // el 可以用 $mount() 替代
  template: `<App></App>`, // template 可以用
  components: { App },
})
