<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.id" :goods-item="item" />
    <!-- {{goods}} -->
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
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
.goods {
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  /* flex-direction:column; */
  justify-content: space-around;
  align-items:flex-start;
}
</style>