<template>
    <div class="m-menu">
      <dl class="i-nav" @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd v-for="(item, index) in menuList" :key="index" v-on:mouseenter="menuEnter(item)">
          <i :class="item.type"></i>
          {{item.name}}
          <span class="arrow"></span>
        </dd>
      </dl>
      <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template  v-for="(item,index) in curDetail.items">
          <h2 :key="index">{{item.title}}</h2>
          <span v-for="(v, i) in item.items" :key="v +'_'+ i">{{v}}</span>
        </template>
      </div>
    </div>
</template>

<script>
  import api from '@/api'
    export default {
      data (){
        return {
          curDetail: null,
          menuList: []
        }
      },
      methods: {
        menuEnter (e){
          this.curDetail = e
        },
        menuLeave (){
          let self = this
          this.timer = setTimeout(function () {
            self.curDetail = null
          },300)
          // this.curDetail = null
        },
        detailEnter (){
          clearTimeout(this.timer)
        },
        detailLeave (){
          this.curDetail = null
        }
      },
      created (){
        api.menu().then(res =>{
          this.menuList = res.data.data
        })
      }
    }
</script>

<style lang="scss">
</style>
