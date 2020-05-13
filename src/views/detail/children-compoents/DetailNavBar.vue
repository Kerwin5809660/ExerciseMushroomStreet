<template>
  <div class="nav-bar">
    <Navbar>
      <div slot="left" class="back-image" @click="backHome">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:index == currentIndex}"
          @click="itemClick(index)"
        >
          {{item}}
        </div>
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from '../../../components/common/nav-bar/Navbar'
export default {
  name:"DetailNavBar",
  components: {
      Navbar

  },
  props: {},
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0,
    };
  },
  created() {


  },
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backHome(){
      this.$router.back()
    }
  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.nav-bar {
  background: #fff;
}

.title {
  display: flex;
}

.title .title-item {
  flex:1
}

.back-image img{
  margin-top: 12px;
}

.active {
  color: hotpink;
}
</style>
