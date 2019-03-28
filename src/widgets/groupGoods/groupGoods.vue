/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:36:51 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-29 15:13:26
 */
// 组合宝贝
<template>
  <div class="group-goods-wrap bg-block">
    <widget-header :title="data.title" :link="data.link"></widget-header>
    <empty-layout v-if="data.list.length == 0" />
    <table class="group-goods-row" cellspacing="0" cellpadding="0">
      <tr>
        <td rowspan="2" style="width: 67%;">
          <goods-link  v-if="data.list[0]" :numIid="data.list[0].num_iid">
            <div class="group-goods-item border-theme" v-if="data.list[0]">
              <img class="goods-pic" :src="data.list[0].pic_url" alt="">
              <div class="goods-title" v-if="data.show_title">
                <div class="goods-title-bg"></div>
                <span>{{ data.list[0].title }}</span>
              </div>
            </div>
          </goods-link>
        </td>
        <td class="top">
          <goods-link  v-if="data.list[1]" :numIid="data.list[1].num_iid">
            <div class="group-goods-item border-theme" v-if="data.list[1]" >
              <img class="goods-pic" :src="data.list[1].pic_url" alt="">
              <div class="goods-title" v-if="data.show_title">
                <div class="goods-title-bg"></div>
                <span>{{ data.list[1].title }}</span>
              </div>
            </div>
          </goods-link>
        </td>
      </tr>
      <tr>
        <td class="bottom">
          <goods-link  v-if="data.list[2]" :numIid="data.list[2].num_iid">
            <div class="group-goods-item border-theme" v-if="data.list[2]" >
              <img class="goods-pic" :src="data.list[2].pic_url" alt="">
              <div class="goods-title" v-if="data.show_title">
                <div class="goods-title-bg"></div>
                <span>{{ data.list[2].title }}</span>
              </div>
            </div>
          </goods-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'group-goods',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'groupGoods',
					list: [],
          title: '',
          link: '',
        }
      }
    },
    global: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    get2ColArray(list){
      const result = [];
      let tempList = [];
      this.data.list.forEach((item) => {
        tempList.push(item);
        if (tempList.length == 3) {
          result.push(tempList);
          tempList = [];
        }
      });
      if (tempList.length > 0) {
        result.push(tempList);
      }
      return result;
    },
  },
  methods: {

  },
  created() {
  }
}
</script>

<style lang="scss">
  .group-goods-wrap{
    background-color: white;
  }
  .group-goods-row{
    width: 100%;
    table-layout: fixed;
    display: inline-block;
    img{
      vertical-align: bottom
    }
    td{
      width: 50%;
      padding:2.5px;
    }
    .group-goods-item{
      width: 100%;
      overflow:hidden;
      // border: 1px solid orange;
      position: relative;
    }
    .goods-pic{
      width: 100%;
    }
    .goods-title-bg{
      position: absolute;
      left: 0;
      top:0;
      width: 100%;
      height: 100%;
      background-color: #000000;
      opacity: 0.5;
      z-index: -1
    }
    .goods-title{
      position: absolute;
      left:0;
      bottom: 0;
      width:100%;
      /* white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
      
      padding: 5px;*/
      height: 2em;
      line-height: 2em;
      font-size: 14px;
      // border-top: 1px solid orange;
      border-left: none;
      border-right: none;
      border-bottom: none;
      overflow: hidden;
      z-index: 1;
      color: orange;
    }

  }
</style>
