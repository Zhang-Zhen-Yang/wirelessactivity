/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:48 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 15:30:43
 */
// 三列宝贝
<template>
  <div class="three-row-wrap bg-block">
    <widget-header :title="data.title" :link="data.link"></widget-header>
    <empty-layout v-if="data.list.length == 0" />
    <table class="three-row" cellspacing="0" cellpadding="0">
      <tr v-for="item,index in get3ColArray">
        <td v-for="i in item">
          <goods-link :numIid="i.num_iid">
            <div class="three-row-item border-theme" >
              <aspect>
                <img class="goods-pic" :src="i.pic_url" alt="">
              </aspect>
              <div class="goods-title" v-if="data.show_title">
                <div class="goods-title-bg"></div>
                <span class="goods-title">{{ i.title }}</span>
              </div>
            </div>
          </goods-link>
        </td>
        <td v-if="!item[1]"></td>
        <td v-if="!item[2]"></td>
        <!--<td>
          <goods-link v-if="item[1]" :numIid="item[1].num_iid">
            <div class="three-row-item border-theme" v-if="item[1]" >
              <aspect>
                <img class="goods-pic" :src="item[1].pic_url" alt="">
              </aspect>
              <div class="goods-title" v-if="data.show_title">
                <div class="goods-title-bg"></div>
                <span class="goods-title">{{ item[1].title }}</span>
              </div>
            </div>
          </goods-link>
        </td>
        <td>
          <goods-link v-if="item[2]" :numIid="item[2].num_iid">
            <div class="three-row-item border-theme" v-if="item[2]" >
              <aspect>
                <img class="goods-pic" :src="item[2].pic_url" alt="">
              </aspect>
              <div class="goods-title" v-if="data.show_title">
                <div class="goods-title-bg"></div>
                <span class="goods-title">{{ item[2].title }}</span>
              </div>
            </div>
          </goods-link>
        </td>-->
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'three-row',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'threeRow',
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
    get3ColArray(list){
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
  .three-row-wrap{
    background-color: white;
  }
  .three-row{
    width: 100%;
    table-layout: fixed;
    // display: inline-block;
    img{
      vertical-align: bottom
    }
    td{
      width: 33.333%;
      padding:2.5px;
    }
    .three-row-item{
      width: 100%;
      position: relative;
      overflow:hidden;
      // border: 1px solid orange;
    }
    .goods-pic{
      width: 100%;
    }
    .goods-title{
      position: absolute;
      left:0;
      bottom: 0;
      width:100%;
      color: orange;
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
    }
    .goods-title-bg{
      position: absolute;
      left:0;
      top:0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      background: #000000;
      z-index: -1;
    }
  }
  .three-row-table{
    width: 100%;
  }
</style>
