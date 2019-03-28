/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-01 15:32:07 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 09:09:56
 */

<template>
  <modal-dialog @dismiss="dismiss(0)" @confirm="dismiss(0)" title="修改代码" sty="width:1000px;">
    <contents slot="content" ref="contens"></contents>
    <!--footer-->
    <table slot="footer">
      <tr>
        <td class="left">
        
        </td>
        <td>
        </td>
        <td class="right">
          <button class="btn white" @click="confirm(false)">取消</button>
          <button class="btn primary" @click="confirm(true)">确定</button>
        </td>
      </tr>
    </table>
  </modal-dialog>
</template>

<script>
import contents from './dialogContent';
// import couponPromotion from './couponPromotion';
export default {
  name: 'dialog-code',
  components: { contents },
  data () {
    return {
    }
  },
  computed: {
    md() {
      return this.$store.state.dialogCode;
    },
   
    
  },
  methods: {
    dismiss(){
      this.md.show = false;
    },
    confirm(res) {
      if(res) {
        let value = this.$refs.contens.getValue();
        this.md.data.code = value;
      }
      this.dismiss();
    },
    
  },
  created() {
  
  }
}
</script>

<style lang="scss">

  
</style>