/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:35:42 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-29 15:00:04
 */
<template>
  <div class="count-down-default">
    <div class="count-down color-theme bg-block" v-if="step!= 2">
      距{{data.name}}{{ step == 0 ? '开始' : '结束'}} <countNum :num="day"/>天<countNum :num="hours"/>:<countNum :num="minutes"/>:<countNum :num="seconds"/>
    </div>
    <div class="count-down color-theme" v-else>
      活动已结束
    </div>
  </div>
</template>

<script>
import countNum from './countNum.vue'
export default {
  name: 'count-down',
  components: { countNum },
  props: {
    data: {
      type: Object,
      default() {
        return {
          type: 'countDown',
					startDate: Date.now() + 3600 * 1000,
					endDate: Date.now() + 3600 * 24 *1000,
          name: '',
        }
      }
    }
  },
  data () {
    return {
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      step: 0,
    }
  },
  computed: {

  },
  methods: {
    getTimeAmount() {
      // console.log('dddd');
      const now = Date.now();

      let amountDate;
      let step = 0;
      if(this.data.startDate > now) {
        step = 0;
        amountDate = this.data.startDate;
      }else {
        step = 1;
        amountDate = this.data.endDate;
      }
      // console.log(now >= this.data.endDate);

      if(now >= this.data.endDate) {
        step = 2;
        // return;
      } else {
        const amount = amountDate - now;
        const day = parseInt(amount / (3600 * 24 * 1000));
        const hours = parseInt((amount % (3600 *24 * 1000)) / (3600 * 1000));
        const minutes = parseInt(amount % (3600 * 1000) / (60 * 1000));
        const seconds = parseInt(amount % (60 * 1000) / 1000);
        // console.log([amount,day, hours, minutes,seconds]);
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
      }
      this.step = step;
      setTimeout(()=>{
        this.getTimeAmount();
      }, 1000)
    }
  },
  created() {
    this.getTimeAmount();
  },
  destroyed() {
    
  },
}
</script>

<style lang="scss">
.count-down-default{
  .count-down{
    background-color: white;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: orange;
  }
  .count-num{
    background-color: orange;    
  }
}
</style>
