/*
 * @Author: zhangzhenyang 
 * @Date: 2018-12-12 15:32:21 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-13 10:18:09
 */
// 管理员保存模板时设置左边拖动添加时要选择哪个模板
<template>
  <div class="save-set-drag-widget">
    <div style="background-color:#2e303a;color:white;line-height:50px;padding:0 10px;">
      设置拖动左侧组件时使用的样式
    </div>
    <!--各个组件-->
    <div class="widget-item-drag-style-wrap scrollbar-overwrite">
      <div v-for="item,index in dragWidgets" class="widget-item-drag-style" v-if="item.require">
        <table>
          <tr>
            <td rowspan="3">
              <div v-if="item.id" :style="{backgroundImage: `url(${(idMapItem[item.id] || {}).image})`}" class="widget-image">
              
              </div>
              <div v-else class="widget-image"></div>
            </td>
            <td class="font14">
              {{ item.type | widgetType }} | ID: <span v-if="item.id">{{item.id}}</span><span v-else style="color:red;">无</span>
            </td>
          </tr>
          <tr>
            <td>
              
            </td>
          </tr>
          <tr>
            <td style="vertical-align:bottom;">
                <button class="btn primary" @click="selectStyle(item)" style="font-size:14px; padding: 11px 22px;">选择样式</button>
            </td>
          </tr>
        </table>

      </div>
      <!--{{ idMapItem }}
      -------------------------------------
      {{ dragWidgets }}-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'save-set-drag-widget',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    dragWidgets() {
      return this.data.dragWidgets;
    },
    idMapItem() {
      return this.$store.getters.idMapItem;
    }
  },
  methods: {
    // 选择样式
    selectStyle(item) {
      this.$store.state.dialogSave.widgetShow = true;
		  this.$store.state.dialogSave.widgetType= item.type;
		  this.$store.state.dialogSave.widgetItem= item;
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .save-set-drag-widget{
    position:fixed;
    left:0;
    top:0;
    width:300px;
    background-color:white;
    height:100%;
    .widget-image{
      width: 100px;
      height: 100px;
      border: 1px solid #aaaaaa;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .widget-item-drag-style{
    border: 1px solid #aaaaaa;
    padding: 5px;
    margin:10px;
    height:125px;
  }
  .widget-item-drag-style-wrap{
    height:calc(100% - 50px);
    overflow: auto;
  }
  
</style>
