/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-24 11:02:43 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2019-03-13 14:38:27
 */
// 收藏
<template>
  <a-link :href="data.list[0].link">
    <!-- <div class="favorite-wrap">
      <table class="" cellspacing="0" cellpadding="0">
        <tr>
          <td style="width:20%;">
            <aspect>
              <div class="shop-logo" :style="{ backgroundImage: `url(${data.list[0].shopLogo})`}">
              </div>
            </aspect>
          </td>
          <td>
            <span class="shop-name">{{data.list[0].shopName}}</span>
          </td>
          <td class="shop-favorite-btn-td">
            <div class="shop-favorite-btn">
              收藏店铺
            </div>
          </td>
        </tr>
      </table>
    </div>-->
    <div class="favorite-default">
      <img src="https://img.wonbao.net/wonbao-wireless/collection/collection01.png">
    </div>
  </a-link>
  
</template>

<script>
export default {
  name: 'favorite',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'favorite',
          list: [{
            pic_url: 'https://img.alicdn.com/imgextra/i1/105227988/O1CN01cgpqmj28sYFhyLjq8_!!105227988.png',
            link: '',
            shopName: '店铺名称',
            shopLogo: '',
          }],
        }
      }
    },
    global: {
      type: Object,
      default() {
        return {};
      }
    },
    width: {
      type: Number,
      default: 0,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    dev() {
      return window.dev || false;
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
  .favorite-wrap{
    width: 100%;
    position: relative;
    background-image: url(http://imgs.aixifan.com/content/2018_11_23/1.5429677248728094E9.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    table{
      table-layout:fixed;
      left:0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(0,0,0,0.2);
      td{
        padding: 5px;
      }
    }
  }
  .favorite-pic{
    width: 100%;
  }
  .shop-logo{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
  }
  .shop-name{
    color: white;
    font-weight: bold;
  }
  .shop-favorite-btn-td{
    text-align: right;
    padding-right: 10px;
  }
  .shop-favorite-btn{
    display: inline-block;
    padding: 0 10px;
    height: 2em;
    border-radius: 1em;
    line-height: 2em;
    color: white;
    background-color: orange;
  }
  .favorite-default{
    img{
      width: 100%;
      vertical-align: middle;
    }
  }
</style>
