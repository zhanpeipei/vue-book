<template>
  <div>
    <div class="book-shop-top">
      <i class="icon-fangdajing"></i>
    </div>
    <swiper :options="options" class="top-slider" :needIntro="topSliderNeedIntro" :sliders="sliderData"
            :newClass="sliderClassName">
    </swiper>
    <panel :datas="moduleMan" :title="moduleManTitle"></panel>
    <panel :datas="moduleFeman" :title="moduleFemanTitle"></panel>
    <panel :datas="moduleRecommend" :title="moduleRecommendTitle"></panel>
    <panel :datas="modulePlusRecommend" :title="modulePlusRecommendTitle"></panel>
    <sort :datas="sort"></sort>
  </div>
</template>

<script>
  import Swiper from "components/base/Swiper"
  import Panel from "components/base/Panel"
  import Sort from "./Sort"
  import {getSliderList, getModules,getSort} from "api/bookshop"
  import {getBooks} from "common/js/class"
  import {ERR_OK} from "common/js/config"

  export default {
    name: 'book-shop',
    components: {
      Swiper,
      Panel,
      Sort
    },
    created() {
      this._getSliders();
      this._getModules();
      this._getSort();
    },
    methods: {
      _getSliders() {
        getSliderList().then(res => {
          if (res.status == ERR_OK) {
            let data = res.data.data.module1;
            data.forEach(item => {
              this.sliderData.push(getBooks(item))
            })
          }
        })
      },
      _getModules() {
        getModules().then(res => {
          if (res.status == ERR_OK) {
            let data = res.data.data;
            data.module2.forEach((item, index) => {
              this.moduleMan.push(getBooks(item));
              this.moduleFeman.push(getBooks(data.module3[index]));
              this.moduleRecommend.push(getBooks(data.module4[index]));
              this.modulePlusRecommend.push(getBooks(data.module5[index]));
            })
          }
        })
      },
      _getSort(){
        getSort().then(res=>{
          if(res.status==ERR_OK){
            let data=res.data.show.module6.class_data;
            for(let key in data){
              if(data.hasOwnProperty(key)){
                  let ary=[];
                  ary.id=key;
                ary.name=data[key]["name"];
                  ary.num=data[key]["num"];
                  this.sort.push(ary);
                  ary=null;
              }
            }
          }
        })
      },
    },
    data() {
      return {
        topSliderNeedIntro: false,
        options: {
          effect: "coverflow",
          loop: true,
          slidesPerView: 2,
          centeredSlides: true,
        },
        sliderData: [],
        moduleManTitle: "男频榜单",
        moduleFemanTitle: "女频榜单",
        moduleRecommendTitle: "分类推荐榜",
        modulePlusRecommendTitle: "强力推荐榜",
        moduleMan: [],
        moduleFeman: [],
        moduleRecommend: [],
        modulePlusRecommend: [],
        sliderClassName: "book-shop-top-sliders",
        sort:[],
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "~common/less/variable";
  .book-shop-top{
    height: .3rem;
    padding-right: .2rem;
    background: rgba(255,255,255,.3);
    .icon-fangdajing{
      float: right;
      margin-top: .2em;
      font-size: @font-size-l;

    }
  }
  .top-slider {
    margin: .2rem 0;
  }

  .swiper-slide-href {
    display: block;
    background: url("~common/img/logo.png");
    .swiper-slide-href-img {
      display: block;
      width: 100%;
    }
  }
</style>
