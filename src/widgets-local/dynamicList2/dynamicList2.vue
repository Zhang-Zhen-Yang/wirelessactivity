/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:41:57 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 15:36:23
 */
// 动态组件列表
<template>
  <div class="dynamic-list2">

    <!--加载中-->
    <div class="widget-loading" v-if="lastAction == 'loading'">
      <material-spinner></material-spinner>
    </div>
    <div class="widget-load-empty" v-if="lastAction=='success' && list.length == 0">
      没有相关的数据
    </div>
    <div class="widget-load-error" v-if="lastAction == 'error'">
     加载出错 <span class="widget-load-refresh" @click="refresh">刷新</span>
    </div>

    <!---->
    <div v-if="!block&&lastAction=='success'"class="dynamic-list-item pointer" v-for="item,index in list" :key="index">
      <div :style="{backgroundImage: `url(${item.image})`}" :class="{'inmodify': item.id == activeId}" @click="setDynamic(item);">
        <div class="widget-un-publish" v-if="item.p == false || item.p == 'false'">未开放</div>
      </div>
    </div>

    <!--分页-->
    <div style="text-align: center;">
      <pagination v-if="true" :pageSize="widgetPageSize" :pageNo="widgetPageNo" :count="widgetCount" @goToPage="widgetGoToPage"></pagination>
    </div>

  </div>
</template>

<script>
export default {
  name: 'dynamic-list',
  props: {
    type: {
      type: String,
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
    itemData: {
      type: Object,
      default() {
        return {
          type: '',
          is: '',
          id: null
        }
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    widgets() {
      return this.$store.state.dynamic.widgets;
    },
    data() {
      return this.widgets[this.type] || {};
    },
    list() {
      return this.data.list;
    },
    lastAction() {
      return this.data.lastAction;
    },
    widgetPageSize() {
      return this.$store.state.dynamic.pageSize;
    },
    widgetPageNo() {
      return this.data.pageNo;
    },
    widgetCount() {
      return this.data.count;
    },
    // 正在编辑的模板样式id
    activeId (){
      if(this.$store.state.modals[1].item && this.$store.state.modals[1].item.id) {
        return this.$store.state.modals[1].item.id;
      }
      return null;
    }
  },
  methods: {
    setDynamic(item) {
      console.log(JSON.stringify(item));
      this.itemData.id = item.id;
      // this.addStep();
      // this.itemData.is = item.name;
    },
    
    addStep() {
      this.$store.dispatch('addStep');
    },
    widgetGoToPage(pageNo) {
      // alert(pageNo);
      this.$store.dispatch('getTemplateStyles', {type: this.type, pageNo});
    },
    // 刷新
    refresh() {
      let pageNo = this.widgetPageNo;
      this.widgetGoToPage(pageNo);
    }
  },
  created() {
    if(this.widgets[this.type].lastAction == 'success' || this.widgets[this.type].lastAction == 'loading') {
      return ;
    }
    this.$store.dispatch('getTemplateStyles', {type: this.type});
    // alert(this.type);
  }
}
</script>

<style lang="scss">
  .dynamic-list2{

    .dynamic-list-item.block{
      width: 84%;
    }
    .dynamic-list-item{
      display: inline-block;
      width: 175px;
      height: 175px;
      padding: 10px;
      &>div{
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        border: 1px solid #aaaaaa;
        position: relative;
      }
      &>div:hover{
        border: 1px solid #1284e7;
        color: #1284e7;
        & .dynamic-action{
          display: block;
        }
      }
    }
    
    .widget-loading{
      width: 100%;
      padding:250px 0;
      position: relative;
      svg{
        
      }
    }
    .widget-load-error,.widget-load-empty{
      width: 80%;
      padding: 90px 0;
      text-align:center;
      color: red;
    }
    .inmodify{
      border: 1px solid red!important;
    }
    .dynamic-list-item-block{
      border: 1px solid #efefef;
      &:hover{
        border: 1px solid #1284e7;
      }
    }
    .widget-load-refresh{
      display: inline-block;
      background-color: red;
      color: white;
      padding: 3px 5px;
      border-radius: 3px;
      cursor: pointer;
      margin-left: 10px;
    }
    .widget-un-publish{
      display: inline-block;
      background-color: red;
      color: white;
      font-size: 12px;
      padding: 0 5px;
      line-height: 20px;
      border-radius: 7px;
      position: absolute;
      left: 5px;
      top: 5px;
    }
  }
</style>
