<template>
  <div class="container">
    <Category title="游戏" />
    <!-- 父组件模板中拿到 Category 作用域中的数据进行个性化展示 -->
    <Category title="游戏">
      <!-- 老写法: slot="xxx" slot-scope={} -->
      <template slot="default" slot-scope="{ games }">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>

      <!-- 默认插槽, slot="default" 可以省略 -->
      <template slot-scope="{ games }">
        <h4 v-for="(g, index) in games" :key="index">
          {{ g }}
        </h4>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 新写法, 默认插槽 + 自定义插槽 v-slot:default="{}" 或者 v-slot="{}" -->
      <template v-slot:default="{ games }">
        <h4 v-for="(g, index) in games" :key="index">
          {{ g }}
        </h4>
      </template>
      <template v-slot="{ games }">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category },
}
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
