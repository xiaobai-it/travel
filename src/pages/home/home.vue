<template>
    <div>
      <myHeader/>
      <mySwiper/>
      <myIcons/>
    </div>
</template>

<script>
  import myHeader from '../../components/Header/Header'
  import mySwiper from '../../components/Swiper/Swiper'
  import myIcons from '../../components/Icons/Icons'

  export default {
    data() {
      return {
        message: '',
      }
    },
    components:{
      myHeader,
      mySwiper,
      myIcons
    }
  }
</script>

<style>
</style>
