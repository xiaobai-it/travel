<template>
  <div>
    <div class="header-abs" v-if="!showOneHeader">
      <router-link to="/">
        <span class="iconfont back-icon">&#xe624;</span>
      </router-link>
    </div>
    <div class="header-fixed" :style="opacityBgColor" v-if="showOneHeader">
      <router-link to="/" class="header-fixed" >
        <span class="iconfont header-fixed-back">&#xe624;</span>
        故宫(AAAAA景区)
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showOneHeader: false,
        opacityBgColor:{
          opacity:0
        }
      }
    },
    mounted (){
    //activated生命周期的钩子函数，意思是只要界面显示，这个函数就会执行,但是不管用，换成了mountend
      window.addEventListener('scroll',this.isShowOneHeader)
    },
    methods:{
      isShowOneHeader(){
        const top = document.documentElement.scrollTop
        if(top > 60){
          this.showOneHeader = true
          let opacity = top / 150
          opacity = opacity > 1 ? 1 : opacity
          this.opacityBgColor.opacity=opacity
        }else{
          this.showOneHeader = false
        }
      }
    }


  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .back-icon
      color #fff
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff

</style>
