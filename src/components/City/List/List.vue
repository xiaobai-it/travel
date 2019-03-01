<template>
  <div class="list" ref="wraperScroll">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper" v-for="(item) in hotCity" :key="item.id">
            <div class="button" @click="chooseCity">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in allCity" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="(oneItem) in item" :key="item.id" @click="chooseCity">
            {{oneItem.name}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import PubSub from 'pubsub-js'
  import {mapActions ,mapState} from 'vuex'

  export default {
    props:['allCity','hotCity'],
    data() {
      return {
        cityName:''
      }
    },
    mounted(){
      this.scroll = new Bscroll(this.$refs.wraperScroll)
      PubSub.subscribe('cityName',(msg,cityName)=>{
        this.cityName = cityName
      })
    },
    computed:{
      ...mapState(['city'])
    },
    methods:{
      //用户自己选择的城市
      // ...mapActions(['chooseCity'])
      chooseCity(e){
        const city = e.target.innerText
        this.$store.dispatch('chooseCity',{city})
        this.$router.push('/')
      }
    },
    watch:{
      cityName(){
        //监听界面右侧的26个字母触发后改变的值
        if(this.cityName){
          //通过Bscroll第三方库，自动滚动到对应的字母位置,添加的是滚动的对应的元素标签
          const element = this.$refs[this.cityName][0]
          this.scroll.scrollToElement(element) //这个是Bscroll第三方库自己带有的方法
        }
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
