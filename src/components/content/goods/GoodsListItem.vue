<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="getImage" alt />
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  components: {},
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    itemClick(){
      // console.log(this.goodsitem);
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  },
  filter: {},
  computed: {
    getImage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  watch: {}
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  position: relative;
  padding-bottom: 20px;
}

.goods-list-item img {
  width: 100%;
}

.good-info {
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0px;
  width: 100%;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;

}

.goods-info .price {
  color: #f00;
  margin-right: 20px ;
}

.goods-info .cfav {
  position: relative;
}

.goods-info .cfav::before {
  position: absolute;
  content: "";
  width: 14px;
  height: 14px;
  left: -14px;
  top: 0px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
