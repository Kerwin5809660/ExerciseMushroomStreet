<template>
  <div class="list-item">
    <div class="item-buttom">
    </div>
    <div class="item-img">
      <img :src="item.img" alt />
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述:{{item.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{item.price}}</div>
        <div class="item-count right">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  components: {
    CheckedButton
  },
  props: {
    item: Object
  },
  data(){
    return {}
  },

  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    changeChecked(){

      this.$store.commit('changeCheck',this.item)
      // this.ischeck = !this.ischeck
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.list-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px #ccc solid;
}

.item-buttom {
  width: 24%;
  position: relative;
  left: 0px;
  top: 36px;
}

.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}

.item-info {
  font-size: 18px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

.item-bottom {
  margin-top: 10px;
}

.item-bottom .item-price {
  color: #ff4500;
}
</style>
