// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About'
import Home from '../components/Home'

//创建并暴露一个路由器
// 路由就是一组 key-value 的对应关系
// 多个路由需要经过 路由器 router 的管理
// 路由 => SPA 应用(导航区 展示区 点击切换, 不同的路径对应不同的页面展示)
// 用户点击, 引起路径变化 => router 检测路径的变化 => route规则: 路径(key)组件(value) => 展示区, 对应组件渲染
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
    },
  ],
})
