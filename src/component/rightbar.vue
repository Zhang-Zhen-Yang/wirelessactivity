/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:31:18 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-24 16:14:19
 */
<template>
  <div id="rightbar">
    <!--{{ type }}
    {{ subActiveIndex }}-->
    <div v-if="itemData" class="scrollbar-overwrite">
      <!--<countDown v-if="type == 'countDown'" :itemData="itemData" :activeIndex="activeIndex" />
      <coupon v-if="type == 'coupon'" :itemData="itemData" :activeIndex="activeIndex" />
      <focusImg v-if="type == 'focusImg'" :itemData="itemData" :activeIndex="activeIndex" />
      <oneRow v-if="type == 'oneRow'" :itemData="itemData" :activeIndex="activeIndex" />
      <oneRowHorizontal v-if="type == 'oneRowHorizontal'" :itemData="itemData" :activeIndex="activeIndex" />
      <poster v-if="type == 'poster'" :itemData="itemData" :activeIndex="activeIndex" />
      <swipe v-if="type == 'swipe'" :itemData="itemData" :activeIndex="activeIndex" />
      <tab v-if="type == 'tab'" :itemData="itemData" :activeIndex="activeIndex" />
      <twoRow v-if="type == 'twoRow'" :itemData="itemData" :activeIndex="activeIndex" />
      <threeRow v-if="type == 'threeRow'" :itemData="itemData" :activeIndex="activeIndex" />
      <hotItem v-if="type == 'hotItem'" :itemData="itemData" :activeIndex="activeIndex" />
      <promotionMeal v-if="type == 'promotionMeal'" :itemData="itemData" :activeIndex="activeIndex" />
      <videoblock v-if="type == 'videoBlock'" :itemData="itemData" :activeIndex="activeIndex" />
      <groupGoods v-if="type == 'groupGoods'" :itemData="itemData" :activeIndex="activeIndex" />
      <marqueeBlock v-if="type == 'marqueeBlock'" :itemData="itemData" :activeIndex="activeIndex" />-->
      <component :is="`I${type}`" :itemData="itemData" :activeIndex="activeIndex" >
      </component>

    </div>
    <div v-else class="scrollbar-overwrite">
      <top></top>
    </div>
  </div>
</template>

<script>
import IcountDown from './content-i-countdown.vue'
import Icoupon from './content-i-coupon.vue'
import IfocusImg from './content-i-focusimg.vue'
import IoneRow from './content-i-onerow.vue'
import IoneRowHorizontal from './content-i-onerowhorizontal.vue'
import Iposter from './content-i-poster.vue'
import Iswipe from './content-i-swipe.vue'
import Itab from './content-i-tab.vue'
import ItwoRow from './content-i-tworow.vue'
import IthreeRow from './content-i-threerow.vue'
import IgroupGoods from './content-i-groupgoods.vue'
import IhotItem from './content-i-hotitem.vue'
import IpromotionMeal from './content-i-promotionmeal.vue'
import IvideoBlock from './content-i-videoblock.vue'
import ImarqueeBlock from './content-i-marqueeblock.vue'
import IcodeBlock from './content-i-codeblock.vue'
import Iwaterfall from './content-i-waterfall.vue'
import Ifavorite from './content-i-favorite.vue'
import IpageBottom from './content-i-pagebottom.vue'
import top from './content-top.vue'
export default {
  name: 'temp',
  components: {
    IcountDown,
    Icoupon,
    IfocusImg,
    IoneRow,
    IoneRowHorizontal,
    Iposter,
    Ifavorite,
    Iswipe,
    Itab,
    ItwoRow,
    IhotItem,
    IpromotionMeal,
    top,
    IvideoBlock,
    IthreeRow,
    IgroupGoods,
    ImarqueeBlock,
    IcodeBlock,
    Iwaterfall,
    IpageBottom
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    activeIndex() {
      return this.$store.state.activeIndex;
    },
    subActiveIndex() {
      return this.$store.state.subActiveIndex;
    },
    itemData() {
      let itemData = null;
      if(this.data && this.data.list && this.data.list[this.activeIndex]) {
        if(this.data.list[this.activeIndex].type == 'tab' && this.subActiveIndex != null) {
          const tabIndex = this.data.list[this.activeIndex].activeIndex;
          itemData = this.data.list[this.activeIndex].list[tabIndex].children[this.subActiveIndex];
        } else {
          itemData = this.data.list[this.activeIndex];
        }
      }
      return itemData;
    },
    type() {
      if(this.itemData) {
        return this.itemData.type;
      }
      return null;
    }
  },
  methods: {

  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  #rightbar{
    position: absolute;
    right: 0;
    height: 100%;
    top: 0;
    width: 640px;
    padding-top: 50px;
  
    // background-color: #cccccc;
    &>div{
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  }
</style>
