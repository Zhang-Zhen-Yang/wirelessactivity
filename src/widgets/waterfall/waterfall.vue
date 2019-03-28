/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-02 13:49:14 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-29 15:15:05
 */
// 瀑布流模块
<template>
  <div class="waterfall">
    <div class="waterfall-title">{{ data.title }}</div>
    <table style="width:100%;" class="waterfall-table" cellspacing="0" cellpadding="0">
      <tr >
        <td>
          <div class="left-column">
            <div class="waterfall-item" v-if="data.leftTop.pic_url">
              <a-link :href="data.leftTop.link">
                <img :src="data.leftTop.pic_url" alt="" style="max-width:100%;max-height:100%;">
              </a-link>
            </div>
            <div v-for="item,index in data.list" v-if="index % 2 == 0" class="waterfall-item bg-block">
              <goods-link :numIid="item.num_iid">
                <aspect :ratio="1" :css="{textAlign: 'center'}">
                  <img :src="item.pic_url" alt="" style="max-width:100%;max-height:100%;">
                </aspect>
                <div class="waterfall-goods-title-wrap" v-if="data.show_title">
                  <span class="waterfall-goods-title goods-title">{{ item.title }}</span>
                </div>
                <div class="waterfall-price-block">
                  <span class="waterfall-price color-price">{{ item.price | pri }}</span>
                  <span class="waterfall-prev-price color-prev-price" v-if="data.show_prev_price">{{ item.prev_price | pri }}</span>
                </div>
              </goods-link>
            </div>
            <empty-layout v-if="data.list.length==0"></empty-layout>
          </div>
        </td>
        <td style="width: 5px;">
        </td>
        <td>
          <div class="right-column">
            <div v-for="item,index in data.list" v-if="index % 2 != 0" class="waterfall-item bg-block">
              <goods-link :numIid="item.num_iid">
                <aspect :ratio="1" :css="{textAlign: 'center'}">
                  <img :src="item.pic_url" alt="" style="max-width:100%;max-height:100%;">
                </aspect>
                <div class="waterfall-goods-title-wrap" v-if="data.show_title">
                  <span class="waterfall-goods-title goods-title" >{{ item.title }}</span>
                </div>
                <div class="waterfall-price-block">
                  <span class="waterfall-price waterfall-price color-price">{{ item.price | pri}}</span>
                  <span class="waterfall-prev-price color-prev-price" v-if="data.show_prev_price">{{ item.prev_price | pri }}</span>
                </div>
              </goods-link>
            </div>
            <empty-layout v-if="data.list.length==0"></empty-layout>
            <div class="waterfall-item" v-if="data.rightBottom.pic_url">
              <a-link :href="data.rightBottom.link">
              <img :src="data.rightBottom.pic_url" alt="" style="max-width:100%;max-height:100%;">
              </a-link>
            </div>
          </div>
        </td>
      </tr>
    </table>
    
  </div>
</template>

<script>
export default {
  name: 'waterfall',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'waterfall',
					list: [],
          code: ''
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

  },
  methods: {

  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .waterfall {
    table {
      table-layout: fixed;
    }
    .goods-title{
      color: orange;
    }
  }
  .waterfall-title{
    background-color: white;
  }

  .waterfall-table td{
    vertical-align: top;
  }
  .waterfall-item{
    background-color: white;
    margin-bottom: 5px;
    img{
      vertical-align: middle;
    }
  }

  .waterfall-goods-title-wrap{
    font-size: 14px;
    padding: 0 5px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .waterfall-price-block{
    padding: 0 5px;
  }
  .waterfall-price{
    color:#666666;
  }
  .waterfall-prev-price{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 5px;
    color: #aaaaaa;
  }
  .waterfall-price:before{
    content: '¥';
    
  }
</style>
