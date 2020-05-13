<template>
  <div class="home-recommend">
    <div v-for="item in recommend" :key="item.title" class="recommend-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeRecommend",
  components: {},
  props: {
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
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
.home-recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;
  border-bottom: 7px solid #ddd;
  padding: 10px 0px 20px;
}

.recommend-item {
  flex:1;
}

.recommend-item img {
  width: 80px;
  margin-bottom: 10px;
}
</style>
