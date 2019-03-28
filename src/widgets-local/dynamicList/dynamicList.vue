/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:41:57 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 15:36:23
 */
// 动态组件列表
<template>
  <div class="dynamic-list">
    <!--{{ state[type] }}-->
   
    <!-- 添加 -->
    <div :class="{'dynamic-list-item': true, 'pointer': true, 'block': !!block}" v-if="isAdmin">
      <div @click="addWidget">
        <v-center :css="{width: '100%', height: '100%'}">
          <span style="font-size: 40px">+</span>
        </v-center>
      </div>
    </div>

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
        <div class="dynamic-action dynamic-modify" @click.stop="modify(item)" v-if="isAdmin" title="修改">
          m
        </div>
        <div class="dynamic-action dynamic-delete" @click.stop="del(item, index)" v-if="isAdmin" title="删除">
          &times;
        </div>
      </div>
    </div>


    <!--<div style="width:80%;margin: 10px;position: relative;min-height: 30px;" :class="{'dynamic-list-item-block': true, 'inmodify': true}">
        <v-center>
          <img 
            src="https://img.alicdn.com/imgextra/i2/105227988/O1CN01nnUvuK28sYGdZOn6O-105227988.png"
            alt=""
            style="width: 100%;border: 1px solid #dddddd;vertical-align: middle;"
            class="pointer">
          <div class="dynamic-action dynamic-modify pointer"  title="修改" style="right: 40px;top: 5px">
            m
          </div>
          <div class="dynamic-action dynamic-delete pointer" title="删除">
            &times;
          </div>
          <div class="widget-un-publish" >未开放</div>
          
        </v-center>
      </div>-->



    <!--block-->
    <div v-if="block&&lastAction=='success'" v-for="item, index in list">
      <div style="width:80%;margin: 10px;position: relative;min-height: 30px;" :class="{'dynamic-list-item-block': true, 'inmodify': item.id == activeId}">
        <v-center>
          <img 
            :src="item.image"
            alt=""
            style="width: 100%;border: 1px solid #dddddd;vertical-align: middle;"
            class="pointer" @click="setDynamic(item)">
          <div class="dynamic-action dynamic-modify pointer" @click.stop="modify(item)" v-if="isAdmin" title="修改" style="right: 40px;top: 5px">
            m
          </div>
          <div class="dynamic-action dynamic-delete pointer" @click.stop="del(item, index)" v-if="isAdmin" title="删除">
            &times;
          </div>
          <div class="widget-un-publish" v-if="item.p == false || item.p == 'false'">未开放</div>
          <!--{{ activeId }}-->
        </v-center>
      </div>
    </div>

    <!--分页-->
    <div style="text-align: center;">
      <pagination v-if="true" :pageSize="widgetPageSize" :pageNo="widgetPageNo" :count="widgetCount" @goToPage="widgetGoToPage"></pagination>
    </div>
    
    <div style="font-size: 30px;" class="center;" v-if="false">
       开发中···
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
      // console.log('------------------------------------');
      // console.log(JSON.stringify(item));
      this.addStep();
      this.itemData.is = item.name;
    },
    // 修改
    modify(item) {
      this.$store.dispatch('modifyDynamic', {item, type: this.type});
    },
    // 删除
    del(item, index) {
      this.$store.dispatch('deletePageStyle', {item})
    },
    // 添加组件
    addWidget() {
      this.$store.dispatch('addTemplateStyle', {type: this.itemData.type});
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
  .dynamic-list{

  }
  .dynamic-list-item.block{
    width: 84%;
  }
  .dynamic-list-item{
    display: inline-block;
    width: 32.3%;
    height: 150px;
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
  .dynamic-action{
    position: absolute;
    right: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #7D8699;
    color: white;
    font-size: 12px;
    text-align: center;
    
  }
  .dynamic-modify{
    bottom: 5px;
    line-height: 22px;
  }
  .dynamic-delete{
    top: 5px;
    line-height: 24px;
    font-size: 16px;
  }
  .dynamic-delete:hover{
    color: red;
  }
  .widget-loading{
    height: 200px;
    width: 80%;
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
</style>
