<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="inputSearch" />
    </div>
    <div class="search-content" ref="myscroll" v-show="inputSearch">
      <ul>
        <li class="search-item border-bottom" v-for="(item,index) in list" :key="index"  @click="chooseCity">
          {{item}}
        </li>
        <li class="search-item border-bottom border-bottom-text" v-if="list.length<=0">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    props:['allCity'],//所有的城市对应的json数据
    data () {
      return {
        inputSearch:'',//搜索框输入的数据
        list:[],//把allCity对象遍历之后，放在这个数组中
        timer:null,//节流的标识符

      }
    },
    mounted(){
      console.log(this.$refs.myscroll);
      this.scroll = new Bscroll(this.$refs.myscroll)
    },
    methods:{
      //用户自己选择的城市
      chooseCity(e){
        const city = e.target.innerText
        this.$store.dispatch('chooseCity',{city})
        this.$router.push('/')
      }
    },
    watch:{
      inputSearch(){
        if(this.timer){
          clearTimeout(this.timer)
        }
        if(!this.inputSearch){
          this.list = [] //输入框没有输入内容，页面直接隐藏
          return
        }
        this.timer = setTimeout(()=>{
          // list:[],//把allCity对象遍历之后，放在这个数组中
          const finalArr =[]
          for(let i in this.allCity){
            this.allCity[i].forEach((item)=>{
             // spell:是城市名字的拼音
             // name:是城市名字的汉字
              if(item.name.indexOf(this.inputSearch) != -1 ||item.spell.indexOf(this.inputSearch)!=-1 ){
                finalArr.push(item.name)
              }
            })
          this.list = finalArr //list:[],//根据用户输入的值找到所有的数据，放在这个数组中
          }
        },100)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left :.2rem
      background: #fff
      color: #666
    .border-bottom-text
      text-align :center
</style>
