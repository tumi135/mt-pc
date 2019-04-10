<template>
    <div class="m-product-categroy">
      <dl class="classic">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="(item, index) in classicList" :key="index">
          <m-select :name="item.title" :list="item.subList"/>
        </dd>
      </dl>
      <dl class="classic">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="(item, index) in areaList" :key="index">
          <m-select :name="item.title" :list="item.subList"/>
        </dd>
      </dl>
    </div>
</template>

<script>
  import MSelect from './select'
    export default {
        data() {
          return {
            classicList: [{
              "title": "美食",
              "type": "food",
              "subList": [{
                "name": "日本菜",
                "id": "Japan"
              }, {
                "name": "饮品店",
                "id": "drink"
              }, {
                "name": "面包甜点",
                "id": "cate"
              }]
            }, {
              "title": "酒店住宿",
              "type": "hotal",
              "subList": [{
                "name": "温泉酒店",
                "id": "hot_spring"
              }, {
                "name": "经济型酒店",
                "id": "economy"
              }, {
                "name": "高端酒店",
                "id": "high"
              }]
            }],
            areaList:  [{
              "title": "推荐商圈",
              "subList": [{
                "name": "望京",
                "id": 120000
              }, {
                "name": "昌平",
                "id": 12222
              }]
            }, {
              "title": "南岗区",
              "subList": [{
                "name": "中央大街",
                "id": 123
              }, {
                "name": "西客站",
                "id": 11
              }, {
                "name": "花园街",
                "id": 222
              }, {
                "name": "通乡街/果园街",
                "id": 21
              }, {
                "name": "爱建社区",
                "id": 1
              }, {
                "name": "学府路",
                "id": 34
              }]
            }]
          }
        },
      components: {
        MSelect
      }
    }
</script>

<style scoped>

</style>
