<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div>
        <span class="icon service"></span>
        <span class="text">客服</span>
      </div>
      <div>
        <span class="icon shop"></span>
        <span class="text">店铺</span>
      </div>
      <div>
        <span class="icon select"></span>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100% ;
  background: #fff;
  height: 60px;
  text-align: center;
  display: flex;
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item div {
  flex: 1;

}

.bar-item div .text {
  font-size: 13px;
}

.bar-left {
  padding-top: 10px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto 2px;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -99px;
}

.bar-left .select {
  background-position: 0 -149px;

}

.bar-right {
  line-height: 60px;
  font-size: 14px;

}

.bar-right .cart {
  background: #ffe818;
}

.bar-right .buy {
  background: #ff6799;
  color: #fff;
}
</style>
