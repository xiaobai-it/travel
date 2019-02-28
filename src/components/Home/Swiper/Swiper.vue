<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperData.length">
      <swiper-slide v-for="(item) in swiperData " :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt=""/>
      </swiper-slide>

      <!--<swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg" alt=""/></swiper-slide>-->

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props:['swiperData'],
    data() {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          loop: true,
          autoplay : 3000,
        },
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: deepskyblue
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
