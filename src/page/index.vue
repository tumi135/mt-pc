<template>
    <div class="page-index">
      <el-row>
        <el-col :span="5">
          <m-menu/>
        </el-col>
        <el-col :span="19">
          <m-life/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <m-container v-bind:list="gList" v-bind:myName="gName" v-bind:bg="gColor"/>
          <m-container v-bind:list="oList" v-bind:myName="oName" v-bind:bg="oColor"/>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import MMenu from '@/components/index/menu'
  import MLife from '@/components/index/life'
  import MContainer from '@/components/index/container'
  import api from '@/api'
    export default {
        data() {
          return {
            gList: {
              all: [{
                image: 'https://p1.meituan.net/mogu/605ea10e6b12a9c1cc26edc23909fcd51313876.png@368w_208h_1e_1c',
                title: '淼鑫猪肚鸡(犀牛角店)',
                sub_title: '2-3人餐,提供免费WiFi',
                current_price: 18,
                old_price: 36,
                address: '白云区'
              },
                {
                  image: 'https://p1.meituan.net/msmerchant/be203d7b2f22059341a504e2acb8173970809.jpg@368w_208h_1e_1c',
                  title: '储缘蛋糕(汇太中路店)',
                  sub_title: '储缘蛋糕 8英寸欧式水果生日蛋糕 领先推出蛋糕店送货上门贴心服务的理念',
                  current_price: 218,
                  old_price: 136,
                  address: '天河区'
                },{
                  image: 'https://p0.meituan.net/wedding/dbeecbaf22d88f1f757fa8cef587c6f513066.png@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                  title: '伊丽汇美容养生(番禺雅居乐店)',
                  sub_title: '2-3人餐,提供免费WiFi',
                  current_price: 18,
                  old_price: 36,
                  address: '白云区'
                },{
                  image: 'https://p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c',
                  title: '淼鑫猪肚鸡(犀牛角店)',
                  sub_title: '2-3人餐,提供免费WiFi',
                  current_price: 18,
                  old_price: 36,
                  address: '白云区'
                },{
                  image: 'https://p1.meituan.net/deal/9beb3f0e009864007a39f7241e1abfc7380113.jpg@368w_208h_1e_1c',
                  title: '淼鑫猪肚鸡(犀牛角店)',
                  sub_title: '2-3人餐,提供免费WiFi',
                  current_price: 18,
                  old_price: 36,
                  address: '白云区'
                },{
                  image: 'https://p0.meituan.net/msmerchant/dff9f32b0fa89473cb002278fa47de0c84337.jpg@368w_208h_1e_1c',
                  title: '淼鑫猪肚鸡(犀牛角店)',
                  sub_title: '2-3人餐,提供免费WiFi',
                  current_price: 18,
                  old_price: 36,
                  address: '白云区'
                }],
              food: [{
                image: 'https://p1.meituan.net/mogu/605ea10e6b12a9c1cc26edc23909fcd51313876.png@368w_208h_1e_1c',
                title: '淼鑫猪肚鸡(犀牛角店)',
                sub_title: '2-3人餐,提供免费WiFi',
                current_price: 18,
                old_price: 36,
                address: '白云区'
              },
                {
                  image: 'https://p1.meituan.net/msmerchant/be203d7b2f22059341a504e2acb8173970809.jpg@368w_208h_1e_1c',
                  title: '储缘蛋糕(汇太中路店)',
                  sub_title: '储缘蛋糕 8英寸欧式水果生日蛋糕 领先推出蛋糕店送货上门贴心服务的理念',
                  current_price: 218,
                  old_price: 136,
                  address: '天河区'
                }],
              movie: [{
                image: 'https://p0.meituan.net/wedding/dbeecbaf22d88f1f757fa8cef587c6f513066.png@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                title: '伊丽汇美容养生(番禺雅居乐店)',
                sub_title: '2-3人餐,提供免费WiFi',
                current_price: 18,
                old_price: 36,
                address: '白云区'
              },{
                image: 'https://p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@368w_208h_1e_1c',
                title: '淼鑫猪肚鸡(犀牛角店)',
                sub_title: '2-3人餐,提供免费WiFi',
                current_price: 18,
                old_price: 36,
                address: '白云区'
              }],
              spa: [{
              image: 'https://p1.meituan.net/deal/9beb3f0e009864007a39f7241e1abfc7380113.jpg@368w_208h_1e_1c',
              title: '淼鑫猪肚鸡(犀牛角店)',
              sub_title: '2-3人餐,提供免费WiFi',
              current_price: 18,
              old_price: 36,
              address: '白云区'
            },{
              image: 'https://p0.meituan.net/msmerchant/dff9f32b0fa89473cb002278fa47de0c84337.jpg@368w_208h_1e_1c',
              title: '淼鑫猪肚鸡(犀牛角店)',
              sub_title: '2-3人餐,提供免费WiFi',
              current_price: 18,
              old_price: 36,
              address: '白云区'
            }],
              travel: [{
              image: 'https://p0.meituan.net/msmerchant/dff9f32b0fa89473cb002278fa47de0c84337.jpg@368w_208h_1e_1c',
              title: '淼鑫猪肚鸡(犀牛角店)',
              sub_title: '2-3人餐,提供免费WiFi',
              current_price: 18,
              old_price: 36,
              address: '白云区'
            }]
          },
            oList: {},
            gColor: '#c2b08e',
            oColor: '#a0c283',
            gName: '有格调',
            oName: '有乐趣'
        }},
      created (){
        api.getResultProducts().then(res => {
          this.oList = res.data.data
        })
      },
        components: {
          MMenu,
          MLife,
          MContainer
        }
    }
</script>

<style lang="scss">
  @import '@/assets/css//index/index.scss';
</style>
