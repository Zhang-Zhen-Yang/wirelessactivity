/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-02 14:46:11 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 10:10:23
 */


<template>
  <div class="content-item-waterfall">
    <div class="content-item-title">瀑布流模块</div>
    <div class="content-item-wrap">
      <tab-setting>
        <!--1-->
        <div slot="first">
          <div class="content-item-sub-title">模块标题</div>
          <w-input type="text" class="" v-model="itemData.title" placeholder="请输入模块标题" />
          <p></p>
          <table cellspacing="0" cellpadding="0" >
            <tr>
              <td style="width: 50%;">
                <div class="content-item-sub-title">左上角图</div>
              </td>
              <td style="width:10px;" rowspan="3"></td>
              <td>
                <div class="content-item-sub-title">右下角图</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <mask-replace @select="selectImage('leftTop')">
                    <img :src="itemData.leftTop.pic_url" alt="" class="content-item-img">
                    <empty-layout v-if="!itemData.leftTop.pic_url"></empty-layout>
                  </mask-replace>
                </div>
                <p></p>
              </td>
              <td>
                <div style="">
                  <mask-replace @select="selectImage('rightBottom')">
                    <img :src="itemData.rightBottom.pic_url" alt="" class="content-item-img">
                    <empty-layout v-if="!itemData.rightBottom.pic_url"></empty-layout>
                  </mask-replace>
                </div>
                <p></p>
              </td>
            </tr>
            <tr>
              <td>
                <div class="relative">
                  <w-input type="text" class="" v-model="itemData.leftTop.link" placeholder="请输入链接" />
                  <link-icon :itemData="itemData.leftTop" :itemIndex="0" :mapKey="'link'"></link-icon>
                </div>
              </td>
              <td>
                <div class="relative">
                  <w-input type="text" class="" v-model="itemData.rightBottom.link" placeholder="请输入链接" />
                  <link-icon :itemData="itemData.rightBottom" :itemIndex="0" :mapKey="'link'"></link-icon>
                </div>
              </td>
            </tr>
          </table>
          <!-- <div class="content-item-sub-title">更多链接</div>
          <div class="relative">
            <w-input type="text" class="" v-model="itemData.link" placeholder="请输入更多链接" />
            <link-icon :itemData="itemData" :itemIndex="0" :mapKey="'link'"></link-icon>
          </div>-->
          <p></p>
          <tab-layout>
            <div slot="one">
              <goods-item-layout :list="itemData.list" />
              <add-btn @click="add"> {{itemData.list.length}}/{{ allowCount }}</add-btn>
            </div>
            <div slot="two">
              <checked-item-block :data="itemData"></checked-item-block>
              <goods-item-layout :list="itemData.list" editable></goods-item-layout>
              <add-btn @click="add"> {{itemData.list.length}}/{{ allowCount }}</add-btn>
            </div>
          </tab-layout>
        </div>
        <!--2-->
        <div slot="second">
          <!--动态组件列表-->
          <dynamic-list type="waterfall" :itemData="itemData"></dynamic-list>
        </div>
      </tab-setting>

    </div>
  </div>
</template>

<script>
export default {
  name: 'content-item-onerow',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          name: '',
          title: 'ddd',
          link:'ddddeeee',
          list: [
            {
              pic_url: 'ddd'
            }
          ]
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
      allowCount: 10,
    }
  },
  computed: {

  },
  methods: {
    add() {
      // alert('add');
      this.$store.commit('showGoodsDialog', {
        itemData: this.itemData,
        allowCount: this.allowCount,
        mode: 'add',
      })
    },
    selectImage(type) {
      this.$store.state.dialogImage.show = true;
      this.$store.state.dialogImage.itemData = this.itemData[type];
      this.$store.state.dialogImage.itemIndex = 0;
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  
</style>
