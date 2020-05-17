<template>
  <div class="list-item">
    <div @click="tabcheck" class="check">

    </div>
  </div>
</template>

<script>
export default {
  name:"",
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
    tabcheck(){
      console.log("....");

    }
  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.check {
  background: #f0f;
  width: 100px;

}
</style>
