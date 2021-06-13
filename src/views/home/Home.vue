<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">画师通</div></nav-bar>
    <tab-control
        ref="tabControl1"
        :titles="['热门', '新作', '榜单']"
        @tabClick="tabClick"
        class="tab-control"
        v-show="isTabFixed"
      />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <div class="small-title"><p>热门画师</p></div>
      <home-recommend-view :recommends="recommends" />
      <feature-view :list="list" />
      <tab-control
        ref="tabControl2"
        :titles="['热门', '新作', '榜单']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import FeatureView from "./childComps/FeatureView";
//公共
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { banners, recommends, list, goods } from "common/index";
import { debounce } from "common/utils";

export default {
  name: "Home",
  data() {
    return {
      banners,
      recommends,
      list,
      goods,
      isShowBackTop: false,
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  mounted() {
    //图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "news";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      //判断backtop是否显示
      this.isShowBackTop = -position.y > 1000;

      //决定tabcontrol是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // getHomeGoods() {
    //   // const page = this.goods[this.currentType.page]+1
    //   // const newlist = this.goods[this.currentType].page = page
    //   this.goods[this.currentType].list = [...this.goods[this.currentType].list,...this.goods['news'].list]
    //   this.$refs.scroll.finishPullUp()
    // },
    loadMore() {
      // this.getHomeGoods()
      console.log("上拉加载更多");
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      //获取tabControl的offsetTop
      console.log(this.$refs.tabControl2.$el.offsetTop);
    },
  },

  //接口无法使用，自己找资源做静态网页/(ㄒoㄒ)/~~
  /*  created() {
    //请求多个数据
    getHomeMultidata().then((value) => {
      console.log(value)
      // this.result = value
      // this.banners = value.data.banner.list
      // this.recommends = value.data.recommend.list
    });
  }, */
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  props: {},
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: seashell;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.banners {
  width: 400px;
  height: 100%;
}
.swipers {
  width: 100%;
  height: 200px;
}
.small-title {
  text-align: center;
  line-height: 25px;
  background-color: rgb(255, 129, 152);
  border-radius: 10px;
  color: white;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  position: relative;
  z-index: 9;
}

</style>