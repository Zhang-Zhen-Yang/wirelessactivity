/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:38:13 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-27 16:58:34
 */
// 组件头部
<template>
  <div class="widget-header" :style="css">
    <table v-if="title || link">
      <tr>
        <td>{{ title }}</td>
        <td>
          <a-link :href="link">···更多</a-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'widget-header',
  props: {
    title: {
      type: String,
      default:'',
    },
    link: {
      type: String,
      default: '',
    },
    css: {
      type: Object,
      default() {
        return {}
      }
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
  .widget-header{
    background-color: white;
    table{
      width: 100%;
    }
    td{
      font-size: 14px;
    }
    td:first-child{
      text-align: left;
    }
    td:last-child{
      text-align: right;
    }
  }
</style>
