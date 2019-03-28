/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-24 14:10:16 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2019-01-19 09:07:29
 */


<template>
  <div class="temp">
    <div class="content-item-title">页面底部</div>
    <div class="content-item-wrap">
      <div class="content-item-sub-title" v-if="itemData.list[0]">链接</div>
      <div class="relative" v-if="itemData.list[0]">
        <w-input type="text" class="" v-model="itemData.list[0].link" placeholder="请输入链接" />
        <link-icon :itemData="itemData" :itemIndex="0"></link-icon>
      </div>
      <!-- 收藏店铺样式 -->
      <div class="content-item-sub-title">页面底部样式</div>
      <!-- {{ favoriteWidgets }} -->
      <dynamic-list type="pageBottom" :itemData="itemData" :block="true"></dynamic-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-i-favorite',
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
    },
    // 动态组件
    pageBottomWidgets() {
      return this.$store.state.dynamic.widgets.pageBottom;
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
    setWidget(item) {
      this.addStep();
      this.itemData.is = item.name;
    },
    addStep() {
      this.$store.dispatch('addStep');
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
