<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">画师通</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <div class="small-title"><p>热门画师</p></div>
    <home-recommend-view :recommends="recommends" />
    <feature-view :list="list" />

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import FeatureView from "./childComps/FeatureView";
// import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [
        {
          id: "01",
          image:
            "https://img2.huashi6.com/images/resource/2018/11/10/h71579152p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          link: "https://www.huashi6.com/hot_2",
        },
        {
          id: "02",
          image:
            "https://img2.huashi6.com/images/resource/2016/08/28/586792h94p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          link: "https://www.huashi6.com/hot_2",
        },
        {
          id: "03",
          image:
            "https://img2.huashi6.com/images/resource/2014/12/12/4751h3108p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          link: "https://www.huashi6.com/hot_2",
        },
        {
          id: "04",
          image:
            "https://img2.huashi6.com/images/resource/2010/07/21/120179h02p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          link: "https://www.huashi6.com/hot_2",
        },
        {
          id: "05",
          image:
            "https://img2.huashi6.com/images/resource/2016/10/07/593446h78p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          link: "https://www.huashi6.com/hot_2",
        },
      ],
      recommends: [
        {
          id: "01",
          image:
            "https://img2.huashi6.com/images/resource/2018/03/25/678985h42p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          title: "torino",
        },
        {
          id: "02",
          image:
            "https://img2.huashi6.com/images/resource/2014/04/25/4308497h5p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          title: "比利和海胆君",
        },
        {
          id: "03",
          image:
            "https://img2.huashi6.com/images/resource/2016/06/21/5h7512257p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          title: "Renian",
        },
        {
          id: "04",
          image:
            "https://img2.huashi6.com/images/resource/2015/09/18/525804h86p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
          title: "和武はざの",
        },
      ],
      list: [
        {
          id: "01",
          image:
            "https://img2.huashi6.com/images/resource/2017/08/31/6h4702785p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
        },
        {
          id: "02",
          image:
            "https://img2.huashi6.com/images/resource/2010/04/19/h10113512p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
        },
        {
          id: "03",
          image:
            "https://img2.huashi6.com/images/resource/2015/01/24/4h8337185p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
        },
        {
          id: "04",
          image:
            "https://img2.huashi6.com/images/resource/2016/03/02/5529448h7p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
        },
        {
          id: "05",
          image:
            "https://img2.huashi6.com/images/resource/2019/01/03/7247h0172p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
        },
        {
          id: "06",
          image:
            "https://img2.huashi6.com/images/resource/2019/01/24/726654h14p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
        },
      ],
    };
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
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
  },
  props: {},
};
</script>
<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: seashell;


  position:fixed;
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
  height: 220px;
}
.small-title {
  text-align: center;
  line-height: 25px;
  background-color: rgb(255, 129, 152);
  border-radius: 10px;
  color: white;
}
</style>