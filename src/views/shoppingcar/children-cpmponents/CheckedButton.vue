<template>
  <div class="click-buttom" :class="{active:ischeck}" @click="checkClick">
    <img src="../../../assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "CheckedButton",
  components: {},
  props: {
    ischeck:Boolean
  },
  methods:{
    checkClick(){
      this.$emit('checkClick')
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
  filter: {},

  watch: {}
};
</script>

<style scoped>
.click-buttom {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #ccc;
  background: #fff;
}

.active {
  background: hotpink;
  border: 2px solid hotpink;
}
</style>
