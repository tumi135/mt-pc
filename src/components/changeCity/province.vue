<template>
    <div>
      <span class="name">按省份选择：</span>
      <m-select :value="province" title="省份" :list="provinceList" :showWrapperActive="provinceActive" @change_active="changeProvinceActive" @change="changeProvince" :className="province"/>
      <m-select :value="city" title="城市" :list="cityList" :showWrapperActive="cityActive" @change_active="changeCityActive" @change="changeCity" :disabled="cityDisable" :className="city"/>
      <span>直接搜索：</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中文或拼音"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in searchList"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
</template>

<script>
  // import {mapState, mapActions} from 'vuex'
  import api from '@/api'
  import MSelect from '@/components/changeCity/select'
    export default {
    data (){
      return {
        cityDisable: true,
        searchWord: '',
        provinceActive: false,
        cityActive: false,
        loading: false,
        provinceList: [],
        province:"省份",
        cityList: [],
        city:"城市",
        searchList: ["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西","凤凰","宁乡","新田","新宁","蓝山","衡阳县","石门","宁远县","华容","永兴县","双峰","隆回","江华瑶族自治县","平江","桃源","道县"]
      }
    },
      components: {
          MSelect
      },
      created (){
        api.getProvinceList().then(res =>{
          this.provinceList = res.data.data
            .map(item => {
              item.name = item.provinceName
            return item
          })
        })
      },
      methods: {
        changeProvinceActive(flag){
          this.provinceActive = flag
          if(flag){
            this.cityActive = false
          }
        },
        changeCityActive(flag){
          this.cityActive = flag
          if(flag){
            this.provinceActive = false
          }
        },
        remoteMethod (){
          //请求后端接口
        },
        changeProvince(item){
          this.province = item.name
          this.cityDisable = false
          this.cityList = item.cityInfoList
        },
        changeCity(item){
          this.city = item.name
          this.$store.dispatch('setPosition',item)
          console.log(item)
          this.$router.push({name: 'indexPage'})
        }
      }
    }
</script>

<style lang="scss">
  @import '@/assets/css/changecity/select.scss';
  @import '@/assets/css/changecity/iselect.scss';
</style>
