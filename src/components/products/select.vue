<template>
    <div class="m-product-select">
      <dl class="tab">
        <dt>
          {{name}}
          <i class="el-icon-caret-bottom"></i>
        </dt>
        <dd>
          <dt class="select-title">{{name}}</dt>
          <span v-for="(item, index) in list" :key="index">{{item.name}}</span>
        </dd>
      </dl>
    </div>
</template>

<script>
    import DateTable from "element-ui/packages/date-picker/src/basic/date-table";
    export default {
      components: {DateTable},
      props:[
          "name",
          "list"
        ]
    }
</script>

<style scoped>

</style>
