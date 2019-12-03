<!-- author: Louis·B·Lu -->
<!-- 波纹按钮组件：结构部分 -->
<template>
  <div class="button-container">
    <button :class="[dtype,'bubble',isBubble?'bubble-effect':'',dsize]" @click="bubble">{{dtext}}</button>
  </div>
</template>

<!-- 逻辑部分 -->
<script>
// import/require from '';
export default {
  components: {},
  props: ["text", "size", "type"],
  data() {
    return {
      dtext: this.text ? this.text : "text sample",
      dsize: "default",
      dtype: this.type ? this.type : "primary",
      isBubble: false,
      timeOuter: null
    };
  },
  // 运算
  computed: {},
  // 监控
  watch: {},
  // 方法
  methods: {
    bubble(e) {
      let self = e.target;
      // solve sync
      if (this.isBubble) {
        clearTimeout(this.timeOuter);
      }
      this.isBubble = true;
      // bubble
      let after = window.getComputedStyle(self, ":after");

      // bubble's radius
      let eHeight = self.clientHeight;
      let eWidth = self.clientWidth;
      let size = Math.max(eWidth, eHeight);

      // bubble's position
      let bubbleX = e.pageX - self.offsetLeft - size / 2;
      let bubbleY = e.pageY - self.offsetTop - size / 2;
      document.styleSheets[0].addRule(
        ".bubble:after",
        `top:${bubbleY}px;left:${bubbleX}px;width:${size}px;height:${size}px`
      );

      this.timeOuter = setTimeout(() => {
        this.isBubble = false;
      }, 500);
    }
  },
  // 创建完成
  created() {},
  // 挂载完成
  mounted() {}
};
</script>

<!-- 样式部分 -->
<style scoped>
.button-container {
  display: inline-block;
}
.bubble {
  outline: none;
  padding: 5px auto;
  border-radius: 3px;
  border: none;
  transition: 0.2s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 3px 0px rgba(100,100,100,0.3)
}
/* type */
.primary {
  background-color: #1e90ff;
  color: #fff;
}
.primary:hover {
  background-color: #3d9eff;
}
.error {
  background-color: #e83015;
  color: #fff;
}
.error:hover {
  background-color: #f15740;
}
.success {
  background-color: #58d825;
  color: #fff;
}
.success:hover {
  background-color: #84e45e;
}
/* size */
.small {
  height: 20px;
  padding: 2px;
  font-size: 0.4rem;
}
.default {
  height: 30px;
  padding: 2px 5px;
  font-size: 0.6rem;
}
.large {
  height: 40px;
  padding: 2px 8px;
  font-size: 0.8rem;
}
/* bubble-effect */
.bubble-effect:after {
  content: " ";
  background-color: rgba(100, 100, 100, 0.2);
  border: none;
  outline: none;
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  animation: bubble 0.4s cubic-bezier(.09,1.38,1,1.19) forwards;
}
@keyframes bubble {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>