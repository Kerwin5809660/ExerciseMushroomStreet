<template>
  <div class="tab-list" @click="listClick" :style="styleColor">
    <div v-if="!isActive"><slot name="tab-icon"></slot></div>
    <div v-else><slot name="tab-icon-active"></slot></div>
    <div><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Tabbar-item",
  components: {},
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive:true
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    listClick(){
      this.$router.push(this.path)

    }
  },
  filter: {},
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1

    },
    styleColor(){
      return this.isActive ? {color:this.activeColor}: {}
    }
  },
  watch: {}
};
</script>

<style scoped>
.tab-list .fa {
  font-size: 22px;
  margin-top: 3px;
}

.tab-list {
  flex: 1;
  text-align: center;
}
</style>
