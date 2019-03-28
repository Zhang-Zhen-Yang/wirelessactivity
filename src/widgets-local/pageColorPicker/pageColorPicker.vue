/*
 * @Author: zhangzhenyang 
 * @Date: yyyy-11-dd 14:10:47 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: yyyy-11-dd 14:10:47 
 */
// 页面拾色器
<template>
  <div class="page-color-picker-wrap" v-if="showMask">
    <div class="canvas-img-display">
    
    </div>
    <div class="page-color-picker" :style="style">    
    </div>
    <div class="fake-view">
      <wireless
        :data="data"
        :activeIndex="activeIndex">
      </wireless>
    </div>
  </div>
</template>

<script>
export default {
  name: 'widget-header',
  data () {
    return {
      showMask: false,
      pageX: 0,
      pageY: 0,
      currentNode: null,
      canvas: null,
      ctx: null,
      color: 'rgba(255, 255, 255, 1)'
    }
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    activeIndex() {
        return this.$store.state.activeIndex;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    style() {
      return {
        left: this.pageX +'px',
        top: this.pageY + 'px',
        borderColor: this.data.global.bgBody,
        borderLeftColor: this.color,
        borderTopColor: this.color,
      }
    }
  },
  methods: {
    click(){
      this.$emit('click');
    }
  },
  created() {
  },
  mounted() {
    if(this.isAdmin) {
      try{
        window.$(()=>{
          let _this = this;
          $('body').off('keydown').off('keyup').off('mousemove').off('contextmenu');
          $('body')
          .on('keydown', function(e){
            if(e.ctrlKey && e.which == 81) {
              _this.showMask = true;
            }
          })
          .on('keyup', function(e){
            // console.log(e);
            _this.showMask = false;
          })
          .on('mousemove',function(e){
            // console.log([e.pageX, e.pageY]);
            _this.pageX = e.pageX;
            _this.pageY = e.pageY;
          })
          .on('mousemove','.page-color-picker-wrap .dynamic-item', function(e){
            // console.log(this);
            let pageX = e.pageX;
            let pageY = e.pageY;
            let {left: positionLeft, top: positionTop} = $(this).offset();
            let cLeft = pageX - positionLeft;
            let cTop = pageY - positionTop;
            if(_this.ctx) {
              let imgD = _this.ctx.getImageData(cLeft, cTop, 1,1).data;
              _this.color = `rgba(${imgD[0]},${imgD[1]},${imgD[2]},${imgD[3]})`;
            }

            if(_this.currentNode != this) {
              _this.currentNode = this;
              ///////////////////////////////////////
              window.domtoimage.toCanvas(this)
              .then(function (canvas) {
                window.$('.canvas-img-display').empty().append(canvas);
                let context = canvas.getContext('2d');
                context.drawImage(canvas, 0, 0);
                _this.ctx = context;
              })
              .catch(function (error) {
                console.error('oops, something went wrong!', error);
              });
              //////////////////////////////////////
            }
          })
          .on('contextmenu', '.page-color-picker-wrap .dynamic-item', function(e){
            e.preventDefault();
            let pageX = e.pageX;
            let pageY = e.pageY;
            let {left: positionLeft, top: positionTop} = $(this).offset();
            let cLeft = pageX - positionLeft;
            let cTop = pageY - positionTop;
            if(_this.ctx) {
              let imgD = _this.ctx.getImageData(cLeft, cTop, 1,1).data;
              let color = `rgba(${imgD[0]},${imgD[1]},${imgD[2]},${imgD[3]})`;
              _this.color = color;
              _this.data.global.bgBody = color;
            }
          })
        })
      }catch(e){
        console.error(e);
      }
    }
  }
}
</script>

<style lang="scss">
  .page-color-picker-wrap{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0);
  }
  .page-color-picker{
    position: fixed;
    left: 100px;
    top: 100px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 15px solid red;
    border-left-color: orange;
    border-top-color: orange;
    box-shadow: 0 0 0 15px rgb(200, 200, 200);
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .fake-view{
    position: absolute;
    width: 100%;
    top: 100px;
    left: 0;
    opacity: 0;
  }
  .canvas-img-display{
    background-color: white;
    position: fixed;
    left: 0;
    top: 0px;
    z-index: 100;
  }
</style>
