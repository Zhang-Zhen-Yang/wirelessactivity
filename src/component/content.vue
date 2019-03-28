/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:30:50 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 15:47:52
 */
// 内容区
<template>
  <div id="content" @click="contentClick">
    <div class="scrollbar-overwrite" id="scroll-content">
      <undo-redo></undo-redo>
      <div id="phone-display">
        <div id="phone-all">
          <!--手机顶部-->
          <phone-top></phone-top>
          <!-- 内容区 -->
          <wireless
            v-if="show"
            :data="data"
            :activeIndex="activeIndex"
            @setActiveIndex="setActiveIndex"
            @setAction="setAction"
            @addWidget="addWidget"
          />
          <phoneBottom></phoneBottom>
          <pageColorPicker v-if="true"></pageColorPicker>
        </div>
      </div>
      <!--回到顶部-->
      <backTop></backTop>
    </div>
    
  </div>
</template>

<script>
import phoneTop from './phone-top.vue'
import phoneBottom from './phone-Bottom.vue'
import undoRedo from './undoredo.vue'
import backTop from './BackTop.vue'

export default {
  name: 'temp',
  components: { phoneTop, phoneBottom, undoRedo,backTop },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      aa: '5',
      show: true,
    }
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    activeIndex() {
        return this.$store.state.activeIndex;
    },
    dynamicWidgets() {
      return this.$store.state.dynamic.widgets;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
  methods: {
    setActiveIndex(res) {
      this.$store.commit('setActiveIndex', res);
    },
    setAction(res) {
      this.$store.dispatch('setAction', res);
    },
    // 添加组件
    addWidget(res) {
      this.$store.dispatch('addWidget', res);
    },
    contentClick(){
      this.setActiveIndex(-1);
    }
  },
  created() {
    // console.log('created');
    // console.log(this.$util);
  },
  mounted() {
    if(this.isAdmin) {
      try{
        window.$(()=>{
          window.$('#phone-display')
          .draggable({
            handle: "#phone-top,.active-tip",
            axis: "x",
          })
          /* .resizable({
            handles: 'ne, se, nw, sw',
          })*/
        })
      }catch(e){
        console.error(e);
      }
    }
  },
  watch: {
    dynamicWidgets: {
      handler(v){
        console.log('v', v);
        this.show = false,
        this.$nextTick(()=>{
          this.show = true;
        });
      },
      deep: true,
    }
  }
}
</script>

<style lang="scss">
  #content{
    height: 100%;
    position: absolute;
    left: 300px;
    right: 500px;
    top: 0;
    // overflow: scroll;
    padding-top: 50px;
    // padding-bottom: 50px;
    margin-bottom: 50px;
    background-color: #f0f0f0;
    border-right: 1px solid #efefef;

    &>div{
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  }
  #phone-display{
    width: 375px;
    min-height: 750px;
    position: relative;
    border: 1px solid #dddddd;
    margin: 20px auto;
    border-radius: 45px;
    box-shadow: 0 0 50px rgba(50,50,50,0.1);
  }
  
</style>
