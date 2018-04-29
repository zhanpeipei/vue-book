<template>
  <ul class="bottom-nav">
    <router-link tag="li" to="/bookshelf" class="bottom-nav-btn">
      <i class="icon-shujia icon"></i>
      书架
    </router-link>
    <router-link tag="li" to="/bookshop" class="bottom-nav-btn">
      <i class="icon-shu icon"></i>
      书城</li>
    </router-link>
    <router-link tag="li" to="/bookfree" class="bottom-nav-btn">
      <i class="icon-xiaolian icon"></i>
      免费
    </router-link>
    </li>
  </ul>
</template>

<script>
//  import  getL from "api/bookshop"
import axios from "axios"
    export default {
        name: 'tab',
        created(){
//          let data=new FormData;
//          data.append("pageId",1);
//          data.append("timestamp",1524981821);
//          data.append("sign","71bd6bdecabe8138c2c01c6a6d9c2f4a");
//          axios.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/pageinfo",data).then(res=>console.log(res))
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" type="text/less" scoped="">
  @import "~common/less/mixin";
  @import "~common/less/index";
.bottom-nav{
  position: fixed;
  background: @color-bg-white;
  z-index: 5554;
  .list;
  height: .97rem;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  .bottom-nav-btn{
    flex: 1;
    text-align: center;
    font-size: @font-size-s;
    color:@color-font-gray;
    padding-top: .6rem;
    position: relative;
    line-height: .37rem;
    .icon{
      font-size: @font-size-l;
      position: absolute;
      margin-left:-@font-size-l/2;
      left: 50%;
      top: .25rem;
    }
    &.active{
      .icon{
        color:@color-theme;
      }
    }
  }
}


</style>
