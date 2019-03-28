/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:29:56 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2019-02-18 14:32:07
 */

<template>
  <div class="temp">
    <div class="content-item-title">海报模块</div>
    <div class="content-item-wrap">
      <div class="content-item-sub-title">图片</div>
      <mask-replace @select="selectImage" @selectedImage="selectedImage" :showImageUpload="true">
        <img v-if="itemData.list[0] && itemData.list[0].pic_url" :src="itemData.list[0].pic_url" alt="" class="content-item-img">
        <empty-layout v-else></empty-layout>
      </mask-replace>
      <div style="font-size: 13px;color: #999999;margin-top:10px;">上传图片时请选择宽度为750~990尺寸的图片，类型：JPG、PNG</div>
      <p></p>
      <div class="content-item-sub-title" v-if="itemData.list[0]">链接</div>
      <div class="relative" v-if="itemData.list[0]">
        <w-input type="text" class="" v-model="itemData.list[0].link" placeholder="请输入链接" />
        <link-icon :itemData="itemData" :itemIndex="0"></link-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-i-poster',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          startDate: Date.now(),
          endDate: Date.now() + 3600000 * 24,
          name: ''
        }
      }
    },
    activeIndex: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
    }
  },
  computed: {
    img() {
      if(this.itemData.list[0]) {
        return this.itemData.list[0].pic_url
      }
      return `${window.assets}empty.png`;
    }
  },
  methods: {
    selectImage() {
      // alert('dddd');
      this.$store.state.dialogImage.show = true;
      this.$store.state.dialogImage.itemData = this.itemData;
      this.$store.state.dialogImage.itemIndex = 0;
      // this.$store.state.dialogImage.allowCount = this.allowCount;
    },
    selectedImage(img) {
      // alert('ddddddddd');
      this.$store.dispatch('addStep');
      console.warn(JSON.parse(JSON.stringify(this.itemData)));
      if(!this.itemData.list[0]) {
        this.itemData.list.push({pic_url: ''})
      }
      this.itemData.list[0].pic_url = img;
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .content-item-img{
    vertical-align: middle;
    min-width: 50%;
  }
</style>
