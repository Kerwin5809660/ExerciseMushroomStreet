<template>
  <div class="ProfileLogin">
    <img src="../../../assets/img/profile/head.png" alt="" class="head">
    <div class="log-in">
      <p>登录/注册</p>
      <div class="cell-phone">
        <img src="../../../assets/img/profile/cellphone.png" alt=""><span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="log-left">
      <img src="../../../assets/img/profile/gt.png" alt="" class="gt">
    </div>
  </div>

</template>

<script>
export default {
  name:"ProfileLogin",
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
.ProfileLogin {
  background: #FF8197;
  height: 20vh;
  display: flex;
  padding: 20px 0px 20px 10px;
  color: #fff;
  font-size: 15px;

}

.head {
  width: 20%;

}

.log-in {
  margin-top: 15px;
  margin-left: 10px;
}

.cell-phone {
  margin-top: 5px;
}

.log-in img {
  width: 15%;

}

.log-in span {
  height: 15%;
  margin-left: 5px;
  vertical-align:top;
}

.log-left {
  margin-left: 50px;
  font-size: 18px;
  margin-top: 20px;
}

.gt {
  width: 15px;
}
</style>
