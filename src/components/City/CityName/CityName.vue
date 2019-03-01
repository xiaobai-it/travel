<template>
  <ul class="list">
    <li class="item" v-for="(item,key) in allCity" :key="key" :ref="key"
        @click="handleCityNmae" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd"
    >{{key}}</li>
  </ul>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    props:['allCity'],
    data () {
      return {
        isTouchMove : false, //标记右侧26个城市字母是否在滚动的状态
      }
    },
    computed:{
      cityNameArr(){
        //allCity对象变成数组
        const  cityArr = []
        for( let item in this.allCity){
          cityArr.push(item)
        }
        return cityArr //['A','B','C','D'...,'Z']
      }
    },
    methods:{
      handleCityNmae(e){
        const cityName = e.target.innerHTML
        PubSub.publish('cityName',cityName)
      },
      handleTouchStart(){
        this.isTouchMove = true
      },
      handleTouchMove(e){
        if(this.isTouchMove){
          //allCity对象变成数组,调用计算属性里面的cityNameArr方法
          // this.cityNameArr
          const startY = this.$refs['A'][0].offsetTop //字母A自身到顶部的距离
          const touchY = e.touches[0].clientY - 79 //手指距离页面顶部的距离
          const index = Math.floor((touchY - startY) / 20 ) //对应的26个字母的下标，从0 开始
          if(index >=0 && index <= this.cityNameArr.length){
            PubSub.publish('cityName',this.cityNameArr[index])
          }
        }
      },
      handleTouchEnd(){
        this.isTouchMove = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
