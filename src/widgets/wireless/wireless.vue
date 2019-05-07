/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:38:20 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2019-04-11 14:49:12
 */
// wireless
<template>
  <div class="wireless"
    id="wireless"
    @dragover="dragover"
    @drop="drop"
    @dragout="dragout"
    @dragleave="dragout">
    <!-- 所有的组件 -->
    <div v-for="item, index in data.list" class="dynamic-item">
      <!--组件类型-->
      <div class="dynamic-item-type-name" v-if="dev">
        {{ item.type | widgetType }}
      </div>
      <action-wrap
        :index="index"
        :activeIndex="activeIndex"
        :count="data.list.length"
        :maskHeight="item.type == 'tab'? '30%' : '45%' "
        :type="item.type"
        @setActiveIndex="setActiveIndex"
        @setAction="setAction"
        @addWidget="addWidget"
      >
        <!-- <focusImg v-if="item.type == 'focusImg'" :data="item" :global="data.global" :index="index"></focusImg>
        <swipe v-if="item.type == 'swipe'" :data="item" :global="data.global" :index="index"></swipe>
        <one-row v-if="item.type == 'oneRow'" :data="item" :global="data.global" :index="index"></one-row>
        <two-row v-if="item.type == 'twoRow'" :data="item" :global="data.global" :index="index"></two-row>
        <three-row v-if="item.type == 'threeRow'" :data="item" :global="data.global" :index="index"></three-row>
        <group-goods v-if="item.type == 'groupGoods'" :data="item" :global="data.global" :index="index"></group-goods>
        
        <count-down v-if="item.type == 'countDown'" :data="item" :global="data.global" :index="index"></count-down>
        <one-row-horizontal v-if="item.type == 'oneRowHorizontal'" :data="item" :global="data.global" :index="index"></one-row-horizontal>
        <poster v-if="item.type == 'poster'" :data="item" :global="data.global" :index="index"></poster>
        <coupon v-if="item.type == 'coupon'" :data="item" :global="data.global" :index="index"></coupon>
        <tab v-if="item.type == 'tab'" :data="item" :global="data.global" :index="index"></tab>
        <hot-item v-if="item.type == 'hotItem'" :data="item" :global="data.global" :index="index"></hot-item>
        <promotion-meal v-if="item.type == 'promotionMeal'" :data="item" :global="data.global" :index="index"></promotion-meal>
        <video-block v-if="item.type == 'videoBlock'" :data="item" :global="data.global" :index="index"></video-block>
        <marquee-block v-if="item.type == 'marqueeBlock'" :data="item" :global="data.global" :index="index"></marquee-block>-->
        <div :class="['widget-item',  'widget-item'+ item.type]">
          <component :is="computedWidget(item.is || item.type)" :data="item" :global="data.global" :index="index" :width="getWidth(index)"></component>
        </div>
      </action-wrap>
    </div>
    <div class="position-tip" v-show="isDragover">
    </div>
  </div>
</template>

<script>
import stylesGenerate from './style';
import registerWidget from '../../script/registerWidget';
export default {
  name: 'wireless',
  props: {
    activeIndex: {
      type: Number,
      default: -1,
    },
    data: {
      type: [Object],
      default() {
        return {
          global: {},
          widgets: [],
          list: [
            {
              type: 'swipe',
            },
            {
              type: 'oneRow',
            },
            {
              type: 'twoRow',
            },
          ]
        }
      }
    }
  },
  data () {
    return {
      isDragover: false,
    }
  },
  computed: {
    style() {
      return this.data.style;
    },
    global(){
      return this.data.global;
    },
    title(){
      return this.global.title;
    },
    dev() {
      return window.dev;
    },
  },
  methods: {
    setActiveIndex(data) {
      this.$emit('setActiveIndex', data);
    },
    setAction(res) {
      this.$emit('setAction', res);
    },
    addWidget(res) {
      this.$emit('addWidget', res);
    },
    dragover(ev) {
      ev.preventDefault();
      if(ev.target.className == 'wireless') {
        this.isDragover = true;
      }
      
    },
    dragout(ev) {
      this.isDragover = false;
    },
    drop(ev) {
      // console.log('ddddddddddddd');
      // 如果已有模块，不作处理
      // if(this.data.list.length > 0) return;
      var data=ev.dataTransfer.getData("Text");
      ev.preventDefault();
      this.isDragover = false;
      this.$emit('addWidget', {data, index: this.data.list.length, dragArea: 'top'});
    },
    appendStyle() {
      if(!this.globalStyleTag2){
        this.globalStyleTag2 = document.createElement('style');
        this.globalStyleTag2.id = 'globalStyleTag2'
        document.querySelector('head').appendChild(this.globalStyleTag2);
      }
      this.globalStyleTag2.innerHTML=this.style;
    },
    renderGlobalStyle(){
      if(!this.globalStyleTag1){
        this.globalStyleTag1 = document.createElement('style');
        this.globalStyleTag1.id = 'globalStyleTag1'
        document.querySelector('head').appendChild(this.globalStyleTag1);
      }
      this.globalStyleTag1.innerHTML = stylesGenerate(this.global);
    },
    renderWidgetStyle(name, style){
      if(!this[`w-${name}`]){
        this[`w-${name}`] = document.createElement('style');
        this[`w-${name}`].id = `w-${name}`
        document.querySelector('head').appendChild(this[`w-${name}`]);
      }
      this[`w-${name}`].innerHTML = style;
    },
    setTitle(){
      if(!window.dev){
        document.querySelector('title').innerHTML = this.title || '无线活动页';
      }
    },
    computedWidget(type) {
      console.log(type);
      if(window.Vue) {
        // console.log('yyy');
        let widget = window.Vue.component(type);
        if(!widget) {
          // alert('dfddfdff');
          if(Array.isArray(this.data.widgets)) {
            // alert('dddddd');
            this.data.widgets.forEach((item, index) => {
              this.renderWidgetStyle(item.name, item.style);
              registerWidget.register(item, window.Vue);
              /* window.Vue.component(item.name, {
                template: item.template,
                data() {
                  return {
                    window: window,
                  }
                },
                props: {
                  data:{
                    type: Object,
                    default() {
                      return {
                        type: type,
                        list: [],
                      }
                    }
                  },
                  global: {
                    type: Object,
                    default() {
                      return {};
                    }
                  }
                }
              })*/
              
            })
          }
        }
      }
      return type;
    },
    getWidth(index) {
       if(this.rules) {
          console.log(this.rules);
       }
       return 300;
    }
  },
  created() {
    // console.log('created----------------------------------------------');
    this.renderGlobalStyle();
    this.appendStyle();
    this.setTitle();

    // alert('created');
    // console.log(globalStyleTag);
  },
  watch:{
    style(n,o){
      this.appendStyle();
    },
    global:{
      handler(curVal,oldVal){
        // console.log(curVal,oldVal);
        this.renderGlobalStyle();
      },
      deep:true
    },
    title: 'setTitle'
  },
  mounted() {
    /**/
  }
}
</script>

<style lang="scss">
  
  .center{
    text-align: center;
  }
  .wireless{
    min-height: 600px;
    dynamic-item: {
      margin-bottom: 5px;
    }
    // padding: 5px 5px 0 5px;
    &*{
      box-sizing: border-box;
    }
  }
  .dynamic-item{
    position: relative;
  }
  .position-tip{
    height: 30px;
    border: 2px dashed #E74C3C;
    background-color: white;
  }
  .dynamic-item-type-name{
    position: absolute;
    left: 100%;
    top: 0;
    font-size: 14px;
    background-color: white;
    border: 1px solid #dddddd;
    display: inline-block;
    white-space: nowrap;
    padding:3px;

  }

</style>
