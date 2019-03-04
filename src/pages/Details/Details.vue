<template>
  <div>
    <div class="banner" @click="isShowGallary">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-tittle">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <Gallary :gallaryImgs="gallaryImgs" v-if="showGallary" @hiddenGallary ='hiddenGallary'/>
    </FadeAnimation>
    <Header :sightName="sightName"/>
    <div class="content">
      <List :categoryList="categoryList"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import Gallary from '../../common/Gallary/Gallary'
  import Header from '../../components/Detail/Header/Header'
  import List from '../../components/Detail/List/List'
  import FadeAnimation from '../../common/FadeAnimation/FadeAnimation'
  export default {
    data () {
      return {
        showGallary:false,
        bannerImg:'',
        categoryList:[],
        gallaryImgs:[],
        sightName:'',
      }
    },
    components:{
      Gallary,
      Header,
      List,
      FadeAnimation
    },
    mounted(){
      axios.get('/api/detail.json')
        .then((response)=>{
          this.bannerImg = response.data.data.bannerImg
          this.categoryList = response.data.data.categoryList
          this.gallaryImgs = response.data.data.gallaryImgs
          this.sightName = response.data.data.sightName
        })
        .catch(()=>{
          console.log('由于网络问题，数据没有请求到，请稍后再试！')
        })
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
