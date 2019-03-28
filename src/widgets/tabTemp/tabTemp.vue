/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:39 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-10 14:06:46
 */
// 选项卡
<template>
  <div class="tab-temp">
    <slot></slot>
    <div
      class="tab-content"
      v-for="content, i in data.list"
      v-if="getActiveIndex() == i"
      @dragover.stop="dragover"
      @drop.stop="drop"
      @dragout="dragout"
      @dragleave="dragout"
    >
      <div class="position-tip" v-show="isDragover"></div>
      <table cellspacing="0" cellpadding="0" class="empty-content" v-if="content.children && content.children.length == 0">
        <tr>
          <td class="center" style="background-color: white;">
            可拖动其他模块添加到悬浮分类内
          </td>
        </tr>
      </table>
      <div v-for="subItem,subIndex in content.children" >
        <action-wrap
          :index="subIndex"
          :activeIndex="subActiveIndex"
          :count="content.children.length"
          :type="subItem.type"
          @setActiveIndex="setSubActiveIndex"
          @setAction="setSubAction"
          @addWidget="addSubWidget"
          :sub="true"
        >
          <component :is="subItem.is || subItem.type" :data="subItem" :global="global"></component>   
        </action-wrap>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'tab',
					list: [],
          activeIndex: 0,
        }
      }
    },
    global: {
      type: Object,
      default() {
        return {};
      }
    },
    index: {
      type: Number,
      default: 0,
    }
  },
  data () {
    return {
      activeIndex: 0,
      tabs: [
        {
          title: 'tab1',
          content: {
            
          }
        },
        {
          title: 'tab2',
          content: {}
        },
      ],
      isDragover: false,
    }
  },
  computed: {
    subActiveIndex() {
      return this.$store ? this.$store.state.subActiveIndex : null;
    }
  },
  methods: {
    setActiveIndex(index) {
      this.data.activeIndex = index;
      this.activeIndex = index;
    },
    getActiveIndex(){
      return this.data.activeIndex; 
      //return window.dev ? this.data.activeIndex : this.activeIndex; 
    },
    // 
    dragover(e) {
      console.log(e);
      e.preventDefault();
      let className = e.target.className;
      if(className == 'center' || className == 'tab-content') {
        this.isDragover = true;
      }
    },
    dragout(e) {
      this.isDragover = false;
    },
    drop(e) {
      console.log(e);
      e.preventDefault();
      this.isDragover = false;
      var data=e.dataTransfer.getData("Text");
      if(this.$store) {
        this.$store.dispatch('addSubWidget',{data, index: 0, dragArea:'bottom', parentIndex: this.index});
      }
    },
    // 
    setSubActiveIndex(e) {
      if(this.$store) {
        this.$store.state.subActiveIndex = e.activeIndex;
        this.$store.state.activeIndex = this.index;
      }
    },
    //
    setSubAction(e) {
      if(this.$store) {
        this.$store.dispatch('setSubAction',{...e, parentIndex: this.index});
      }
    },
    addSubWidget(e) {
      if(this.$store) {
        this.$store.dispatch('addSubWidget',{...e,parentIndex: this.index});
      }
    }

  },
  created() {
  }
}
</script>

<style lang="scss">
  .tab-temp{
    .tab-title-warp{
      width: 100%;
      // border: 1px solid orange;
    }
    .tab-title{
      background-color: white;
      padding:5px 0;
      cursor: pointer;
      overflow: hidden;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      // border: 1px solid orange;
      // border-left: none;
    }
    .tab-title-warp .tab-title:not(:first-child){
      border-left: none;
    }
    .tab-title-active{
      background-color: orange;
      color: white;
    }
    .tab-title-inactive{
      background-color: white;
      color: orange;
    }
    .tab-content{
      min-height: 100px;
      // background-color: white;
    }
    .empty-content{
      width: 100%;
      height: 190px;
      font-size: 12px;
    }
  }
</style>
