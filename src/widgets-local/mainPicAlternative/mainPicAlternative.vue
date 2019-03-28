/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:42:21 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:42:21 
 */
// 供替换的主图
<template>
  <div class="main-pic-alternative">
    <div class="alternative-title">更换主图</div>
    <div v-if="lastAction == 'error'" class="color-red font14">{{ msg }}</div>
    <div v-if="lastAction=='loading'" class="relative" style="height: 200px;">
      <material-spinner></material-spinner>
    </div>
    <div class="alternative-main-pic relative" v-for="item,index in list">
      <div class="relative" :style="item.url == pic_url ? {borderColor: '#1284e7'} : {}">
        <img
          class="pointer"
          @click="selectImg(item.url)"
          :src="item.url" alt="">
        <img :src="checkIcon" alt="" v-if="item.url == pic_url" class="alternative-checked-icon absolute">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-pic-alternative',
  props: {
    item: {
      type: Object,
      default: {

      }
    },
    numIid: {
      type: [Number, String],
      default: 0,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    goodsMainPics() {
      return this.$store.state.dialogGoods.goodsMainPics;
    },
    goodsData(){
      return this.goodsMainPics[`n${this.numIid}`] || {};
    },
    lastAction(){
      return this.goodsData.lastAction || '';
    },
    msg(){
      return this.goodsData.msg;
    },
    list() {
      return this.goodsData.list || [];
    },
    pic_url() {
      return this.item.pic_url;
    },
    checkIcon(){
      return `${window.assets}checked.svg`;
    }
  },
  methods: {
    selectImg(url) {
      // this.$emit('selectImg', url);
      this.item.pic_url = url;
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .main-pic-alternative{
    position: absolute;
    left: 100%;
    top: 0;
    width: 350px;
    display: none;
    z-index: 1;
    background-color: white;
    padding: 8px 0px 8px 8px;
    min-height: 100px;
    &:before{
      content: '';
      width: 20px;
      height: 20px;
      position: absolute;
      box-sizing: border-box;
      border-left: 10px solid transparent;
      border-top: 10px solid transparent;
      border-right: 10px solid white;
      border-bottom: 10px solid transparent;
      left: -20px;
      top: 30px;
    }
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    .alternative-title{
      color: #7D8699;
      font-size: 14px;
    }
    .alternative-main-pic{
      display: inline-block;
      width: 33%;
      padding: 4px;
      &>div{
        widht: 100%;
        border: 1px solid transparent;
      }
      &:hover>div{
        border: 1px solid #1284e7;
      }
      img{
        width: 100%;
      }
      .alternative-checked-icon{
        width: 50px;
        right: -1px;
        bottom: -1px;
      }
    }
  }
</style>
