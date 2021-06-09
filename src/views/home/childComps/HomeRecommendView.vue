<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommendView",
  components: {},
  props: {
    recommends: {
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
.recommend {
  padding: 10px 0 20px;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>