<!-- author: Louis·B·Lu -->
<!-- 菜单项组件：结构部分 -->
<template>
  <div>
    <router-link :class="['link']" :to="dpath">{{dtag}}</router-link>
  </div>
</template>

<!-- 逻辑部分 -->
<script>
// import/require from '';

export default {
  components: {},
  props: ["tag", "path"],
  data() {
    return {
      dpath: this.path,
      dtag: this.tag
    };
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
.link {
  margin: 5px auto;
  text-decoration: none;
  display: inline-block;
  width: calc(100% - 20px);
  padding: 10px 0px 10px 20px;
  text-align: start;
  position: relative;
}
.link:after {
  content: "";
  position: absolute;
  display: inline-block;
  height: 1px;
  width: 20%;
  background-color: dodgerblue;
  right: 50%;
  opacity: 0;
  bottom: 5px;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center bottom;
}
.link:link,
.link:visited,
.link:active {
  color: #999;
  font-size: 14px;
}
.link:hover {
  background-color: #f3f5f5;
}
.link:hover::after {
  opacity: 1;
  width: 80%;
  right: 10%;
}
.router-link-exact-active:after {
  opacity: 1;
  width: 80%;
  right: 10%;
}
</style>