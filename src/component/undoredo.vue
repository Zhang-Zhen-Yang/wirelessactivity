/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:31:30 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-05 13:38:58
 */
// 撤销 重做
<template>
  <div class="undo-redo">
    <table>
      <tr>
        <td class="center" style="width:72px;">
          <div class="undo-icon pointer" :title="`撤销(${prevSteps.length})`" :style="{backgroundImage: `url(${undo})`}" @click.stop="setStep('undo')">
          </div>
        </td>
        <td style="width: 89px;">
          <div class="redo-icon pointer" :title="`重做(${nextSteps.length})`" :style="{backgroundImage: `url(${redo})`}" @click.stop="setStep('redo')">
          </div>
        </td>
        <td style="width: 89px;">
          <div class="clear-icon pointer" :title="`清除内容`" :style="{backgroundImage: `url(${clear})`}" @click.stop="clearup">
          </div>
        </td>
        <td>
          <div class="view-icon pointer" :title="`预览`" :style="{backgroundImage: `url(${view})`}" @click.stop="preview">
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'undo-redo',
  data () {
    return {
    }
  },
  computed: {
    undo() {
      return `${window.assets}undo.svg`;
    },
    redo() {
      return `${window.assets}redo.svg`;
    },
    clear(){
      return `${window.assets}table-column-remove.svg`;
    },
    view(){
      return `${window.assets}view.svg`;
    },
    state() {
      return this.$store.state.undoredo;
    },
    prevSteps() {
      return this.state.prevSteps;
    },
    nextSteps() {
      return this.state.nextSteps;
    },
  },
  methods: {
    setStep(type) {
      this.$store.dispatch('setStep', {type});
    },
    clearup() {
      if(confirm('确定要删除所有模块')){
        this.$store.dispatch('addStep');
        this.$store.dispatch('clearup');
      }
    },
    preview() {
      this.$store.dispatch('preview')
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .undo-redo{
    width: 350px;
    position: absolute;
    left: 0;
    top: 60px;
    z-index: 1;
    .undo-icon,.redo-icon, .clear-icon, .view-icon{
      display: inline-block;
      width: 24px;
      height: 24px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .clear-icon{
      margin-left: 50px;
    }

  }
</style>
