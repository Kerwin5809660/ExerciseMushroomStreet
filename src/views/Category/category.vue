<template>
  <div id="category">
    <Navbar class="nav-bar">
      <div slot="center">商品分类</div>
    </Navbar>
    <BetterScroll :click="true" :pullupload="true" :probetype="3"
      ref="scroll" class="better-scroll"  @bsscroll='categoryScroll' 
    >
    <div class="main-category">
      <CategoryLeftBar :leftInfo="cateLeft" @tableftclick="tableftclick" class="category-left" />
      <CategoryRight :rightInfo='cateRight' class="category-right" />
    </div>
    </BetterScroll>
    <div id="topShow" ref="topShow" @click="backTop">
      <BackTop></BackTop>
    </div>



  </div>
</template>

<script>
//公共组件
import Navbar from "../../components/common/nav-bar/Navbar";
//子组件
import CategoryLeftBar from "./children-components/CategoryLeftBar";
import CategoryRight from "./children-components/CategoryRight";
import {
  getCategoryLeftdata,
  getCategoryRightdata
} from "../../network/category";
import BetterScroll from '../../components/common/better-scroll/BetterScroll'
import BackTop from '../../components/content/back-top/BackTop'
export default {
  name: "Category",
  components: {
    Navbar,
    CategoryLeftBar,
    CategoryRight,
    getCategoryLeftdata,
    BetterScroll,
    BackTop

  },
  props: {},
  data() {
    return {
      subc: "3627",
      cateLeft: [],
      cateRight: []
    };
      // isTabFixed: false
    // isShowTop:false
    getHomeGoods:{}
  },
  created() {
    this.getCategoryLeftdata();
    getCategoryLeftdata();
    this.tableftclick(this.subc);
  },
  mounted() {},
  activited() {},
  update() {},

  beforeRouteUpdate() {},
  methods: {
    //获取数据
    getCategoryLeftdata() {
      getCategoryLeftdata(this.subc).then(res => {
        // console.log(res.data.category.list);
        this.cateLeft = res.data.category.list;
      });
    },
    getCategoryRightdata(subc){
      getCategoryRightdata(this.subc).then(res => {
        // console.log(this.subc);
        this.cateRight = res.data.list
      })
    },

    tableftclick(item) {
      this.subc = item;
      // console.log(this.subc);
      this.getCategoryRightdata(this.subc)
    },

        //home滚动完全加载事件
    categoryScroll(position){

      if(position.y < -800){
        this.$refs.topShow.style.opacity = 1
      }else{
        this.$refs.topShow.style.opacity = 0
      }
    },
    backTop(){
      this.$refs.scroll.bs.scrollTo(0,0,3000)
    },




  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
  #category {
    height: 100vh;
  }

.nav-bar {
  background: hotpink;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.main-category {
  display: flex;
}

.better-scroll {
  height: calc(100% - 94px);
  overflow: hidden;
}

#topShow {
  opacity: 0;
}


</style>
