<template>
  <swiper class="swipers">
    <swiper-item :key="item.id" v-for="item in banners">
      <a :href="item.link">
        <img class="banners" :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwipe",
  components: {
    SwiperItem,
    Swiper,
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true
      }
    },
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
};
</script>
<style>
</style>