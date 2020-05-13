<template>
  <div class="home-swiper">
    <Swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link"><img :src="item.image" alt=""></a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
  name:"HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners:{
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

</style>
