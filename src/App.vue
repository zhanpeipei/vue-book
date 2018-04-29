<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="seat"></div>
    <tab></tab>
  </div>
</template>

<script>
  import Tab from "components/tab"
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style type="text/less" lang="less">
  @import "~common/less/index";
  #app{
    max-width: 10rem;
    margin:0 auto;
    .seat{
      height:.97rem;
    }
  }

</style>
