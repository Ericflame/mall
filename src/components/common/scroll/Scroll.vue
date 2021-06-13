<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      taps: true,
      mouseWheel: true,
      pullUpLoad:this.pullUpLoad
    });
    //监听滚动的位置
    this.scroll.on("scroll", position => this.$emit('scroll',position));
    //监听上拉事件
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
    this.scroll.refresh()
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    //监听滚动的位置
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh
    }
  },
};
</script>
<style>
</style>