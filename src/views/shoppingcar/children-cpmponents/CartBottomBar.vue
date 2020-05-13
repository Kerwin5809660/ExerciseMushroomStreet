<template>
  <div class="bottom-bar">
    <div class="all-checked left">
      <CheckedButton />
    </div>
    <div class="bottom-info left">
      <span class="all-ch">全选</span>
      <span class="all-price">总价:￥{{allPrice}}</span>
      <span class="right buy-end">去结算({{cartCont}})</span>
    </div>
  </div>
</template>

<script>
import CheckedButton from "./CheckedButton";

import { mapGetters } from "vuex" ;
export default {
  name: "CartBottomBar",
  components: {
    CheckedButton
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {
    ...mapGetters(["cartList"]),
    allPrice() {
      return 100;
    },
    cartCont() {
      return 1;
    }
  },
  watch: {}
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 44px;
  background: #ddd;
  position: fixed;
  bottom: 50px;
  left: 0px;
  /* font-size: 14px; */
}

.all-checked {
  position: relative;
  width: 10%;
  padding-left: 10px;
  top: 12px;
}

.bottom-info {
  width: 90%;
}

span {
  line-height: 44px;
}

.all-ch {
  margin-right: 20px;
  font-size: 14px;

}

.active {
  background: hotpink;
  border: 2px solid hotpink;
}

.all-price {
  font-size: 14px;
}

.buy-end {
  width: 100px;
  height: 44px;
  background: #ff4500;
  color: #fff;
  padding: 0px 10px;
  text-align: center;
}
</style>
