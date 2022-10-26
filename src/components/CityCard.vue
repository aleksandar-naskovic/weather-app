<template>
<!--  Home Page Card-->
    <div class="card" v-if="city">
      <div class="city">
        <p>{{city.generalInfo[0].name}}</p>
      </div>
      <div class="country"><p>{{getCountryName(city.generalInfo[0].country)}}</p></div>
      <div class="temperature">
        <p>{{convertFahrenheitToCelsius(city.detailedInfo.currentConditions.temp)}}<span>&#176;</span>C</p>
      </div>
      <button class="button" @click="getCityInfo(city)">View City</button>
    </div>
</template>
<script>
import API from '@/api/api';
export default {
  name: 'CityCard',
  props: {
      city: {}
  },
  created() {
    console.log(this.city)
    // localStorage.removeItem("cities")
  },
  methods: {
    async getCityInfo(city) {
      let cityName = city.generalInfo[0].name
      this.$router.push({ path: '/city/' + cityName, params: { cityName }})
    },
    getCountryName(country){
      let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
      return regionNames.of(country);
    },
    convertFahrenheitToCelsius(temp){
      return API.convertFahrenheitToCelsius(temp)
    }
  },
}
</script>

<style scoped>
.card {
  transition: scale 150ms ease;
  box-shadow: 0 0 10px #00000020;
  user-select: none;
  width: 260px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  margin-right: 55px;
  align-items: center;
  padding-bottom: 45px;
}

.card:last-child{
  margin: 0px;
}

.city p{
  text-align: center;
  font: normal normal 600 24px/35px Poppins Medium;
  letter-spacing: 0px;
  color: #04353C;
  opacity: 1;
  margin-bottom: 10px;
  margin-top: 46px;
}

.country p {
  text-align: center;
  font: normal normal normal 16px/25px Poppins Regular;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  margin-bottom: 30px;
}

.temperature p {
  text-align: center;
  font: normal normal 600 48px/72px Poppins Bold;
  letter-spacing: 0px;
  color: #04353C;
  opacity: 1;
  margin-bottom: 40px;
}

.button {
  width: 180px;
  /* UI Properties */
  background: #04353C 0% 0% no-repeat padding-box;
  border-radius: 10px;
  font: normal normal normal 16px/25px Poppins Regular;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  padding: 11px;
  cursor: pointer;
}

</style>
