<template>
    <div class="container" @click="hiddenGallary">
        <div class="wrapper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(img,index) in gallaryImgs " :key="index">
              <img class="swiper-img" :src="img" alt=""/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
    </div>
</template>

<script>
  export default {
    props:{
      gallaryImgs:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        swiperOption:{
          pagination: '.swiper-pagination',
          paginationType:'fraction'
          // loop: true,
          // autoplay : 3000,
        },
      }
    },
    methods:{
      hiddenGallary(){
        this.$emit('hiddenGallary')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow :inherit
  .container
    display :flex
    flex-direction :column
    justify-content :center
    z-index :99
    position :fixed
    top :0
    left :0
    right :0
    bottom :0
    background #000
    .wrapper
      background #ccc
      width :100%
      height :0
      /*overflow :hidden*/
      padding-bottom :100%
      .swiper-img
        width :100%
      .swiper-pagination
        color :#fff
        font-weight :bold
        bottom :-1rem

</style>
