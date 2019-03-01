<template>
    <div>
      <cityHeader/>
      <citySearch :allCity="allCity" />
      <cityList :allCity="allCity" :hotCity="hotCity"/>
      <cityName :allCity="allCity"/>
    </div>
</template>

<script>
  import axios from 'axios'

  import cityHeader from '../../components/City/Header/Header'
  import citySearch from '../../components/City/Search/Search'
  import cityList from '../../components/City/List/List'
  import cityName from '../../components/City/CityName/CityName'

  export default {
    data() {
      return {
        allCity:{},
        hotCity:[]
      }
    },
    components:{
      cityHeader,
      citySearch,
      cityList,
      cityName
    },
    mounted(){
      axios.get('api/city.json')
        .then((response)=>{
          console.log(response.data.data)
          this.hotCity = response.data.data.hotCities
          this.allCity = response.data.data.cities
        })
    }
  }
</script>

<style scoped lang="">
</style>
