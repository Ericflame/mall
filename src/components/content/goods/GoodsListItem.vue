<template>
  <div class="goods-item">
    <img :src="goodsItem.image" 
    @load="imageLoad" 
    v-image-preview alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span>{{ goodsItem.username }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  components: {},
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.goods-item {
  background-color: rgb(244, 244, 244);
  margin-top: 20px;
  padding-bottom: 40px;
  position: relative;
  width: 47%;
  margin-right: 5px;
  margin-left: 5px;
  border: 1px solid white;
}
.goods-item:hover {
  box-shadow: 5px 5px 4px #888888;
  box-sizing: border-box;
}
.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.vue-directive-image-previewer-img {
  min-width: 100px;
  min-height: 100px;
  transition: all 0ms ease 0ms;
}
</style>