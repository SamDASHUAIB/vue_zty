/*
	该文件是整个项目的入口文件
*/
// 引入Vue, 默认引用的是 runtime 版本不带模板解析器的 vue
import Vue from 'vue'
// 引入完整版本的 Vue
// import Vue from 'vue/dist/vue'
// 引入 App 组件，它是所有组件的父组件，将所有组件汇总到 App 组件
import App from './App.vue'
// 关闭 vue 的生产提示
Vue.config.productionTip = false

/*
	关于不同版本的Vue：

		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数(作为参数 h )去指定具体内容。
      简写: render: h => h(App)
      真实: render(createElement){
        return createElement(App)
      }
      箭头函数是不能使用函数简写形式的。
      真实+箭头函数: render: createElement => createElement(App)

    模板解析器，开发时候有用，生产环境，无用，打包的时候，不需要，因此使用 vue.runtime.xxx.js 版本
    打包体积小，性能更好
    开发 =》vue-template-compiler 辅助我们解析 .vue 文件中的 template
*/

// 创建Vue实例对象---vm
// vue.runtime.xxx.js 运行版的 Vue 只包含核心功能, 没有模板解析器。
new Vue({
  el: '#app',
  //render函数完成了这个功能：将App组件放入容器中。
  render: (h) => h(App),
  // render:q=> q('h1','你好啊')

  // template:`<h1>你好啊</h1>`,
  // components:{App},
})

// 完整版本的 Vue 带有模板解析器
// new Vue({
//   el: '#app',
//   template: `<h1>你好啊</h1>`,
//   components: { App },
// })
