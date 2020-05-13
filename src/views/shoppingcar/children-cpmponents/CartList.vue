<template>
  <div class="cart-list">
    <CartListItem v-for="(item,index) in cartList" :key="index" :item='item'/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import {mapGetters} from 'vuex'
export default {
  name:"CartList",
  components: {
    CartListItem
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
    ...mapGetters([
      'cartList'
    ])
  },
  watch: {},
};
</script>

<style scoped>

</style>
