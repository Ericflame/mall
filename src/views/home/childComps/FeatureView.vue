<template>
  <div class="feature">
    <div class="feature-item" v-for="item in list" :key="item.id">
      <a href="item.image">
        <img :src="item.image" alt="" />
      </a>
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
  padding: 10px 0 20px;
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
</style>