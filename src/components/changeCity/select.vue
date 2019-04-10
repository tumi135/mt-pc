<template>
    <div :class="['choose-wrap', disabled?'disable':'']" @click="showWrapper" v-document-click="documentClick">
      <div class="choose">
        <span>{{value}}</span>
        <i class="el-icon-caret-bottom"></i>
        <div :class="{'mt-content': true, active: showWrapperActive}">
          <h2>{{title}}</h2>
          <div :class="['mt-wrapper',className]">
            <div class="col" v-for="(v, index) in renderList" :key="index">
              <span :class="{'mt-item': true, 'active': item == value}" v-for="(item, i) in v" :key="i" @click="changeValue(item)">{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
      props: ["list", "value","title","showWrapperActive","disabled","className"],
        data(){
          return {
            myList: [],
            // iList: []
          }
        },
      computed: {
        renderList (){
          let col = Math.ceil(this.list.length/12)
          let resuList = []
          for(let i = 0; i < col; i++){
            let data = this.list.slice(i * 12, i * 12 + 12)
            resuList.push(data)
          }
          return resuList
        }
      },
      watch: {

      },
      mounted (){
        // this.myList = this.list
        // this.iList = []
        // console.log(this.list)
        // let i = 0
        // do {
        //   this.iList[i] = this.myList.splice(0,12)
        //   i ++
        // }while (this.myList.length != 0)
      },
      methods: {
        showWrapper(e) {
          e.stopPropagation()
          // this.showWrapperActive = true
          if(!this.disable) {
            this.$emit('change_active', true)
          }
        },
        documentClick(){
          // this.showWrapperActive = false
          this.$emit('change_active', false)
        },
        changeValue (item){
          this.$emit('change', item)
        }
      }
    }
</script>

<style scoped>

</style>
