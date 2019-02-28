<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items,index) in pages" :key="index">
        <div class="icon" v-for="(item,index) in items" :key="index">
          <div class='icon-img'>
            <img class='icon-img-content' :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    props:['iconData'],
    data() {
      return {
        swiperOption:{ //轮播的配置属性
          loop: false,
          autoplay : false,
        }
      }
    },
    computed:{
      //用来显示首页中间轮播的页数
      pages(){
        //用来显示的页数
        const pages = []
        this.iconData.forEach((item ,index )=>{
          const page = Math.floor(index/8) //显示的索引
          if(!pages[page]){
            pages[page] = [] //这里pages变成了2维数组[index][item]
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/varibles.styl'
  @import '../../assets/styles/mixins.styl'
  .icons>>>.swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
