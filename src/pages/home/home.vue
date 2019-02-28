<template>
    <div>
      <myHeader/>
      <mySwiper/>
      <myIcons/>
      <myTuijian/>
      <myweekedGoWhere/>
    </div>
</template>

<script>
  import myHeader from '../../components/Header/Header'
  import mySwiper from '../../components/Swiper/Swiper'
  import myIcons from '../../components/Icons/Icons'
  import myTuijian from '../../components/TuiJian/Tuijian'
  import myweekedGoWhere from '../../components/weekedGoWhere/weekedGoWhere'

  export default {
    data() {
      return {
        message: '',
      }
    },
    components:{
      myHeader,
      mySwiper,
      myIcons,
      myTuijian,
      myweekedGoWhere
    }
  }
</script>

<style>
</style>
