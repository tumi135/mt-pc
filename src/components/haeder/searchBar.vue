<template>
    <div class="search-panel">
      <el-row class="m-header-searchbar">
        <el-col :span="3" class="left">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png">
        </el-col>
        <el-col :span="15" class="center">
          <div class="wrapper">
            <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
            <el-button type="primary" icon="el-icon-search"></el-button>
            <dl class="hotPlace" v-if=" isHotPlace">
              <dt>热门搜索</dt>
              <dd v-for="(v, i) in hotPlaceList" :key="i">
                <router-link :to="{name: 'goodsList', params: {name: v}}">{{v}}</router-link>
              </dd>
            </dl>
            <dl class="searchList" v-if="isSearchList">
              <dd v-for="(item, index) in searchLists" :key="index">
                <router-link :to="{name: 'goodsList', params: {name: item}}">{{item}}</router-link>
              </dd>
            </dl>
          </div>
          <p class="suggest">
            <router-link :to="{name: 'goodsList', params: {name: vItem}}" v-for="(vItem, vIndex) in hotPlaceList" :key="vIndex">{{vItem}}</router-link>
          </p>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import axios from '@/axios'
    export default {
        data (){
          return {
            searchWord: '',
            isFocus: false,
            hotPlaceList: [],
            suggestList: [],
            searchLists: []
          }
        },
      created() {
          axios.get('/api/meituan/header/searchHotWords.json',{
            params: {
              // appkey: 'tumi135_1549867404830'
            }
          }).then(res => {
            this.hotPlaceList = res.data.data
            this.suggestList = res.data.data
          })
      },
      computed: {
        isHotPlace (){
          return this.isFocus && !this.searchWord
        },
        isSearchList (){
          axios.get('/api/meituan/header/search.json',{
            params: {
              // appkey: 'tumi135_1549867404830'
            }
          }).then(res => {
            this.searchLists = res.data.data.list.filter((item,index) => {
              return item.indexOf(this.searchWord) > -1
            })
          })
          return this.isFocus && this.searchWord
        }
      },
      methods: {
          focus (){
            this.isFocus = true
          },
        blur (){
            let self = this
          setTimeout(function () {
            self.isFocus = false
          },200)
        }
      }
    }
</script>

<style lang="scss">

</style>
