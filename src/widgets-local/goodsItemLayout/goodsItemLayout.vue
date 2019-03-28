/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:42:04 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-19 11:27:23
 */
// 宝贝列表
<template>
  <div>
    <div class="goods-item-layout" v-for="item, index in list">
      <table cellspacing="0" cellpadding="0">
        <tr>
          <td rowspan="2" width="22%" class="relative main-pic" @mouseover="fetchData(item)">
            <img :src="item.pic_url" alt="">
            <mainPicAlternative v-if="editable" :numIid="item.num_iid" :item="item" @selectImg="(url)=>{selectImg(item, url)}"></mainPicAlternative>
          </td>
          <td>
            <div class="goods-item-layout-price" v-if="!editable">
              {{ item.price|pri }}
            </div>
            <label for="" v-if="editable">
              特价：
            </label>
            <input type="number" v-model="item.price" v-if="editable" @focus="addStep" style="width: 114px;">
            <label for="" v-if="editable">
              原价：
            </label>
            <input type="number" v-model="item.prev_price" v-if="editable" @focus="addStep" style="width: 114px;">
            
          </td>
        </tr>
        <tr>
          <td>
            <div class="goods-item-layout-title" v-if="!editable">
              {{ item.title }}
            </div>
            <label for="" v-if="editable">
              名称：
            </label>
            <textarea type="text" v-model="item.title" rows="3" v-if="editable" @focus="addStep"></textarea>
            
          </td>
        </tr>
      </table>
      <!--mask-->
      <div class="goods-item-layout-mask" v-if="!editable">
        <div
          class="goods-action-icon goods-delete"
          @click="setAction('del', index)">&times;</div>
        <div
          class="goods-action-icon goods-down"
          v-if="index +1 < list.length"
          @click="setAction('d',index)"
          :style="{backgroundImage: `url(${d})`}"></div>
        <div
          class="goods-action-icon goods-up"
          @click="setAction('u', index)"
          v-if="index > 0"
          :style="{backgroundImage: `url(${u})`}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-item-layout',
  props: {
    // 宝贝列表
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    editable: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    u() {
      return `${window.assets}up.svg`;
    },
    d() {
      return `${window.assets}down.svg`;
    },
    del() {
      return `${window.assets}delete.svg`;
    },
  },
  methods: {
    setAction(type, index) {
      // alert(type);
      let pickItem;
      let distIndex
      switch(type){
        case 'u':
          if(index == 0) {
						return;
					}
          this.addStep();
					pickItem = this.list.splice(index, 1);
					this.list.splice(index - 1,0,pickItem[0]);
          break;
        case 'd':
          this.addStep();
          pickItem = this.list.splice(index + 1, 1)
					this.list.splice(index,0,pickItem[0]);
          break;
        case 'del':
          this.addStep();
					pickItem = this.list.splice(index, 1);
          break;
        default: break;
      }
    },
    fetchData(item){
      this.$store.dispatch('getItemInfo',{num_iid: item.num_iid});
    },
    selectImg(item, url) {
      this.addStep();
      item.pic_url = url;
    },
    addStep() {
      this.$store.dispatch('addStep');
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .goods-item-layout{
    border: 1px solid #dddddd;
    margin: 10px 0;
    position: relative;
    &:hover .goods-item-layout-mask{
      display: block;
    }
    table: {
      width: 100%;
    }
    td:last-child{
      padding: 0 5px;
    }
    img{
      width: 100%;
      vertical-align: middle;
    }
    .goods-item-layout-price,.goods-item-layout-title{
      padding: 5px;
    }
    .goods-item-layout-price{
      font-size: 20px;
      font-weight: bold;
    }
    .goods-item-layout-title{
      font-size: 14px;
      color: #666666;
    }
    // mask
    .goods-item-layout-mask{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.2);
      display: none;
    }
    label{
      font-size: 14px;
    }
    input{
      width: 280px;
    }
    textarea{
      vertical-align: top;
      resize: none;
      width:280px;
      font-family: 微软雅黑;
    }
    .main-pic:hover .main-pic-alternative{
      display: block;
    }
  }
  

</style>
