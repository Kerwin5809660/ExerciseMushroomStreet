<template>
  <div id="profile">
    <Navbar class="nav-bar">
      <div slot="center">商城</div>
    </Navbar>
    <ProfileLogin />
    <ProfileBalance />
    <ProfileShopping/>
    <ProfilCar />
  </div>
</template>

<script>
import Navbar from '../../components/common/nav-bar/Navbar'
import ProfileLogin from './children-components/ProfileLogin'
import ProfileBalance from './children-components/ProfileBalance'
import ProfileShopping from './children-components/ProfileShopping'
import ProfilCar from './children-components/ProfilCar'
export default {
  name:"Profile",
  components: {
    Navbar,
    ProfileLogin,
    ProfileBalance,
    ProfileShopping,
    ProfilCar
  },
  props: {

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
.nav-bar {
  background: #FF8197;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
</style>
