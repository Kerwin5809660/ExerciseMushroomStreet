<template>
  <div class="shopping">
    <div class="message">
      <img src="../../../assets/img/profile/message.png" alt=""><p>我的消息</p>
    </div>
    <div class="mall">
      <img src="../../../assets/img/profile/mall.png" alt=""><p>积分商城</p>
    </div>
    <div class="vip">
      <img src="../../../assets/img/profile/vip.png" alt=""><p>会员卡</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfileShopping",
  components: {},
  props: {},
  data() {
    return {

    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {

  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.shopping {
  border-bottom: 15px solid #F2F2F2;
  height: 150px;
  color: #666666;
  font-size: 15px;
}

.shopping div {
  display: flex;
}


.shopping div img {
  width: 35px;
  height: 35px;
  padding: 6px;
  margin-left: 15px;
  margin-top: 5px;

}

.shopping div p {
  height: 40px;
  border-bottom: 1px #ddd solid;
  flex: 1;
  padding-top: 10px;
  margin-left: 10px;
}
</style>
