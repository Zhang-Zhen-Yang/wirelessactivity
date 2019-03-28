/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:29:02 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-12-dd 17:39:46
 */

<template>
  <div class="content-coupon">
    <div class="content-item-title">优惠券模块</div>
    
    <div class="content-item-wrap">
      <tab-setting :tabItem="['优惠券设置', '样式设置']">
          <div slot="first">
            <div class="content-item-sub-title">选择优惠券</div>
            <div class="content-coupon-table-wrap">
              <!-- {{ itemData.list }} -->
              <table>
                <thead>
                  <tr>
                    <th>名称</th>
                    <th>面额</th>
                    <th>条件</th>
                    <th style="width:160px;">时间</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item,index in itemData.list">
                    <!--旺店宝优惠券-->
                    <template v-if="item.from == 'wb'">
                      <td>{{item.name}}</td>
                      <td>{{ item.type == 'Discount' ? `${item.discountRate}折` : (item.type == 'Price' ? `${item.decreaseMoney}元` : (item.type == 'FreePostage' ? '免邮' : '')) }}</td>
                      <td>{{ item.totalPrice > 0 ? `满${item.totalPrice}元` : '无条件' }}</td>
                      <td>
                        <div>起:{{ item.startTime.time | datetime }}</div>
                        <div>止:{{ item.endTime.time | datetime }}</div>
                      </td>
                      <td class="right coupon-dismiss">
                        <div @click="removeCoupon(index)">
                          &times;
                        </div>
                      </td>
                    </template>
                    <!--官方优惠券-->
                    <template v-if="item.from == 'promotion'">
                      <td>{{item.name || '无'}}</td>
                      <td>{{ item.denominations }}</td>
                      <td>{{`满${item.condition}元`}}</td>
                      <td>
                        <div>起:{{ item.creatTime }}</div>
                        <div>止:{{ item.endTime}}</div>
                      </td>
                      <td class="right coupon-dismiss">
                        <div @click="removeCoupon(index)">
                          &times;
                        </div>
                      </td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>
            <p></p>
            <add-btn @click="add">优惠券</add-btn>
          </div>
          <div slot="second">
            <!--动态组件列表-->
            <dynamic-list type="coupon" :itemData="itemData"></dynamic-list>
          </div>
      </tab-setting>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-coupon',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          type: 'coupon',
          list: []
        }
      }
    },
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
    add() {
      this.$store.state.coupon.show = true;
      this.$store.state.coupon.itemData = this.itemData; 
    },
    // 删除优惠券
    removeCoupon(index) {
      this.itemData.list.splice(index, 1);
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .content-coupon{
    .content-coupon-table-wrap{
      border:1px solid #aaaaaa;
      padding: 5px 0 5px 5px;
      overflow: hidden;
    }
    table{
      font-size: 14px;
      width: 100%;
    }
    td{
      padding:5px 0;
    }
    .coupon-dismiss{
      padding: 0;
      &:hover {
        &>div{
          transform: translate(5px , 0);
        }
      }
      font-size: 30px;
      &>div{
        display: inline-block;
        background-color: #f7342a;
        color: white;
        text-align: center;
        width: 45px;
        cursor: pointer;
        transform: translate(48px , 0);
        transition: all 0.1s linear 0s;
      }
    }
  }
</style>
