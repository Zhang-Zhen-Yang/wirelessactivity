/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:30:59 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-12-dd 10:08:58
 */
<template>
  <div id="leftbar">
    <div class="scrollbar-overwrite" style="padding: 10px">
      <div v-for="item in widgets" style="margin-bottom: 10px;">
        <div class="widget-title center pointer" @click="item.show = !item.show">
          {{ item.title }}
          <div :class="{'down-icon':true, 'up': item.show}">
          </div>
        </div>
        <div v-if="item.show">
          <div class="widget-block relative"
            v-for="widget,index in item.list"
          >
            <div
              class="widget-block-inner"
              style="width: 100%;height:100%;"
              draggable="true"
              @dragstart="dragstart($event, widget)"
              :data-type="widget.icon"
              @click="select(widget);"
            >
              <div class="widget-icon" :style="{backgroundImage: `url(${imgPath}${widget.icon}.png)`}">
              </div>
              <div>{{widget.name}}</div>
            </div>
            <div :class="{'drag-tip': true, 'drag-tip-left': index % 2 == 0, 'drag-tip-right': index % 2 == 1 }">拖拽添加</div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'temp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      widgets: [
        // 模块1
        {
          title: '宝贝展示模块',
          show: true,
          list: [
            {
              type: 'swipe',
              name: '轮播宝贝',
              icon: 'swipe'
            },
            {
              type: 'oneRow',
              name: '单列宝贝',
              icon: 'oneRow'
            },
            {
              type: 'twoRow',
              name: '双列宝贝',
              icon: 'twoRow'
            },
            {
              type: 'threeRow',
              name: '三列宝贝',
              icon: 'threeRow'
            },
            {
              type: 'groupGoods',
              name: '组合宝贝',
              icon: 'groupGoods'
            },
            {
              type: 'oneRowHorizontal',
              name: '左右图文',
              icon: 'oneRowHorizontal'
            },
            
            {
              type: 'waterfall',
              name: '瀑布流',
              icon: 'waterfall'
            },
            {
              type: 'marqueeBlock',
              name: '滚动宝贝',
              icon: 'marqueeBlock'
            },
          ]
        },
        // 模块2
        {
          title: '图文描述模块',
          show: true,
          list: [
            {
              type: 'poster',
              name: '海报',
              icon: 'poster'
            },
            {
              type: 'focusImg',
              name: '焦点图',
              icon: 'focusImg'
            },
          ]
        },
        {
          title: '营销模块',
          show: true,
          list: [
            {
              type: 'coupon',
              name: '优惠券',
              icon: 'coupon'
            },
            
            {
              type: 'hotItem',
              name: '爆款推荐',
              icon: 'hotItem'
            },
            {
              type: 'promotionMeal',
              name: '搭配套餐',
              icon: 'promotionMeal'
            },
          ]
        },
        {
          title: '其他模块',
          show: true,
          list: [
            {
              type: 'countDown',
              name: '倒计时',
              icon: 'countDown'
            },
            {
              type: 'favorite',
              name: '收藏店铺',
              icon: 'favorite',
            },
            {
              type: 'pageBottom',
              name: '页面底部',
              icon: 'pageBottom',
            },
            {
              type: 'tab',
              name: '选项卡',
              icon: 'tab'
            },
            /*{
              type: 'videoBlock',
              name: '视频',
              icon: 'tab'
            },*/
            {
              type: 'codeBlock',
              name: '代码块',
              icon: 'codeBlock'
            },
          ]
        }
      ]
    }
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    imgPath() {
      return `${window.assets}`;
    },
  },
  methods: {
    select(widget) {
      // alert('ddd');
    },
    dragstart(ev,widget) {
      ev.setEff
      ev.dataTransfer.setData("Text",JSON.stringify(widget));
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  #leftbar{
    position: absolute;
    width: 300px;
    left:0px;
    top: 0px;
    bottom:0px;
    padding-top: 65px;
    padding-bottom: 15px;
    background-color:white;
    border-right: 1px solid #eeeeee;
    background-color: #f0f0f0;
    font-size: 14px;
    &>div{
      width: 90%;
      margin-left: 5%;
      height: 100%;
      overflow: auto;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
      background-color: white;
    }
    .widget-title{
      border: 1px solid #dddddd;
      // border-bottom: 1px solid #dddddd;
      padding: 5px 0;
      // background-color: #1284e7;
      background-color: #f0f0f0;
      color: #666666;
      font-size: 16px;
      text-align: left;
      text-indent: 1em;
    }
    .widget-block{
      display: inline-block;
      width: 38%;
      text-align: center;
      margin: 10px;
      margin-left: 15px;
      cursor: move;
      font-size: 12px;
      height: 84px;
      &>.widget-block-inner{
        border: 1px solid transparent;
        padding: 5px 10px;
        border-radius: 3px;
      }
      &:hover{
        &>.widget-block-inner{
          border: 1px solid red;
        }
        & .drag-tip{
          display:inline-block;
        }
      }
    }
    .widget-icon{
      display: inline-block;
      width: 48px;
      height: 48px;
      // background-color: orange;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 5px;
    }
    .down-icon{
      width: 15px;
      height: 15px;
      display: inline-block;
      background-size:contain;
      float: right;
      margin-right: 10px;
      margin-top: 3px;
      background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M958.577 311.18c0 15.286-5.878 29.523-16.564 40.167L551.624 741.044c-1.393 1.425-2.578 2.537-3.847 3.45l-2.905 2.304c-11.416 11.362-24.849 16.946-39.069 16.946-14.475 0-28.01-5.708-38.11-16.057L79.475 355.31c-10.468-10.613-16.237-24.786-16.237-39.893 0-14.773 5.6-28.727 15.754-39.287 10.186-10.497 24.39-16.54 38.952-16.54 14.382 0 28.01 5.724 38.367 16.143L506.48 629.702l359.428-358.486c10.31-10.248 23.782-15.91 37.994-15.91 14.89 0 28.86 6.052 39.334 17 9.89 10.42 15.34 24.25 15.34 38.874z' fill='%23666666'/%3E%3C/svg%3E");
    }
    .down-icon.up{
      transform: rotate(180deg);
    }
    .drag-tip{
      background-color: #41445d;
      border-radius: 2px;
      color:white;
      position: absolute;
      top:0;
      white-space:nowrap;
      line-height:22px;
      padding:0 10px;
      z-index:10;
      display:none;
    }
    .drag-tip-left{
      left:100%;
      margin-left: 10px;
    }
    .drag-tip-left:before{
      content: "";
      border: 4px solid #41445d;
      border-left-color: transparent;
      border-bottom-color: transparent;
      border-top-color: transparent;
      width: 8;
      height: 8;
      position: absolute;
      top: 8px;
      left: -8px;
    }
    .drag-tip-right{
      right:100%;
      margin-right: 10px;
    }
    .drag-tip-right:after{
      content: "";
      border: 4px solid #41445d;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-top-color: transparent;
      width: 8;
      height: 8;
      position: absolute;
      top: 8px;
      right: -8px;
    }
  }

</style>
