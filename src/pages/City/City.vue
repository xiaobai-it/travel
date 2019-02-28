<template>
    <div>
      <cityHeader/>
      <citySearch/>
    </div>
</template>

<script>
  import cityHeader from '../../components/City/Header/Header'
  import citySearch from '../../components/City/Search/Search'

  export default {
    data() {
      return {
        message: ''
      }
    },
    components:{
      cityHeader,
      citySearch
    }
  }
</script>

<style scoped lang="">
</style>
