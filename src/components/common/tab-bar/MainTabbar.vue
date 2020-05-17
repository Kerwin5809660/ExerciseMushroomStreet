<template>
  <div>
    <Tabbar>
      <TabbarItem path="home" activeColor="red">
        <div class="fa fa-home" slot="tab-icon" ></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">首页</div>
      </TabbarItem>
      <TabbarItem path="categroy" activeColor="red">
        <div class="fa fa-home" slot="tab-icon" ></div>
        <div class="fa fa-star" slot="tab-icon-active" ></div>
        <div slot="tab-text">分类</div>
      </TabbarItem>
      <TabbarItem path="cart" activeColor="red">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active" ></div>
        <div slot="tab-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="profile" activeColor="red">
        <div class="fa fa-home" slot="tab-icon" ></div>
        <div class="fa fa-star" slot="tab-icon-active" ></div>
        <div slot="tab-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "./Tabbar";
import TabbarItem from "./Tabbar-item";
export default {
  name:"MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  },
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
@import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";

</style>
