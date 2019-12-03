<!-- author: Louis·B·Lu -->
<!-- 未命名组件：结构部分 -->
<template>
  <div class="searchbar-container">
    <input type="text" v-model="keywords" placeholder="type to search" :class="['keyword-input','search-input-on']"/>
    <a :class="['icon','fa','fa-search','search-icon-on']" @click="search"></a>
  </div>
</template>

<!-- 逻辑部分 -->
<script>
// import/require from '';

export default {
  components: {},
  data() {
    return {
      isSearch: false,
      keywords:''
    }
  },
// 运算
computed: {},
// 监控
watch: {},
// 方法
methods: {
  search() {
    // search API
  }
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
.searchbar-container{
  overflow: hidden;
  background: dodgerblue;
  border-radius: 20px;
  padding: 2px;
  display: inline-block;
}
.keyword-input{
  outline: none;
  border: none;
  color: #fff;
  box-sizing: border-box;
  background-color: transparent;
  height: 30px;
  width: 0px;
  font-size: 16px;
  padding: 2px 0px;
  margin: 2px 0px 2px 0px;
  transition: 0.3s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
input.keyword-input::-webkit-input-placeholder{
  color: #ccc;
  font-size: 16px;
}
.icon{
  padding: 0px;
  margin: 2px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50%;
  color: #fff;
  background-color: transparent;
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.searchbar-container:hover > .search-icon-on{
  transform: rotateZ(90deg);
  color: dodgerblue;
  background-color: #fff;
}
.searchbar-container:hover > .search-input-on{
  width: 200px;
  margin-left: 4px;
}
</style>