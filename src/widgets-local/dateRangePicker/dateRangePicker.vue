/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:41:17 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-12-dd 10:01:26
 */
<template>
  <div class="temp">
    <!--<Vdatepicker :value="startDate" :language="zh" format="yyyy MMM dd"></Vdatepicker>
    <Vdatepicker :value="startDate"></Vdatepicker>-->
    <vDatePicker
      type="datetime"
      :first-day-of-week="1"
      range format="YYYY-MM-DD HH:mm:ss"
      v-model="timeRange"
      :editable="false"
      confirm confirm-text="确定">
    </vDatePicker>
  </div>
</template>

<script>
/* import {zh} from 'vuejs-datepicker/dist/locale'
import Vdatepicker from 'vuejs-datepicker';*/
import vDatePicker from 'vue2-datepicker'
export default {
  name: 'temp',
  components: { vDatePicker },
  props: {
    startDate: {
      type: [Number, String],
      default: Date.now(),
    },
    endDate: {
      type: [Number, String],
      default: Date.now() + 3600000*24,
    },
  },  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  },
  computed: {
    timeRange:{
      get(){
        return [new Date(this.startDate), new Date(this.endDate)]
      },
      set(e) {
        console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', e);
        const startTimeStamp = e[0] ? e[0].getTime() : '';
        const endTimeStamp = e[1] ? e[1].getTime() : '';
        this.$emit('change', [startTimeStamp, endTimeStamp]);
      }
    }
  },
  methods: {
    change(e) {
      setTimeout(()=>{
        console.log(this.time1);
      }, 1000)
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .vdp-datepicker{
    .cell.day.selected{
      color: white;
    }
  }
  .mx-datepicker-range{
    width: 100%;
  }
  .mx-shortcuts:nth-child(3),.mx-shortcuts:nth-child(4){
    display:none;
  }
</style>
