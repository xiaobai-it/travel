<template>
    <div>
      <cityHeader/>
      <citySearch/>
      <cityList/>
      <cityName/>
    </div>
</template>

<script>
  import cityHeader from '../../components/City/Header/Header'
  import citySearch from '../../components/City/Search/Search'
  import cityList from '../../components/City/List/List'
  import cityName from '../../components/City/CityName/CityName'

  export default {
    data() {
      return {
        message: ''
      }
    },
    components:{
      cityHeader,
      citySearch,
      cityList,
      cityName
    }
  }
</script>

<style scoped lang="">
</style>
