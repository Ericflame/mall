<template>
  <div id="app">
    <tab-bar class="tab-bar">
      <tab-bar-item path="/home" activeColor="#391085">
        <img slot="item-icon" src="~assets/img/tabbar/首页.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/首页-选中.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#391085">
        <img slot="item-icon" src="~assets/img/tabbar/分类.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/分类-选中.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#391085">
        <img slot="item-icon" src="~assets/img/tabbar/资讯.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/资讯-选中.png"
          alt=""
        />
        <div slot="item-text">画师/资讯</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#391085">
        <img slot="item-icon" src="~assets/img/tabbar/我的.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/我的-选中.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
  props: [],
  data() {
    return {
      params: "",
    };
  },
};
</script>
<style>
.tab-bar{
  z-index: 10;
}
</style>