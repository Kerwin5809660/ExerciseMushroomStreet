<template>
  <div class="car">
     <div class="my-car">
      <img src="../../../assets/img/profile/my-shoppingcar.png" alt=""><p class="bor-btm">我的消息</p>
    </div>
    <div class="mall">
      <img src="../../../assets/img/profile/app.png" alt=""><p>积分商城</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfilCar",
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
.car {
  height: 100px;
  color: #666666;
  font-size: 15px;
}

.car div {
  display: flex;
}


.car div img {
  width: 35px;
  height: 35px;
  padding: 6px;
  margin-left: 15px;
  margin-top: 5px;

}

.car div p {
  height: 40px;
  flex: 1;
  padding-top: 10px;
  margin-left: 10px;
}

.bor-btm {
  border-bottom: 1px #ddd solid;

}
</style>
