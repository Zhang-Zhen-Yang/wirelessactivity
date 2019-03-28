/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:27:12 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 15:06:32
 */

/* 宝贝列表弹窗*/
<template>
  <modal-dialog @dismiss="dismiss(0)" @confirm="dismiss(0)" title="选择宝贝">
    
    <!-- subHeader-->
    <table slot="subHeader">
      <tr>
        <td class="left">
          <dialog-tab :tabs="['所有宝贝','活动宝贝']" :tabIndex="tabIndex" @setTabIndex="(index)=>{tabIndex = index;}"></dialog-tab>
        </td>
        <td class="right" style="width: 200px;">
          <!--<search-input value="ha ha ha" @search="search"></search-input>&emsp;-->
        </td>
      </tr>
    </table>

    <!--content-->
    <div class="dialog-goods-content-wrap" slot="content" >
      <table>
        <tr>
          <td class="left" style="white-space:nowrap;padding-left: 13px;">
            <!-- 活动类型 -->
            <Dropdown grouped v-if="tabIndex==1" :data="promotionActivity" :width="200" :cbChanged="promotionChange" :cbCustomSelectedText="promotionLabel"></Dropdown>

            <!-- 出售中，仓库中 -->
            <Dropdown v-if="tabIndex==0" :data="typeData" :width="100" :cbCustomSelectedText="typeValue" :cbChanged="typeChange"></Dropdown>
            <!-- 宝贝分类 -->
            <Dropdown v-if="tabIndex==0" :data="sellerCats" :width="150" :cbCustomSelectedText="sellerCatValue" :cbChanged="sellerCatChange"></Dropdown>

          </td>
          <td class="right" style="padding-right: 25px;">
            <search-input v-if="tabIndex==0" :value="keyword" @search="search" placeholder="搜索：关键字、宝贝链接、商家编码"></search-input>
          </td>
        </tr>
      </table>
      <!-- 加载成功 -->
      <!--<dialogGoodsDefault v-if="tabIndex == 0"></dialogGoodsDefault>-->
      <div class="dialog-goods-content scrollbar-overwrite" v-if="tabIndex==0&&lastAction=='success'&&goodslist.length > 0">
        <div v-for="item,index in goodslist" class="dialog-goods-item relative">
          <table :class="['pointer', 'relative', item.num_iid == selectedGood.num_iid ? 'dialog-goods-selected-good' : '']" @click="toggleChange(item, index)">
            <tr>
              <td rowspan="3" width="35%" cellspacing="0" cellpadding="0" style="">
                <div :style="{backgroundImage:`url(${item.pic_url})`}" class="pic-display">
                </div>
              </td>
              <td class="dialog-goods-title" >
                
                <div style="height: 3em;">
                  <a :href="`https://item.taobao.com/item.htm?id=${item.num_iid}`" target="_blank" @click.stop="">
                    {{ item.title }}
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="font12">¥</span>
                <span>{{item.price }}</span>
              </td>
            </tr>
            <tr>
              <td class="right">
                <checkbox
                  v-if="mode=='add'"
                  ref="checkbox"
                  :value="numIids.indexOf(item.num_iid) > -1"
                  @change="(checked, e, inputRef)=>{change(checked, e, index,inputRef)}">
                  </checkbox>&nbsp;
                <img class="absolute dialog-goods-checked-icon" :src="checkedIcon" alt="">
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 加载成功 1-->
      <div class="dialog-goods-content scrollbar-overwrite" v-if="tabIndex==1&&lastAction=='success'&&promotionGoodsList.length > 0">
        <div v-for="item,index in promotionGoodsList" class="dialog-goods-item">
          <table :class="['pointer', 'relative', item.num_iid == selectedGood.num_iid ? 'dialog-goods-selected-good' : '']" @click="toggleChange(item, index)">
            <tr>
              <td rowspan="3" width="35%" cellspacing="0" cellpadding="0" style="">
                <div :style="{backgroundImage:`url(${item.pic_url})`}" class="pic-display">
                  <!-- <img :src="item.pic_url" alt=""> -->
                </div>
              </td>
              <td class="dialog-goods-title" >
                
                <div style="height: 3em;">
                  <a :href="`https://item.taobao.com/item.htm?id=${item.num_iid}`" target="_blank" @click.stop="">
                    {{ item.title }}
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="font12">¥</span>
                <span>{{item.price }}</span>
              </td>
            </tr>
            <tr>
              <td class="right">
                <checkbox
                  v-if="mode=='add'"
                  ref="checkbox"
                  :value="numIids.indexOf(item.num_iid) > -1"
                  @change="(checked, e, inputRef)=>{change(checked, e, index,inputRef)}">
                  </checkbox>&nbsp;
                <img class="absolute dialog-goods-checked-icon" :src="checkedIcon" alt="">
              </td>
            </tr>
          </table>
        </div>
      </div>


      <content-notice :lastAction="tabIndex == 0 ?lastAction : promotionLastAction" :count="tabIndex == 0 ? goodslist.length : promotionGoodsList.length"></content-notice>
    </div>

    <!--footer-->
    <table slot="footer">
      <tr>
        <td class="left">
          <span v-if="mode=='add'">已选{{ this.itemData.list.length }}/{{ allowCount }}</span>
        </td>
        <td>
          <!--分页-->
          <pagination v-if="tabIndex==0" :pageSize="pageSize" :pageNo="pageNo" :count="count" @goToPage="goToPage"></pagination>
          <pagination  v-if="tabIndex==1" :pageSize="promotionPageSize" :pageNo="promotionPageNo" :count="promotionCount" @goToPage="promotionGoToPage"></pagination>
        </td>
        <td class="right">
          <button v-if="mode=='add'" class="btn primary" @click="confirm">完成</button>
          <template v-if="mode=='alternative'">
            <button class="btn white" @click="confirm(false)">取消</button>
            <button class="btn primary" @click="confirm(true)">确定</button>
          </template>
        </td>
      </tr>
    </table>
  </modal-dialog>
</template>

<script>
import goodslist from '../../script/fakegoodslist';
import dialogGoodsDefault from './dialogGoodsDefault';
export default {
  name: 'dialog-goods',
  components: { dialogGoodsDefault },
  data () {
    return {
      data:[{
        label: 'Volvo',
        value: 1
      }, {
        label: 'Saab',
        value: 2
      }, {
        label: 'Long long long long long long test',
        value: 2
      }],
      typeData: [
        {
          label: '出售中',
          value: 'onsale',
        },
        {
          label: '仓库中',
          value: 'instock',
        }
      ],
      typeMapData: {
        onsale: '出售中',
        instock: '仓库中'
      },
      selectedGood: {},
    }
  },
  computed: {
    md() {
      return this.$store.state.dialogGoods;
    },
    mode() {
      return this.md.mode;
    },
    goodslist(){
      // return goodslist.list;
      return this.md.list;
    },
    promotionGoodsList() {
      return this.md.promotionList || [];
    },
    modals(){
      return this.$store.state.modals;
    },
    tabIndex: {
      get() {
        return this.md.tabIndex;
      },
      set(index) {
        this.md.tabIndex = index;
      }
    },
    list() {
      return this.md.list;
    },
    pageSize() {
      return this.md.pageSize;
    },
    promotionPageSize(){
      return this.md.promotionPageSize;
    },
    pageNo() {
      return this.md.pageNo;
    },
    promotionPageNo() {
      return this.md.promotionPageNo;
    },

    count() {
      return this.md.count;
    },
    promotionCount() {
      return this.md.promotionCount;
    },
    lastAction(){
      return this.md.lastAction;
    },
    promotionLastAction(){
      return this.md.promotionLastAction;
    },
    type:{
      get(){
        return this.md.type;
      },
      set(type){
        this.$store.state.dialogGoods.type = type;
      }
    },
    keyword:{
      get() {
        return this.md.keyword;
      }
    },
    cid:{
      get() {
        return this.md.cid;
      },
      set(cid) {
        this.$store.state.dialogGoods.cid = cid;
      }
    },
    sellerCats(){
      return this.$store.state.dialogGoods.sellerCats.map((item,index)=>{
        return {
          label: item.name,
          value: item.id,
        }
      })
    },
    promotionActivity() {
      return this.md.promotionActivity;
    },
    itemData() {
      return this.md.itemData;
    },
    allowCount() {
      return this.md.allowCount;
    },
    numIids() {
      return this.itemData.list.map((item)=>{
        return item.num_iid;
      });
    },
     checkedIcon() {
      return `${window.assets}checked.svg`
    },
  },
  methods: {
    dismiss(){
      this.md.show = false;
    },
    confirm(res) {
      if(this.mode == 'add') {
        this.dismiss();
      } else if(this.mode == 'alternative'){
        if(!res) {
           
        } else {
          this.addStep();
          if(this.selectedGood && this.selectedGood.num_iid) {
            console.log(JSON.stringify(this.itemData));
            this.itemData.list.splice(0, 1, {...this.selectedGood});
          }
        }
        this.dismiss();
      }
    },
    toggleChange(item, index) {
      // 如果是添加模式
      if(this.mode == 'add') {
        let checked = true;
        if(this.numIids.indexOf(item.num_iid) > -1) {
          checked = false;
        }
        this.change(checked, null, index, null);

      } else if(this.mode == 'alternative'){
        // 如果替换模式
        this.selectedGood = item;
        // console.log(JSON.stringify(item));
      }
    },
    change(checked,e,index,inputRef) {
      // 添加
      if(checked) {
        if(this.itemData.list.length < this.allowCount) {
          this.addStep();
          let item = this.tabIndex == 0 ? this.goodslist[index] : this.promotionGoodsList[index];

          let newItem = {...item};
          this.$store.dispatch('getPromotion', {item: newItem});


          this.$store.state.dialogGoods.itemData.list.push(newItem);
        } else {
          this.$nextTick(()=>{
            let text = `该模块最多能选择 ${this.allowCount} 个宝贝`;
            this.$store.commit('showSnackbar',{text, timeout: 1000});
            if(inputRef) {
              inputRef.checked = false;
              this.$refs.checkbox[index].checked = false;
            }
            // alert(inputRef.checked);
            // console.log(this.$refs.checkbox[index]);
          })
        }
      }else { // 删除
        this.addStep();
        let distList = (this.$store.state.dialogGoods.itemData.list).filter((item)=>{
          return item.num_iid != (this.tabIndex == 0 ? this.goodslist[index] : this.promotionGoodsList[index]).num_iid;
        });
        // console.log(distList);
        this.$store.state.dialogGoods.itemData.list = distList;
      }
    },
    // 搜索
    search(value) {
      // alert(value);
      this.$store.state.dialogGoods.keyword = value;
      this.init();
    },
    goToPage(e) {
      this.$store.dispatch('fetchGoods', {pageNo: e});
    },
    promotionGoToPage(e){
      this.$store.dispatch('fetchPromotionGoods', {pageNo: e});
    },
    typeValue() {
      return this.typeMapData[this.type];
    },
    promotionLabel() {
      return this.md.activityName || '请选择活动';
    },
    typeChange(type) {
      this.type = type[0].value;
      this.init();
    },
    sellerCatValue() {
      let sellerCatLable = '';
      this.sellerCats.forEach((item, index)=>{
        // console.log([item.value, this.cid]);
        if(item.value == this.cid) {
          sellerCatLable = item.label;
        }
      });
      // alert(sellerCatLable);
      return sellerCatLable;
    },
    sellerCatChange(sellerCat) {
      let sellerCatId = sellerCat[0].value;
      this.cid = sellerCatId;
      // console.log(sellerCatId);
      this.init();
    },
    promotionChange(promotion) {
      console.log(JSON.stringify(promotion));
      const {type, id, label} = promotion[0];
      this.$store.state.dialogGoods.promotion = type;
      this.$store.state.dialogGoods.activityId = id;
      this.$store.state.dialogGoods.activityName = label;
      this.promotionInit();
    },
    init(){
      this.$store.dispatch('fetchGoods', {pageNo: 1});
    },
    promotionInit(){
      this.$store.dispatch('fetchPromotionGoods', {pageNo: 1});
    },
    addStep() {
      this.$store.dispatch('addStep');
    }
  },
  created() {
    if(this.lastAction == 'error' || (this.goodslist.length == 0)) {
      this.init();
    }
    if(this.promotionLastAction == 'error' || (this.promotionGoodsList.length == 0)) {
      this.promotionInit();
    }
    if(this.sellerCats.length == 0) {
      this.$store.dispatch('getSellerCats');
    }
    this.$store.dispatch('loadPromotionActivity');
  
  }
}
</script>

<style lang="scss">
  // content
  .dialog-goods-content-wrap{
    width: 100%;
    height: 100%;
    padding-top: 90px;
    padding-bottom: 95px;
  }
  .dialog-goods-content{
    height: 100%;
    overflow: auto;
    padding: 0 10px;
    text-align: left;
  }
  
  .dialog-goods-item{
    display: inline-block;
    width: 33.3%;
    padding: 5px;
    text-align: left;
    table{
      border: 1px solid #aaaaaa;
    }
    img{
      width: 100%;
    }
    td{
      // padding: 5px;
    }
    .pic-display{
      width: 92px;
      height: 92px;
      background-size: contain;
      background-position: center center;
      background-repeat:no-repeat;
    }
    .dialog-goods-checked-icon{
      position: absolute;
      width: 50px;
      right: -1px;
      bottom: -1px;
      display: none;
    }
    .dialog-goods-selected-good{
      border: 1px solid #1284e7;
      .dialog-goods-checked-icon{
        display: block;
      }
    }
  }
</style>
