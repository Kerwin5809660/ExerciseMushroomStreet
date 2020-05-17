<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      @click="activeClick(index)"
      :class="{active:index==currentIndex}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    activeClick(index) {
      // console.log(index);
      this.currentIndex = index;
      this.$emit('tabclick',index)
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background: #fff;

}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: hotpink;
}

.active span {
  border-bottom: hotpink 3px solid;
}
</style>
