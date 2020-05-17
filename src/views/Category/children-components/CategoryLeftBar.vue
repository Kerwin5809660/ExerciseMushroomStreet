<template>
  <div class="bar-info">
    <div class="left-bar">
      <div class="left-info" v-for="(item,index) in leftInfo" :key="index" @click='activeClick(item,index)' :class="{active:index==currentIndex}" >
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryLeftBar",
  components: {},
  props: {
    leftInfo: {
      type: Array,
      default() {
        return [];
      }
    },

  },
  data() {
    return {
      currentIndex:0,
      isTabFixed:false,
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    activeClick(item,index){
      console.log(item);
      this.currentIndex = index;
      this.$emit('tableftclick',item.maitKey)
    },

  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
/* .bar-info {

} */

.left-info {
  height: 40px;
  line-height: 40px;
  background: #F6F6F6;
  text-align: center;
  width: 100px;
  font-size: 15px;

}

.right-info {
  background: #ff0;

}

.active {
  background: #fff;
  color: hotpink;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 11;
}
</style>
