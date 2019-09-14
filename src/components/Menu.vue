<!-- author: Louis·B·Lu -->
<!-- 菜单组件：结构部分 -->
<template>
  <nav class="left nav">
    <MenuItem path="/toggle" tag="切换开关"></MenuItem>
    <MenuItem path="/bubble" tag="波纹按钮"></MenuItem>
    <MenuItem path="/b" tag="文本气泡框"></MenuItem>
    <MenuItem path="/c" tag="下拉列表"></MenuItem>
    <MenuItem path="/d" tag="加载条"></MenuItem>
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
    return {};
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
  height: 100%;
  width: 120px;
  display: flex;
  border-right: 2px solid #dddddd;
  flex-direction: column;
  /* box-shadow: 1px 0px 2px 0px rgba(30,144,255,0.5); */
}
</style>
