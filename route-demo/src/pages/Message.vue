<template>
  <div>
    <!-- 导航区 -->
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!--
          跳转路由携带 query 参数, to 的字符串写法 query 参数，以 ？开始
          query 参数, 无需修改 route 中的配置, 在 路由规则 中无法体现该路由规则使用了 query 参数
          string 中包含 data 中的变量 使用 :to + ``
        -->
        <!--
          <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
          {{ m.title }}
        </router-link>
        -->

        <!-- 跳转路由携带 query 参数, to 的对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <!-- 使用 name 指定 路由对应的组件, 简化写法。 -->
        <!--
          <router-link
          :to="{
            name: 'Detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        -->

        <!-- 携带 params 参数 字符串写法 -->
        <!-- params 参数, 需要修改 route 规则 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
          {{ m.title }}
        </router-link> -->
        <!-- 携带 params 参数 对象写法 必须使用 name 不能使用 path -->
        <router-link
          :to="{
            name: 'Detail',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <!--
          编程式路由导航
          应用场景 (用户点击没有点击)
            自动跳转
            不能使用 a 标签的场合
         -->
        <button @click="pushShow(m)">push 查看</button>
        <button @click="replaceShow(m)">replace 查看</button>
        &nbsp;&nbsp;
      </li>
    </ul>
    <hr />
    <!-- 展示区 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' },
      ],
    }
  },
  methods: {
    // 编程式路由导航, 不适用 router-view
    pushShow(m) {
      this.$router.push({
        // params 必须搭配 name 不能使用 path
        name: 'Detail',
        params: {
          id: m.id,
          title: m.title,
        },
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'Detail',
        params: {
          id: m.id,
          title: m.title,
        },
      })
    },
  },
  // mounted() {
  //   console.log(this.$route)
  // },
}
</script>
<style scoped></style>
