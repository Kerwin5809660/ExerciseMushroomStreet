<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <!--       length:'cartLength',  -->
      <div slot="center" >购物车({{length}})</div>
    </NavBar>
    <Bscroll class="content" :click='true'>
      <CartList />
    </Bscroll>
    <CartBottomBar />

  </div>
</template>

<script>
import NavBar from '../../components/common/nav-bar/Navbar'
import  Bscroll from '../../components/common/better-scroll/BetterScroll'

import CartList from './children-cpmponents/CartList'
import CartBottomBar from './children-cpmponents/CartBottomBar'

import {mapGetters} from 'vuex'
export default {
  name:"ShoppingCar",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Bscroll,
    CheckedButton
  },
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
  computed: {
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  },
  watch: {},
};
</script>

<style scoped>
.nav-bar {
  background: hotpink;
  color: #fff;
}

.cart {
  height: 100vh;
}

.content {
  height: calc( 100% - 138px);
}
</style>
