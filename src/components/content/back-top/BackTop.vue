<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:"BackTop",
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
.back-top {
  position: fixed;
  bottom: 55px;
  right: 20px;
  z-index: 100;
}

.back-top img {
  width: 50px;
}
</style>
