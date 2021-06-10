<template>
  <div class="feature">
    <div class="feature-item" v-for="item in list" :key="item.id">
        <img :src="item.image" v-image-preview alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "FeatureView",
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.feature {
  padding: 10px 0 10px 9px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.feature-item {
  flex: 0 33%;
  box-sizing: border-box;
}
.feature-item img {
  width: 120px;
  height: 90px;
}
.vue-directive-image-previewer-img{
  min-width: 100px;
  min-height: 100px;
  transition: all 0ms ease 0ms;
  z-index: 9999;
}
</style>