<template>
<!--  City Info View -->
  <div class="cityInfo" v-if="cityInfo">
    <MainCityInfo :cityInfo="cityInfo.detailedInfo"/>
    <ThreeDaysForecast :cityInfo="cityInfo.detailedInfo" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainCityInfo from '@/components/MainCityInfo.vue'
import ThreeDaysForecast from '@/components/ThreeDaysForecast.vue'

import API from '@/api/api'
export default {
  name: 'CityInfo',
  components: {
    MainCityInfo,
    ThreeDaysForecast,
  },
  data () {
    return {
      cityInfo:'',
    }
  },
  mounted() {
    let cityName = this.$route.params.cityInfo
    let cities = JSON.parse(localStorage.getItem("cities") || '[]')
    this.cityInfo = cities.find(city => city.generalInfo[0].name.toLowerCase() === cityName.toLowerCase())
  }
}
</script>

<style scoped>
 .cityInfo {
   display: flex;
   flex-direction: column;
   margin-bottom: 80px;
 }
</style>
