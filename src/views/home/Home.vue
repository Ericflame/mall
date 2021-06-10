<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">画师通</div></nav-bar>

    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <div class="small-title"><p>热门画师</p></div>
      <home-recommend-view :recommends="recommends" />
      <feature-view :list="list" /><!--  -->
      <tab-control
        class="tab-control"
        :titles="['热门', '新作', '榜单']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

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
      goods: {
        pop: {
          page: 0,
          list: [
            {
              id: 1,
              title: "直到电车来",
              like: "",
              username: "フカヒレ＠3日目西A-01b",
              image:
                "https://img2.huashi6.com/images/resource/2019/07/27/7h5924201p0.png?imageView2/3/q/100/interlace/1/w/566/h/380/format/webp",
            },
            {
              id: 2,
              title: "Shiny ☆ Akko",
              like: "",
              username: "DanGo",
              image:
                "https://img2.huashi6.com/images/resource/2017/03/29/62151h229p0.jpg?imageView2/3/q/100/interlace/1/w/566/h/380/format/webp",
            },
            {
              id: 3,
              title: "",
              like: "",
              username: "appleQ",
              image:
                "https://img2.huashi6.com/images/resource/2020/11/30/860146h54p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 4,
              title: "待ち合わせ",
              like: "",
              username: "きばえ",
              image:
                "https://img2.huashi6.com/images/resource/2021/06/07/90h380978p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 5,
              title: "おこじょがかわいいというだけの話",
              like: "",
              username: "appleQ",
              image:
                "https://img2.huashi6.com/images/resource/2018/12/04/71h961330p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 6,
              title: "森の隠れ家",
              like: "",
              username: "吉武",
              image:
                "https://img2.huashi6.com/images/resource/2020/07/13/8294358h3p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 7,
              title: "あなたはカモねッ！！",
              like: "",
              username: "appleQ",
              image:
                "https://img2.huashi6.com/images/resource/2017/06/15/6339596h7p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 8,
              title: "海風の夢",
              like: "",
              username: "あんべよしろう",
              image:
                "https://img2.huashi6.com/images/resource/2021/05/30/90196h117p0.png?imageView2/3/q/100/interlace/1/w/224/h/285/format/webp",
            },
            {
              id: 9,
              title: "",
              like: "",
              username: "P＠お仕事募集中",
              image:
                "https://img2.huashi6.com/images/resource/2021/02/02/87h484722p0.png?imageView2/3/q/100/interlace/1/w/224/h/285/format/webp",
            },
            {
              id: 10,
              title: "2016",
              like: "",
              username: "Lpip",
              image:
                "https://img2.huashi6.com/images/resource/2016/01/03/54514h501p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 11,
              title: "Black Tea",
              like: "",
              username: "SuperPig",
              image:
                "https://img2.huashi6.com/images/resource/2018/11/26/7184h2228p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 12,
              title: "阿纳斯塔西亚",
              like: "",
              username: "Atha（アサ）",
              image:
                "https://img2.huashi6.com/images/resource/2018/04/20/6830h8684p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 13,
              title: "無題",
              like: "",
              username: "時雨不沢",
              image:
                "https://img2.huashi6.com/images/resource/2018/01/11/h66756800p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 14,
              title: "forget-me-not",
              like: "",
              username: "アシマ",
              image:
                "https://img2.huashi6.com/images/resource/2019/05/19/7479119h9p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 15,
              title: "…………知道吗?",
              like: "",
              username: "村上ゆいち",
              image:
                "https://img2.huashi6.com/images/resource/2009/10/24/h6783532p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 16,
              title: "小晴",
              like: "",
              username: "IKU♥1539",
              image:
                "https://img2.huashi6.com/images/resource/2014/02/19/41h730594p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 17,
              title: "玛丽苏……诶?",
              like: "",
              username: "ミネ@二日目南ア-35ｂ",
              image:
                "https://img2.huashi6.com/images/resource/2009/12/20/7720h220p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp",
            },
            {
              id: 18,
              title: "LOL",
              like: "",
              username: "Lpip",
              image:
                "https://img2.huashi6.com/images/resource/2018/04/18/68h288114p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 19,
              title: "野良神",
              like: "",
              username: "wlop",
              image:
                "https://img2.huashi6.com/images/resource/2015/12/09/53949h261p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 20,
              title: "mercedes",
              like: "",
              username: "ムアン",
              image:
                "https://img2.huashi6.com/images/resource/2016/04/07/562425h26p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 21,
              title: "【100100皮卡丘】喂!",
              like: "",
              username: "チャネ子",
              image:
                "https://img2.huashi6.com/images/resource/2014/11/05/469270h94p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp",
            },
            {
              id: 22,
              title: "LLUSTRATION 2018",
              like: "",
              username: "loundraw",
              image:
                "https://img2.huashi6.com/images/resource/2017/12/13/6626915h9p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 23,
              title: "刘海剪过头了",
              like: "",
              username: "みわべさくら",
              image:
                "https://img2.huashi6.com/images/resource/2019/06/09/7513198h3p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 24,
              title: "2个变成2个!",
              like: "",
              username: "米白粕",
              image:
                "https://img2.huashi6.com/images/resource/2014/02/02/41h352178p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 25,
              title: "圣女贞德",
              like: "",
              username: "Shigure",
              image:
                "https://img2.huashi6.com/images/resource/2017/02/10/6h1367849p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 26,
              title: "告白",
              like: "",
              username: "アシマ",
              image:
                "https://img2.huashi6.com/images/resource/2018/03/31/6799724h7p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 27,
              title: "朗玛什",
              like: "",
              username: "リン☆ユウ＠新刊通販委託中",
              image:
                "https://img2.huashi6.com/images/resource/2018/11/04/h71492280p1.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 28,
              title: "女主角x奥塔",
              like: "",
              username: "リン☆ユウ＠新刊通販委託中",
              image:
                "https://img2.huashi6.com/images/resource/2017/02/16/614776h78p0.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp",
            },
            {
              id: 29,
              title: "KILLA",
              like: "",
              username: "とうげ(touge369)",
              image:
                "https://img2.huashi6.com/images/resource/2010/10/23/140h51475p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 30,
              title: "雾之湖",
              like: "",
              username: "ぢせ",
              image:
                "https://img2.huashi6.com/images/resource/2018/02/18/673h29067p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
          ],
        },
        news: {
          page: 0,
          list: [
            {
              id: 1,
              title: "斯洛凯",
              like: "",
              username: "Lpip",
              image:
                "https://img2.huashi6.com/images/resource/2019/04/01/73h981562p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 2,
              title: "LIPPS",
              like: "",
              username: "シソ3日目西A-36a",
              image:
                "https://img2.huashi6.com/images/resource/2017/06/08/60385h957p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 3,
              title: "羽化",
              like: "",
              username: "めばる",
              image:
                "https://img2.huashi6.com/images/resource/2019/01/24/726654h14p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 4,
              title: "今年也请多多关照!",
              like: "",
              username: "森倉円",
              image:
                "https://img2.huashi6.com/images/resource/2019/01/07/725350h54p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 5,
              title: "传票",
              like: "",
              username: "げみ",
              image:
                "https://img2.huashi6.com/images/resource/2014/08/18/45h433370p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 6,
              title: "～少女前線※log1216～",
              like: "",
              username: "薯子Imoko",
              image:
                "https://img2.huashi6.com/images/resource/2017/12/16/663h14923p1.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 7,
              title: "梅里克利",
              like: "",
              username: "7nu",
              image:
                "https://img2.huashi6.com/images/resource/2018/12/29/7235465h5p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 8,
              title: "威尼斯科洛伊之夜",
              like: "",
              username: "ぺい@3日目南モ28b",
              image:
                "https://img2.huashi6.com/images/resource/2018/11/02/7146383h1p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 9,
              title: "我很喜欢你。",
              like: "",
              username: "ne-on",
              image:
                "https://img2.huashi6.com/images/resource/2017/01/14/60923h109p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 10,
              title: "春天的上学路",
              like: "",
              username: "TAYA",
              image:
                "https://img2.huashi6.com/images/resource/2020/04/04/8054h5476p0.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp",
            },
            {
              id: 11,
              title: "色相環",
              like: "",
              username: "てんどし",
              image:
                "https://img2.huashi6.com/images/resource/2016/02/04/55084h885p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 12,
              title: "レム☆ラム",
              like: "",
              username: "NEWEY",
              image:
                "https://img2.huashi6.com/images/resource/2016/06/07/57273h717p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 13,
              title: "红魔导士新AF",
              like: "",
              username: "ももこ@5/30画集",
              image:
                "https://img2.huashi6.com/images/resource/2019/03/30/73939h373p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 14,
              title: "武装探偵",
              like: "",
              username: "たける",
              image:
                "https://img2.huashi6.com/images/resource/2016/05/31/57151h765p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 15,
              title: "COMITIA112",
              like: "",
              username: "フライ",
              image:
                "https://img2.huashi6.com/images/resource/2015/04/02/49605h885p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 16,
              title: "十岁最强魔导师3",
              like: "",
              username: "フカヒレ＠3日目西A-01b",
              image:
                "https://img2.huashi6.com/images/resource/2017/11/12/658h53035p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 17,
              title: "你的故事",
              like: "",
              username: "loundraw",
              image:
                "https://img2.huashi6.com/images/resource/2017/07/07/h63737968p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 18,
              title: "山色的思念",
              like: "",
              username: "Hiten｜ティア・へ25ab",
              image:
                "https://img2.huashi6.com/images/resource/2018/08/25/6h2423081p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 19,
              title: "デザコンノミネートされました",
              like: "",
              username: "てんどし",
              image:
                "https://img2.huashi6.com/images/resource/2020/12/13/8628131h1p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 20,
              title: "史波拉",
              like: "",
              username: "てんどし",
              image:
                "https://img2.huashi6.com/images/resource/2015/08/20/52h090722p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 21,
              title: "泳衣",
              like: "",
              username: "",
              image:
                "https://img2.huashi6.com/images/resource/2019/11/09/7771h6964p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 22,
              title: "……滨风猫",
              like: "",
              username: "Rosuuri",
              image:
                "https://img2.huashi6.com/images/resource/2015/04/30/50110h405p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 23,
              title: "茶会",
              like: "",
              username: "やすゆき",
              image:
                "https://img2.huashi6.com/images/resource/2017/02/21/6h1560361p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 24,
              title: "终于是星期二了呢!",
              like: "",
              username: "ももこ@5/30画集",
              image:
                "https://img2.huashi6.com/images/resource/2018/09/16/70h719730p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 25,
              title: "不可思议的幻想乡",
              like: "",
              username: "ゆきさめ/3日目西₋A08ａ",
              image:
                "https://img2.huashi6.com/images/resource/2014/01/30/412641h42p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 26,
              title: "紅冬至",
              like: "",
              username: "フカヒレ＠3日目西A-01b",
              image:
                "https://img2.huashi6.com/images/resource/2018/12/27/723h29731p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 27,
              title: "キセキ！",
              like: "",
              username: "幸漫☆BOOTHツイ刀2SET",
              image:
                "https://img2.huashi6.com/images/resource/2012/07/12/285h62963p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 28,
              title: "甘雨",
              like: "",
              username: "ATDAN-",
              image:
                "https://img2.huashi6.com/images/resource/2021/04/18/89h219826p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 29,
              title: "眉毛",
              like: "",
              username: "げみ",
              image:
                "https://img2.huashi6.com/images/resource/2018/03/16/67759h389p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 30,
              title: "女子长刀正义",
              like: "",
              username: "豆",
              image:
                "https://img2.huashi6.com/images/resource/2011/08/17/2110913h5p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
          ],
        },
        sell: {
          page: 0,
          list: [
            {
              id: 1,
              title: "直到电车来",
              like: "",
              username: "フカヒレ＠3日目西A-01b",
              image:
                "https://img2.huashi6.com/images/resource/2019/07/27/7h5924201p0.png?imageView2/3/q/100/interlace/1/w/566/h/380/format/webp",
            },
            {
              id: 2,
              title: "Shiny ☆ Akko",
              like: "",
              username: "DanGo",
              image:
                "https://img2.huashi6.com/images/resource/2017/03/29/62151h229p0.jpg?imageView2/3/q/100/interlace/1/w/566/h/380/format/webp",
            },
            {
              id: 3,
              title: "",
              like: "",
              username: "appleQ",
              image:
                "https://img2.huashi6.com/images/resource/2020/11/30/860146h54p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 4,
              title: "待ち合わせ",
              like: "",
              username: "きばえ",
              image:
                "https://img2.huashi6.com/images/resource/2021/06/07/90h380978p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 5,
              title: "おこじょがかわいいというだけの話",
              like: "",
              username: "appleQ",
              image:
                "https://img2.huashi6.com/images/resource/2018/12/04/71h961330p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 6,
              title: "森の隠れ家",
              like: "",
              username: "吉武",
              image:
                "https://img2.huashi6.com/images/resource/2020/07/13/8294358h3p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 7,
              title: "あなたはカモねッ！！",
              like: "",
              username: "appleQ",
              image:
                "https://img2.huashi6.com/images/resource/2017/06/15/6339596h7p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 8,
              title: "海風の夢",
              like: "",
              username: "あんべよしろう",
              image:
                "https://img2.huashi6.com/images/resource/2021/05/30/90196h117p0.png?imageView2/3/q/100/interlace/1/w/224/h/285/format/webp",
            },
            {
              id: 9,
              title: "",
              like: "",
              username: "P＠お仕事募集中",
              image:
                "https://img2.huashi6.com/images/resource/2021/02/02/87h484722p0.png?imageView2/3/q/100/interlace/1/w/224/h/285/format/webp",
            },
            {
              id: 10,
              title: "2016",
              like: "",
              username: "Lpip",
              image:
                "https://img2.huashi6.com/images/resource/2016/01/03/54514h501p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 11,
              title: "Black Tea",
              like: "",
              username: "SuperPig",
              image:
                "https://img2.huashi6.com/images/resource/2018/11/26/7184h2228p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 12,
              title: "阿纳斯塔西亚",
              like: "",
              username: "Atha（アサ）",
              image:
                "https://img2.huashi6.com/images/resource/2018/04/20/6830h8684p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 13,
              title: "無題",
              like: "",
              username: "時雨不沢",
              image:
                "https://img2.huashi6.com/images/resource/2018/01/11/h66756800p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 14,
              title: "forget-me-not",
              like: "",
              username: "アシマ",
              image:
                "https://img2.huashi6.com/images/resource/2019/05/19/7479119h9p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 15,
              title: "…………知道吗?",
              like: "",
              username: "村上ゆいち",
              image:
                "https://img2.huashi6.com/images/resource/2009/10/24/h6783532p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 16,
              title: "小晴",
              like: "",
              username: "IKU♥1539",
              image:
                "https://img2.huashi6.com/images/resource/2014/02/19/41h730594p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 17,
              title: "玛丽苏……诶?",
              like: "",
              username: "ミネ@二日目南ア-35ｂ",
              image:
                "https://img2.huashi6.com/images/resource/2009/12/20/7720h220p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp",
            },
            {
              id: 18,
              title: "LOL",
              like: "",
              username: "Lpip",
              image:
                "https://img2.huashi6.com/images/resource/2018/04/18/68h288114p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 19,
              title: "野良神",
              like: "",
              username: "wlop",
              image:
                "https://img2.huashi6.com/images/resource/2015/12/09/53949h261p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 20,
              title: "mercedes",
              like: "",
              username: "ムアン",
              image:
                "https://img2.huashi6.com/images/resource/2016/04/07/562425h26p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 21,
              title: "【100100皮卡丘】喂!",
              like: "",
              username: "チャネ子",
              image:
                "https://img2.huashi6.com/images/resource/2014/11/05/469270h94p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp",
            },
            {
              id: 22,
              title: "LLUSTRATION 2018",
              like: "",
              username: "loundraw",
              image:
                "https://img2.huashi6.com/images/resource/2017/12/13/6626915h9p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 23,
              title: "刘海剪过头了",
              like: "",
              username: "みわべさくら",
              image:
                "https://img2.huashi6.com/images/resource/2019/06/09/7513198h3p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 24,
              title: "2个变成2个!",
              like: "",
              username: "米白粕",
              image:
                "https://img2.huashi6.com/images/resource/2014/02/02/41h352178p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 25,
              title: "圣女贞德",
              like: "",
              username: "Shigure",
              image:
                "https://img2.huashi6.com/images/resource/2017/02/10/6h1367849p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 26,
              title: "告白",
              like: "",
              username: "アシマ",
              image:
                "https://img2.huashi6.com/images/resource/2018/03/31/6799724h7p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 27,
              title: "朗玛什",
              like: "",
              username: "リン☆ユウ＠新刊通販委託中",
              image:
                "https://img2.huashi6.com/images/resource/2018/11/04/h71492280p1.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 28,
              title: "女主角x奥塔",
              like: "",
              username: "リン☆ユウ＠新刊通販委託中",
              image:
                "https://img2.huashi6.com/images/resource/2017/02/16/614776h78p0.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp",
            },
            {
              id: 29,
              title: "KILLA",
              like: "",
              username: "とうげ(touge369)",
              image:
                "https://img2.huashi6.com/images/resource/2010/10/23/140h51475p0.jpg?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
            {
              id: 30,
              title: "雾之湖",
              like: "",
              username: "ぢせ",
              image:
                "https://img2.huashi6.com/images/resource/2018/02/18/673h29067p0.png?imageView2/3/q/100/interlace/1/w/448/h/1600/format/webp",
            },
          ],
        },
      },
      currentType: "pop",
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
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
  height: 220px;
}
.small-title {
  text-align: center;
  line-height: 25px;
  background-color: rgb(255, 129, 152);
  border-radius: 10px;
  color: white;
}
.tab-control {
  z-index: 9;
  position: sticky;
  top: 44px;
}
/* .content {
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 51px;
} */
.content{
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>