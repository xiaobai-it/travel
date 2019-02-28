<template>
    <div>
      <myHeader :city="city"/>
      <mySwiper :swiperData="swiperData"/>
      <myIcons :iconData="iconData"/>
      <myTuijian :tuijianData="tuijianData"/>
      <myweekedGoWhere :goWhere="goWhere"/>
    </div>
</template>

<script>
  import myHeader from '../../components/Home/Header/Header'
  import mySwiper from '../../components/Home/Swiper/Swiper'
  import myIcons from '../../components/Home/Icons/Icons'
  import myTuijian from '../../components/Home/TuiJian/Tuijian'
  import myweekedGoWhere from '../../components/Home/weekedGoWhere/weekedGoWhere'
  import axios from 'axios'

  export default {
    data() {
      return {
        swiperData:[],
        iconData:[],
        tuijianData:[],
        goWhere:[],
        city:'北京'
      }
    },
    components:{
      myHeader,
      mySwiper,
      myIcons,
      myTuijian,
      myweekedGoWhere
    },
    mounted(){
      axios.get('/api/index.json')
        .then((respose)=>{
          this.allData = respose.data.data
          console.log(this.allData)
          this.swiperData = this.allData.swiperList
          this.iconData = this.allData.iconList
          this.tuijianData = this.allData.recommendList
          this.goWhere = this.allData.weekendList
        })
    }
  }
</script>

<style>
</style>
