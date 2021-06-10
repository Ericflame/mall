<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  components: {},
  props: {},
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      taps:true
    })
  },
  data() {
    return {
      scroll:null
    };
  },
};
</script>
<style>
</style>