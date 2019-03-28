/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-29 11:47:11 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-09 15:39:49
 */
<template>
  <modal-dialog :sty="'width: 300px;height:150px;'" :showHeader="false" :showFooter="false">
    
    <div slot="content" class="loading-mask">
      <table>
        <tr>
          <td >
            <div class="icon-wrap relative">
              <material-spinner></material-spinner>
            </div>
          </td>
        </tr>
        <tr>
          <td class="center">
            {{ text }}
          </td>
        </tr>
      </table>        
    </div>
    
  </modal-dialog>
</template>

<script>
export default {
  name: 'loading-mask',
  props: {
    text: {
      type: String,
      default: '加载中···'
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
  }
}
</script>

<style lang="scss">
  .loading-mask{
    .icon-wrap{
      width: 100%;
      height: 108px;
    }
    table{
      width: 100%;
    }
  }
</style>
