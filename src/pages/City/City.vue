<template>
    <div>
      <cityHeader/>
    </div>
</template>

<script>
  import cityHeader from '../../components/City/Header/Header'

  export default {
    data() {
      return {
        message: ''
      }
    },
    components:{
      cityHeader
    }
  }
</script>

<style scoped lang="">
</style>
