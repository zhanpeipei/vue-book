<template>
  <swiper :options="options" :class="newClass">
    <!-- slides -->
    <swiper-slide v-for="slider in sliders" :key="slider.id" @click="link(slider.id)">
      <div class="swiper-slide-href">
        <div class="swiper-slide-wrap">
          <img :src="slider.cover" class="swiper-slide-href-img">
        </div>
        <h3 v-if="needIntro" class="swiper-slide-title">{{slider.book}}</h3>
        <p v-if="needIntro" class="swiper-slide-author">{{slider.author}}</p>
    </div>

    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'swi',
    components: {
      swiper,
      swiperSlide
    },
    methods:{},
    props: {
      needIntro:{
        type:Boolean,
        default:false,
      },
      newClass: {
        type: String,
        default: ""
      },
      sliders: {
        type: Array,
        default() {
          return [{cover: ""}]
        }
      },
      options: {
        type: Object,
        default() {
          return {
            lazy: false,
            autoplay: false,
            direction: "horizontal",
            loop: true,
            effet: "slide",
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween:0,
            pagination: {
              el: ".sweper-pagination"
            }
          }
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "~common/less/variable";
  @import "~common/less/mixin";
  .swiper-slide {
    .swiper-slide-href {
      display: block;
      text-align: center;
      line-height: 1.5;
      .swiper-slide-wrap{
        background: url("~common/img/logo.png");
        .swiper-slide-href-img {
          display: block;
          width: 100%;
        }
        .swiper-slide-title{
          font-size: @font-size-m;
          .nowrap;

        }
        .swiper-slide-author{
          font-size: @font-size-s;
          .nowrap;
        }
      }
    }
  }
  .book-shop-top-sliders {

  }
  .panel-content{
    .swiper-slide-title{
      font-size: @font-size-m;
      .nowrap;
    }
    .swiper-slide-author{
      font-size: @font-size-s;
      .nowrap;
    }
  }
  /*.book-shop-top-sliders{*/
  /*.swiper-slide{*/
  /*width:auto;*/
  /*.swiper-slide-href{*/
  /*.swiper-slide-href-img{*/
  /*display: block;*/
  /*}*/
  /*}*/

  /*}*/
  /*}*/
</style>
