<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BS from "@better-scroll/core";
// import Pullup from "@better-scroll/pull-up";
// BS.ues(Pullup);
import BS from "better-scroll";
export default {
  name: "BetterScroll",
  components: {},
  props: {
    pullupload: {
      tybe: Boolean,
      default: false
    },
    probetype: {
      type: Number,
      default: 0
    },
    click: {
      tybe: Boolean,
      default: false
    }
  },
  data() {
    return {
      bs: []
    };
  },
  created() {},
  mounted() {
    //创建better-scroll对象
    this.bs = new BS(".wrapper", {
      click: this.click,
      pullUpLoad: this.pullupload,
      probeType: this.probetype
    });
    this.bs.on("scroll", position => {
      // console.log(position);
      this.$emit("bsscroll", position);
    });
    // 监听上拉事件
    this.bs.on("pullingUp", () => {
      this.$emit("pullingup");
    });
  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    finishpullup() {
      this.bs.finishPullUp();
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
</style>
