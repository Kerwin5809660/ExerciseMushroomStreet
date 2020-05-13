<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name:"Tabbar",
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
#tab-bar {
  position: fixed;
  width: 100%;
  left: 0px;
  bottom: 0px;
  display: flex;
  font-size: 16px;
  background: #eee;
  height: 50px;
}

</style>
