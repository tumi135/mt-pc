<template>
    <div class="m-detail-list">
      <h3>商家团购及优惠</h3>
      <ul class="m-detail-item">
        <h4>
          {{dealItems.length}}张优惠券
        </h4>
        <li class="section"  v-for="(item,index) in dealItems" :key="index">
          <div class="section-left">
            <div class="coupon">
              <p>￥<span>{{item.price}}</span></p>
              <span>{{item.title}}</span>
            </div>
            <div class="ti">
              <p>{{item.price}}元 {{item.title}}</p>
              <span>已售{{item.saleNum}}</span>
            </div>
          </div>
          <div class="button">
            <button><router-link :to="{name: 'indexPage'}">立即抢购</router-link></button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        props: [
          'dealItems'
        ]
    }
</script>

<style scoped>

</style>
