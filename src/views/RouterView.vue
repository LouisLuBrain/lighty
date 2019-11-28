<!-- author: Louis·B·Lu -->
<!-- 路由视图组件：结构部分 -->
<template>
  <div>
    <Menu class="menu"></Menu>
    <div class="view">
      <div class="view-container">
        <router-view name="submain"></router-view>
      </div>
    </div>
  </div>
</template>

<!-- 逻辑部分 -->
<script>
// import/require from '';
import Menu from "./Menu";
export default {
  components: { Menu: Menu },
  data() {
    return {};
  },
  // 运算
  computed: {},
  // 监控
  watch: {},
  // 方法
  methods: {},
  // 创建完成
  created() {},
  // 挂载完成
  mounted() {}
};
</script>

<!-- 样式部分 -->
<style scoped>
.menu {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
}
.view {
  width: auto;
  height: auto;
  margin: 0px 20px 50px 150px;
  padding-top: 20px;
}
</style>
