<!-- author: Louis·B·Lu -->
<!-- 未命名组件：结构部分 -->
<template>
  <button :class="[dsize,'round-button']">
  </button>
</template>

<!-- 逻辑部分 -->
<script>
// import/require from '';

export default {
components: {},
props:[
  'size'
],
data() {
  return {
    dsize: this.size ? this.size : 'default'
  }
},
// 运算
computed: {},
// 监控
watch: {},
// 方法
methods: {

},
// 创建完成
created() {

},
// 挂载完成
mounted() {

},
}
</script>

<!-- 样式部分 -->
<style scoped>
.round-button{
  border-radius: 50%;
  border: none;
  background-color: dodgerblue;
  color:#fff;
  outline: none;
  cursor: pointer;
}
.round-button:hover{
  box-shadow: 0px 0px 8px 0px rgba(1, 82, 163, 0.4);
}
/*size*/
.default{
  width: 30px;
  height: 30px;
}
.small{
  width: 20px;
  height: 20px;
}
.large{
  width: 50px;
  height: 50px;
}
</style>