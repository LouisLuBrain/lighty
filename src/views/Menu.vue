<!-- author: Louis·B·Lu -->
<!-- 菜单组件：结构部分 -->
<template>
  <nav class="left nav">
    <MenuItem path="/Buttons" tag="按钮"></MenuItem>
    <MenuItem path="/Inputs" tag="输入框"></MenuItem>
  </nav>
</template>

<!-- 逻辑部分 -->

<script>
// import/require from '';
import MenuItem from './MenuItem'
export default {
  components: {
      MenuItem:MenuItem
  },
  data() {
    return {}
  },
  // 运算
  computed: {},
  // 监控
  watch: {},
  // 方法
  methods: {
  },
  // 创建完成
  created() {},
  // 挂载完成
  mounted() {}
};
</script>

<!-- 样式部分 -->

<style scoped>
.nav {
  margin-top: 20px;
  height: auto;
  min-height: 600px;
  width: 120px;
  display: flex;
  border-radius: 0px 5px 5px 0px;
  flex-direction: column;
  box-shadow: 2px 2px 5px 1px rgba(43, 71, 99, 0.3);
}
</style>
