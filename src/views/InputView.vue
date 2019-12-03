<!-- author: Louis·B·Lu -->
<!-- 未命名组件：结构部分 -->
<template>
  <div class="l-bg">
    <div class="view-container">
      <SearchBar></SearchBar>
    </div>
  </div>
</template>

<!-- 逻辑部分 -->

<script>
import SearchBar from "../components/lightyUI/Inputs/SearchBar"
export default {
  components: {
    SearchBar: SearchBar
  },
  data() {
    return {}
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
.view-container {
  margin: 15px 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.view-container:hover {
  box-shadow: 1px 1px 5px 1px rgba(100, 100, 100, 0.3);
}
</style>
