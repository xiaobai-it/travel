<template>
  <div>
    <div class="banner" @click="isShowGallary">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="banner-info">
        <div class="banner-tittle">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          8
        </div>
      </div>
    </div>
    <Gallary :imgs="imgs" v-if="showGallary" @hiddenGallary ='hiddenGallary'/>
    <Header/>
    <div class="content"></div>
  </div>
</template>

<script>
  import Gallary from '../../common/Gallary/Gallary'
  import Header from '../../components/Detail/Header/Header'
  export default {
    data () {
      return {
        showGallary:false,
        imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
          'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
      }
    },
    components:{
      Gallary,
      Header
    },
    methods:{
      isShowGallary(){
        this.showGallary = true
      },
      hiddenGallary(){
        this.showGallary = false
      }
    }

  }
</script>

<style lang="stylus" scoped>
    .content
      height :50rem
    .banner
      position: relative
      overflow: hidden
      height :0
      padding-bottom :55%
      .banner-img
        width:100%
      .banner-info
        position: absolute
        left :0
        right :0
        bottom :0
        line-height :.6rem
        display :flex
        color :#fff
        background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
        .banner-tittle
          flex :1
          font-size :.32rem
          padding :0 .2rem
        .banner-number
          margin-top :.14rem
          padding :0 .3rem
          line-height :.32rem
          height :.32rem
          border-radius :.2rem
          background :rgba(0,0,0,.8)
          font-size :.24rem
          .banner-icon
            font-size :.24rem
</style>
