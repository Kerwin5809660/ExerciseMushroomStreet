<template>
    <Swiper class="swiper-image">
      <SwiperItem v-for="item in topImages" :key="item" >
        <img :src="item" alt="" class="top-images">
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
  name:"DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages:{
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
  created() {

  },
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
.swiper-image {
  height: 300px;
  overflow: hidden;
}

.top-images {
  width: 100%;
}
</style>
