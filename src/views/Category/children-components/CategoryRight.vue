<template>
  <div class="right-bar">

    <div>
      <div class="small-box left" v-for="(item,index) in rightInfo" :key="index">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </div>
      <div class="tab-main">
        <TabControl
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabclick="tabClick"
        ref="tabContent"
      ></TabControl>
      <GoodsList :goods="goods[currentType].list"></GoodsList>
      </div>
    </div>

  </div>
</template>

<script>
import TabControl from "../../../components/content/tabControl/TabControl";
import { getHomeGoods } from "../../../network/home";
import GoodsList from '../../../components/content/goods/GoodsList'
export default {
  name: "CategoryRight",
  components: {
    TabControl,
    GoodsList,

  },
  props: {
    rightInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      goods: {
        pop: { page: 0, list: [] }, //流行数据
        new: { page: 0, list: [] }, //新款数据
        sell: { page: 0, list: [] } //精选数据
      },
      currentType: "pop", //用于保存当前选中项
    };
  },
  created() {
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
     //goods数据请求
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
        //常规事件处理的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      // this.$refs.tabFixed.currentIndex = index;
      this.$refs.tabContent.currentIndex = index;
    },


  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.right-bar {
  width: 70%;
  padding-top: 10px;
}

.small-box {
  height: 100px;
  margin: 0px 5px;
}

.small-box img {
  width: 60px;
  height: 60px;
}

.small-box p {
  text-align: center;
}

.tab-main {
  float: left;
  width: 100%;
  /* margin-bottom: 100px; */
}

</style>
