<template>
<div class="panel">
  <h3 class="panel-title">{{title}}</h3>
  <swiper :sliders="datas" :needIntro="needIntro" :options="options" :newClass="newClass">
  </swiper>
</div>
</template>

<script>
  import Swiper from "components/base/Swiper"
    export default {
        name: 'panel',
      components:{
        Swiper
      },
      props:{
          title:{
            type:String,
            default:""
          },
        datas:{
            type:Array,
          default(){
              return[]
          }
        }
      },
        data() {
            return {
              options: {
                slidesPerView: 2.6,
                spaceBetween:20,
              },
              needIntro:true,
              newClass:"panel-content",

            }
        }
    }
</script>

<style lang="less" type="text/less" scoped>
  @import "~common/less/variable";
.panel{
  padding: .2rem;
  .panel-title{
    margin:.2rem 0;
    padding-left:.2rem;
    border-left: .02rem solid @color-theme;
    font-size: @font-size-l;
  }
}
</style>
