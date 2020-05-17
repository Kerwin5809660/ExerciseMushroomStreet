<template>
  <div class="balance">
    <div>
      <span class="num">0.00</span><span>元</span>
      <p>我的余额</p>
    </div>
    <div>
      <span class="num">0</span><span>个</span>
      <p>我的优惠</p>
    </div>
    <div>
      <span class="num">0</span><span>分</span>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfileBalance",
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
.balance {
  display: flex;
  border-bottom: 15px solid #F2F2F2;
  color: #666666;
  height: 100px;
  line-height: 25px;
  text-align: center;
}

.balance div {
  flex: 1;
  padding-top: 12px;
}

.balance div:nth-of-type(2){
  /* background: #FF5F3F; */
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.num {
  color: #FF5F3F;
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
}


</style>
