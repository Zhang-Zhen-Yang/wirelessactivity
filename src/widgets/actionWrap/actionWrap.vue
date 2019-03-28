/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:35:14 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-01 15:02:33
 */
// action-wrap
<template>
  <div
    :class="['action-wrap', index == activeIndex ? 'active' : 'inactive', `action-wrap-${type}`, sub ? 'action-wrap-sub' : '']"
    :style="style"
    @click.stop="setActivity"
    @dragover="allowDrop($event)"
    @dragout="dragout($event)"
    @dragleave="dragout($event)"
    @drop.stop="drop($event)"
  >
    <div class="active-tip" v-if="!sub">
      {{ index + 1 }}
    </div>
    <div class="active-tip-sub font12" v-if="sub && index == activeIndex">
      {{ index + 1 }}
    </div>
    <div class="position-tip" v-show="isDragover&&dragArea=='top'">
    </div>
    <!-- 位置操作 -->
    <div v-if="index == activeIndex" class="action-reorder">
      
      <!--向上-->
      <div v-if="index > 0" class="action-trigger action-up" @click.stop="setAction({type: 'up', index: index})" :style="{backgroundImage: `url(${up})`}">
      </div>
      <!-- 向下-->
      <div v-if="index < count - 1" class="action-trigger action-down" @click.stop="setAction({type: 'down', index: index})" :style="{backgroundImage: `url(${down})`}">
          
      </div>
      <!--删除-->
      <div class="action-trigger action-delete" @click.stop="setAction({type: 'delete', index: index})" :style="{backgroundImage: `url(${del})`, 'backgroundSize': '70% 70%'}">
      </div>
    </div>

    <slot></slot>
    <div class="position-tip" v-show="isDragover&&dragArea=='bottom'">
    </div>
    <!-- 用于判断将拖放的组件放置于何处 -->

    <div class="dragover-mask mask-top" @dragover="setDragArea($event, 'top')" v-if="isDragover" :style="{height: maskHeight}">
    </div>
    <div class="dragover-mask mask-bottom" @dragover="setDragArea($event, 'bottom')" v-if="isDragover" :style="{height: maskHeight}">
    </div>

  </div>
</template>

<script>
export default {
  name: 'action-wrap',
  props: {
    index: {
      type: Number,
      default: 0,
    },
    activeIndex: {
      type: Number,
      default: -1,
    },
    count: {
      type: Number,
      default: 0,
    },
    maskHeight: {
      type: String,
      default: '50%',
    },
    sub: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      deafult: '',
    }
  },
  data () {
    return {
      isDragover: false,
      dragArea: 'top',
      width: 375,
    }
  },
  computed: {
    style() {
      if(this.sub) {
        return {
          borderLeftWidth:0,
          borderRightWidth:0,
        }
      }
      return;
    },
    up() {
      return `${window.assets}up.svg`;
    },
    down() {
      return `${window.assets}down.svg`;
    },
    del() {
      return `${window.assets}delete.svg`;
    },
  },
  methods: {
    // 
    setActivity() {
      this.$emit('setActiveIndex', {activeIndex: this.index});
    },
    setAction(res) {
      this.$emit('setAction', res);
    },
    allowDrop(ev) {
      // console.log(ev.dataTransfer.getData("Text"));
      this.isDragover = true;
      ev.preventDefault();
    },
    dragout(ev) {
      this.isDragover = false;
    },
    drop(ev){
      this.isDragover = false;
      var data=ev.dataTransfer.getData("Text");
      ev.preventDefault();
      this.$emit('addWidget', {data, index: this.index, dragArea: this.dragArea});
      // console.log(data);
    },
    setDragArea(ev, area) {
      this.dragArea = area;
    }

  },
  created() {
   
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .action-wrap{
    position: relative;
    // border: 1px solid transparent;
  }
  .action-wrap.active{
    background-color: #2C3E50;
    // border: 2px solid #2C3E50;
    // box-shadow: 0 0 0 5px #2C3E50;
    .active-tip{
      height: 100%;
      background: pink;
    }
    
  }
  .action-reorder{
    text-align: left;
    padding: 5px 0px 5px 0px;
  }
  .action-trigger{
    display: inline-block;
    background-color: white;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 90% 90%;
  }
  .dragover-mask{
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(0,0,0,0)
  }
  .dragover-mask.mask-top{
    top: 0;
  }
  .dragover-mask.mask-bottom{
    bottom: 0;
  }

  .active-tip{
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: red;
    top: 0;
    left: -40px;
    color: red;
    text-align: center;
    font-size: 12px;
    line-height:2em;
  }
  .active-tip-sub{
      height: 100%;
      width: 20px;
      text-align: center;
      // background-color: red;
      position: absolute;
      left: -21px;
      background-color: #7D8699;
      color: white;
      line-height:2em;
    }
</style>
