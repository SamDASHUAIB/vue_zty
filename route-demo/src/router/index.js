import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/*
  路由的定义
    所谓的路由就是一组 key-value 的对应关系
    多个路由, 需要经过路由器的管理
    key1 + value1 => 一组 route
      key 就是 path
      value 就是 组件
  SPA 应用 => 单页富应用
  局部更新 => 点击链接不会刷新页面, 只会做页面的局部更新
  数据需要通过 ajax 请求获取
    导航区(点击) => 路径变化(router 路由器监测路径变化) => 一组 route(path 对应的组件) => 内容区 (渲染组件)

  前端路由
    path(/class) => 响应组件
    当浏览器的路径改变时, 对应的组件就会显示
  后端路由
    path(/class) => 处理此路径对应请求的函数
    服务器接收到一个请求时, 根据请求路径找到匹配的函数来处理请求, 返回响应数据


  使用步骤:
    引入 VueRouter
    使用 VueRouter 插件 Vue.use()
    创建路由规则集 routes 路径 key => 组件 value
    装配路由规则集到 router 中 new VueRouter({routes})
    导出
  相关概念
    一般组件: 例如 <Hello/> 直接使用标签展示 放在 components 文件夹中
    路由组件: 需要借助 router 才能展示 放在 pages/views 文件夹中

  通过切换, 隐藏了的路由组件, 默认是被销毁的, 需要的时候再去挂载。
  $route: 每个组件独有, 里面存储着自己的路由信息 => 路由规则
  $router: 整个应用只有一个, 或者说多个组件共有 => 管理多个 route 的路由器

  路由参数, 两种参数
    query 参数 ?key1=value1&key2=value2
      两种写法 字符串 OR 对象
      例子:
      :to="`/home/message/detail?id=${m.id}&title=${m.title}`"
      :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
    params 参数 两种写法 字符串 OR 对象
      例子:
        字符串形式
          path: 'detail/:id/:title', 首先需要在单个 route 的 path 上占位
          :to="`/home/message/detail/${m.id}/${m.title}`" 其次在 to 中进行配置

        对象形式
          path: 'detail/:id/:title', 首先需要在单个 route 的 path 上占位
          其次在 route-link 中进行 配置, 必须使用 name 而不能使用 path !!!!
          :to="{
              name: 'Detail', // 这里必须使用 name 不能用 path !!!
              params: {
                id: m.id,
                title: m.title,
              },
            }"
  props 三种写法, 谁接收参数, 就定义在谁对应的 route 中
    对象写法 => 死数据 props: {a:'a', b: 'hello'} 几乎不用
    props 值为 true => props: true 只能处理 params 不能处理 query
    回调函数 => 完整形态, params 和 query 类型参数都可以接收

  单个 route 中 name 配置项的作用
    代替 path 指向对应的 component 简化写法(路径过长时, 体现优势)
      在 route-link 中通过 to 对应相关的组件时, 可以简化, 直接写 name 属性值, 不用写一长串的路径
    例如 to="/home/message/detail" => :to="{name: 'Detail'}"
    用 name 的前提是, to 要写成对象形式, 路径过长时, 优势才会体现出来。

  $route
    meta 属性（对象）, 路由元信息，专门放置我们需要的, 一些自定义项。

  hash 模式 默认开启的模式
    hash 值（# 以及后面的内容就是 hash 值）不会作为路径的一部分, 发送给服务器，所以不会出现 刷新 404 问题
    兼容性好
  history 模式 美观
    兼容性差一点
    部署到服务器
      刷新 出现 404 问题。路径全部发送给服务器，请求资源，如果后端没有处理，就废废了
    解决方案：
      需要后端进行相应的设置
      connect-history-api-fallback 库 node.js 解决方案
      nginx 方案 中间代理
      原理：
        分辨，前端路由 后端路由，（后端工程师）
        对于前端路由，不发送请求去请求资源，（一步一步点击，不发请求，不会出问题）
        一旦刷新就废了（发送请求）
*/
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    // 子路由中的 path 不加 / 表示会带上父 path -> /home/message
    children: [
      {
        path: 'message',
        name: 'Message',
        component: () => import('../pages/Message.vue'),
        // 携带 params 参数, 需要一个占位 /:id/:title, 告诉 VueRouter 这并不是多级路径而是 params 参数
        children: [
          {
            path: 'detail/:id/:title',
            name: 'Detail',
            component: () => import('../pages/Detail.vue'),
            // props 简化代码, 不必写出 n 次重复的 this.$route.params.xxx 或 this.$route.query.xxx
            // 写法三: 完整版, params 和 query 方式的传参, 都可以处理
            props($route) {
              return {
                // params 也可以换成 query, 因此 params 和 query 都可以处理
                id: $route.params.id,
                title: $route.params.title,
              }
            },
            meta: { title: '详情' },
            // 高端写法, 解构赋值的连续写法。
            // props({ params: { id, title } }) {
            //   return {
            //     id,
            //     title,
            //   }
            // },
            /*
              写法二
              props 值为 true, 就会把该路由组件收到的所有 params 参数, 以 props 的形式传给 Detail 组件
              缺点:
                不能处理 query 方式的传参
            */
            // props: true

            // 写法一 对象写法, 传递的是死的数据
            // props: {a: '1', b: 'hello'},
          },
        ],
        meta: { isAuth: true, title: '消息' },
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../pages/News.vue'),
        meta: { isAuth: true, title: '新闻' },
        // 独享路由守卫, 只有前置, 只对某个路由进行限制
        // beforeEnter: (to, from, next) => {
        //   if (to.meta.isAuth) {
        //     if (localStorage.getItem('school') === 'atguigu') {
        //       next()
        //     } else {
        //       alert('学校名不对, 无权查看!')
        //     }
        //   } else {
        //     next()
        //   }
        // },
      },
    ],
    meta: { title: '主页' },
  },
  /*
    路由规则 key-value
    key 就是 path => '/about'
    value 就是组件 component => () => import(...)
  */
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'), // 按需加载
    meta: { title: '关于' },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})
// #region
// 全局前置路由守卫, 初始化的时候被调用, 每次路由切换之前调用。权限控制
/*
  to: 目标route 目的地
  from: 当前route 出发地
  next: 放行 什么时候放行, 什么时候不放行
*/
// eslint-disable-next-line consistent-return
// router.beforeEach((to, from, next) => {
//   // isAuth 表示此 route 是否需要权限校验 => meta 元属性的作用
//   // if (to.meta.isAuth) {
//   //   if (localStorage.getItem('school') === 'atguigu') {
//   //     next()
//   //   } else {
//   //     alert('学校名不对, 无权查看!')
//   //   }
//   // } else {
//   //   next()
//   // }
//   if (!to.meta.isAuth) {
//     return next()
//   }
//   if (to.meta.isAuth && localStorage.getItem('school') !== 'atguigu') {
//     return alert('学校名不对, 无权查看!')
//   }
//   next()
// })
// 全局后置路由守卫 => 切换已经完成(成功), 无需 next
router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log('后置', from)
  // 为每一个页签设置正确的 title (鼠标悬停显示)
  document.title = to.meta.title || '硅谷系统'
})
// #endregion
export default router
