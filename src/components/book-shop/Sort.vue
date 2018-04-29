<template>
<ul>
  <li @click="link(data.id)" v-for="data in datas" :key="data.id" class="sort-item">
    <h4 class="sort-item-name">{{data.name}}</h4>
    <p class="sort-item-num">({{data.num}})</p>
  </li>
</ul>
</template>

<script>
  import {mapActions} from "vuex"
    export default {
        name: 'sort',
      methods:{
          link(id){
            this.selectClassId(id);
            this.$router.push(`/booksort/${id}`);
          },
        ...mapActions({
          "selectClassId":"selectClassId"
        })
      },
      props:{
        datas:{
          types:Array,
          default(){
            return [{name:"",num:"",id:""}]
          }
        }
      },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" type="text/less" scoped>
  @import "~common/less/variable";
.sort-item{
  text-align: center;
  line-height: 1.5;
  padding:.2rem 0;
  border-bottom:1px dashed @color-theme;
  .sort-item-name{
    font-size: @font-size-l;
  }
  .sort-item-num{
    font-size: @font-size-m;
  }
}
</style>
