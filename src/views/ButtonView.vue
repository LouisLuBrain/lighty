<!-- author: Louis·B·Lu -->
<!-- 未命名组件：结构部分 -->
<template>
  <div class="l-bg">
    <div class="view-container">
      <Toggle></Toggle>
    </div>
    <div class="view-container">
      <Bubble></Bubble>
    </div>
    <div class="view-container">
      <Round></Round>
      <Round size="large"></Round>
      <Round size="small"></Round>
    </div>
  </div>
</template>

<!-- 逻辑部分 -->

<script>
import Bubble from "../components/lightyUI/Buttons/BubbleButton"
import Toggle from "../components/lightyUI/Buttons/Toggle"
import Round from "../components/lightyUI/Buttons/RoundButton.vue"

export default {
  components: {
    Bubble: Bubble,
    Toggle: Toggle,
    Round: Round
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
