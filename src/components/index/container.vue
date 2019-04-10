<template>
    <div class="m-istyle">
      <dl @mouseover="over" :style="{background:bg}">
        <dt>{{myName}}</dt>
        <dd data-type="all" :class="{active: kind == 'all'}">全部</dd>
        <dd data-type="food" :class="{active: kind == 'food'}">约会聚餐</dd>
        <dd data-type="spa" :class="{active: kind == 'spa'}">丽人SPA</dd>
        <dd data-type="movie" :class="{active: kind == 'movie'}">电影演出</dd>
        <dd data-type="travel" :class="{active: kind == 'travel'}">品质出游</dd>
      </dl>
      <ul class="ibody">
        <li v-for="(item,index) in list[kind]" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.image" class="image">
            <div class="cbody">
              <div class="title" :title="item.title">{{item.title}}</div>
              <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
              <div class="price-info"  v-if="item.old_price">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">{{item.current_price}}</span>
                </span>
                <span class="old-price">门市价¥{{item.old_price}}</span>
                <span class="sold bottom-right-info">{{item.address}}</span>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      props: [
        'list',
        'myName',
        'bg'
      ],
      data() {
        return{
          kind: 'all'
        }
      },
      methods: {
          over(e){
            let dom = e.target
            let tagName = dom.tagName.toLowerCase()
            if(tagName != 'dd'){
              return false
            }
            this.kind = dom.getAttribute('data-type')
            //ajax
          }
      }
    }
</script>

<style lang="scss">
  @import '@/assets/css/index/artistic.scss';
</style>
