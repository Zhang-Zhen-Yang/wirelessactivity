/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:30:18 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-12-dd 17:22:05
 */

<template>
  <div class="content-item-tab">
    <div class="content-item-title">悬浮分类模块</div>
    <div class="content-item-wrap">
      <tab-setting>
        <!--1-->
        <div slot="first">
          <div class="content-item-sub-title">分类内容</div>
          <div
            v-for="item,index in itemData.list"
            :class="['tab-item-tag', itemData.activeIndex == index ? 'tab-item-active' : '']"
            :style="tabStyle(index)"
            @click="setActiveIndex(index)"
          >
            <div>
              {{ item.title }}
            </div>
            <tab-item-reorder @setAction="setAction" :index="index" :count="itemData.list.length"/>
          </div><div class="tab-item-tag" :style="tabStyle(itemData.list.length)" @click="addTab">
            <div class="tab-item-plus">
            +
            </div>
          </div>

          <div class="content-item-sub-title">分类名称</div>
          <w-input type="text" class="" v-model="itemData.list[itemData.activeIndex].title" placeholder="请输入分类名称" />
          
          <!--分类中已添加的模块：-->
          <div class="content-item-sub-title">分类中已添加的模块</div>
          <div>
            <div v-for="item,index in itemData.list[itemData.activeIndex].children" class="tab-sub-widget-item" @click="setSubIndex(index)">
              <div :style="{backgroundImage: `url(${imgPath}${item.type}.png)`}" class="tab-sub-widget-item-img">
              </div>
              <div class="tab-sub-widget-item-type">
                {{ item.type | widgetType }}
              </div>
            </div>
          </div>
        
        </div>
        <!--2-->
        <div slot="second">
          <!--动态组件列表-->
          <dynamic-list type="tab" :itemData="itemData"></dynamic-list>
        </div>
      </tab-setting>
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-i-tab',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          name: '',
          title: 'ddd',
          link:'ddddeeee',
          activeIndex: 0,
          list: [
            {
              title: 'tab1',
              children: [],
            },
            {
              title: 'tab2',
              children: [],
            },

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
    }
  },
  computed: {
    imgPath() {
      return `${window.assets}`;
    },
  },
  methods: {
    setActiveIndex(index) {
      this.itemData.activeIndex = index;
    },
    tabStyle(index){
      if(index % 3 != 0) {
        return {
          borderLeft: 'none',
        }
      } 
      return {
      };
    },
    // 添加一个分类
    addTab() {
      if(this.itemData.list.length < 4) {
        this.itemData.list.push({
          title:`分类${this.itemData.list.length + 1}`,
          children: []
        })
      } else {
        alert('选项卡最多支持4个分类');
      }
    },
    setAction({type,index}) {
      let pickItem;
      let distIndex
      switch(type) {
        case 'l':
          if(index == 0) {
						return;
					}
					if(this.itemData.activeIndex > 0 ) {
						distIndex = this.itemData.activeIndex - 1;
            this.setActiveIndex(distIndex);
						// this.itemData.activeIndex = distIndex;
					}
					pickItem = this.itemData.list.splice(index, 1);
					this.itemData.list.splice(index - 1,0,pickItem[0]);
          break;
        case 'r':
          pickItem = this.itemData.list.splice(index + 1, 1)
					this.itemData.list.splice(index,0,pickItem[0]);
          this.setActiveIndex(index + 1);
          break;
        case 'd':
          if(this.itemData.list.length == 2) {
            alert('最少需要两个分类');
            return;
          }
          if(index + 1 == this.itemData.list.length) {
            this.setActiveIndex(index - 1);
					}
					pickItem = this.itemData.list.splice(index, 1);
          break;
        default:;
      }
    },
    setSubIndex(index) {
      this.$store.state.subActiveIndex = index;
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .tab-item-active{
    background-color: #1284e7;
    color: white;
  }
  .tab-item-tag{
    width: 33.3%;
    height: 43px;
    display:inline-block;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    border:1px solid #1284e7;
    
    margin-top: 30px;
    position: relative;
  }
  .tab-item-tag>div{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .tab-item-active .tab-item-reorder{
    display: block;
  }
  .tab-item-plus{
    line-height: 21px;
    font-size: 30px;
  }
  .tab-sub-widget-item{
    display: inline-block;
    border: 1px solid #dddddd;
    text-align: center;
    width: 100px;
    height: 100px;
    padding: 10px;
    margin: 5px 10px 5px 0;
    cursor: pointer;
  }
  .tab-sub-widget-item-img{
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: contain;
  }
  .tab-sub-widget-item-type{
    font-size:14px; 
  }
</style>
