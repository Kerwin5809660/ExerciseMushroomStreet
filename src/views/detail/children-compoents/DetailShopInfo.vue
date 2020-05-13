<template>
  <div class="shop-info">
    <!-- 店铺名称 -->
    <div class="shop-top">
      <img :src="shop.shopLogo" alt />
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <!-- 店铺详情 -->
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.cSells | sellsFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-all">
          <div class="all-count">{{shop.cGoods}}</div>
          <div class="all-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.score}}</td>
            <td>{{item.isBetter ?"高":"低"}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  components: {},
  props: {
    shop: {
      type: Object
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
  methods: {},
  filters: {
    sellsFilter(value) {
      if (value < 10000) {
        return value;
      }
      return (value / 10000).toFixed(1) + "万";
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped>
.shop-info {
  border-top: 3px #eee solid;
  padding: 20px 5px;
}

.shop-top {
  display: flex;
  margin-bottom: 10px;
}

.shop-top img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.shop-title {
  font-size: 15px;
  line-height: 30px;
}

.shop-middle {
  display: flex;

}

.shop-middle-left {
  flex: 1;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  width: 50%;
  text-align: center;
  margin: 20px;
  border-right: 1px solid #ccc;
}

.shop-middle-right {
  flex: 1;
  font-size: 14px;
  font-weight: bold;
}

.shop-middle-right tr {
  height: 20px;
  line-height: 20px;

}

.shop-middle-right tr td {
  padding-left: 10px;

}


.info-sells {
  flex: 1;
}

.info-all {
  flex: 1;
}

.sells-text {
  font-size: 12px;
  margin-top: 10px;

}

.all-text {
  font-size: 12px;
  margin-top: 10px;

}

.shop-bottom {
  width: 100%;
}

.enter-shop {
  width: 40%;
  background: #EBEFF2;
  border-radius: 10px;
  margin-left: 30%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;

}

</style>
