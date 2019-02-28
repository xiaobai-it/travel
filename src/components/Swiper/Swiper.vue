<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg" alt=""/></swiper-slide>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg" alt=""/></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          loop: true,
          autoplay : 3000,
        }
      }
    },

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
