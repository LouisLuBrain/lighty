<!-- author: Louis·B·Lu -->
<!-- 切换开关组件：结构部分 -->
<template>
  <div class="switch_container">
    <input id="switch" type="checkbox" class="switch" />
    <label for="switch" class="switch_label"></label>
  </div>
</template>

<!-- 逻辑部分 -->
<script>
// import/require from '';

export default {
  components: {},
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
/*开关的大小*/
.switch_container {
  height: 24px;
  width: 42px;
}
/*设置checkbox不显示*/
.switch {
  display: none;
}
/*设置label标签为椭圆状*/
label.switch_label {
  display: block;
  background-color: #eeeeee;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: 25px;
  box-shadow: inset 0px 0px 2px 0px rgba(200, 200, 200, 0.5);
}
label.switch_label:before {
  content: "";
  position: relative;
  display: inline-block;
  margin: 3px;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  background-color: white;
  opacity: 1;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
}
/*选中样式*/
#switch:checked ~ label:before {
  transition: 0.3s ease-out;
  transform: translateX(18px);
}
/*选中后label的背景色改变*/
#switch:checked ~ label {
  transition: 0.3s 0.2s;
  background-color: dodgerblue;
}
</style>