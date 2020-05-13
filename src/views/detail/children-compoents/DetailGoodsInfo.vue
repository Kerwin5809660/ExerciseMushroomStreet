<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  components: {},
  props: {
    detailInfo: {
      type: Object,
      num:0,
    }
  },
  data() {
    return {
      imgLenght: 0
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    imageLoad() {
      this.num++
      // if(this.num === this.imgLenght){
        this.$emit("imgload");
      // }
    }
  },
  filter: {},
  computed: {},
  watch: {
    detailInfo() {
      this.imgLenght = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>

<style scoped>
.info-desc {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 20px 10px 10px;
  border-top: 3px #eee solid;
}
.start {
  border: 1px solid #ddd;
  width: 25%;
  flex: 1;
  margin-bottom: 10px;
}
.desc {
  flex: 1;
  height: 15px;
  line-height: 15px;
}
.end {
  border: 1px solid #ddd;
  width: 25%;
  flex: 1;
  margin-top: 10px;
  margin-left: 75%;
}
.info-list img {
  width: 100%;
}
.info-key {
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 5px;
}
</style>
