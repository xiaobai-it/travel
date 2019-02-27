<template>
    <div>
      <myHeader/>
      <mySwiper/>
    </div>
</template>

<script>
  import myHeader from '../../components/Header/Header'
  import mySwiper from '../../components/Swiper/Swiper'

  export default {
    data() {
      return {
        message: '',
      }
    },
    components:{
      myHeader,
      mySwiper
    }
  }
</script>

<style>
</style>
