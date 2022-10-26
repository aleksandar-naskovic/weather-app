<template>
  <div v-if="cityInfo" class="cityInfoCard">
    <div class="main-info short">
      <h3>{{ cityInfo.address }}</h3>
      <p>{{ cityInfo.resolvedAddress }}</p>
      <p>{{ cityInfo.latitude }}<span>&#176;</span>N, {{ cityInfo.longitude }}<span>&#176;</span>N</p>
    </div>
    <div class="temperature">
      <img v-bind:src="require('../assets/' + cityInfo.currentConditions.icon + '@2x.png')"/>
      <h2>{{convertFahrenheitToCelsius(cityInfo.currentConditions.temp)}}&#176;C</h2>
    </div>
    <div class="main-info">
      <p><span class="bold">Feels Like</span> {{cityInfo.currentConditions.feelslike}}</p>
      <p><span class="bold">Humidity</span> {{cityInfo.currentConditions.humidity}}%</p>
      <p><span class="bold">Pressure</span> {{cityInfo.currentConditions.pressure}}mbar</p>
      <p><span class="bold">Wind</span> {{cityInfo.currentConditions.windspeed}}m/s</p>
      <p><span class="bold">UV index</span> {{cityInfo.currentConditions.uvindex}}</p>
    </div>
  </div>
</template>

<script>
import API from '@/api/api'
export default {
    name: "MainCityInfo",
    props: {
      cityInfo: {
        default: {}
      }
    },
    methods: {
      convertFahrenheitToCelsius(temp){
        return API.convertFahrenheitToCelsius(temp)
      }
    }
}
</script>

<style scoped>
.cityInfoCard {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  max-width: 862px;
  margin: auto;
  margin-top: 80px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
  padding:38px;
  padding-bottom:0px;
}

.cityInfoCard .main-info {
  width: 100%;
}

h3 {
  text-transform: capitalize;
}

h2 {
  font: normal normal 600 48px/72px Poppins Bold;
}

.cityInfoCard .main-info h3 {
  text-align: left;
  font: normal normal bold 20px/30px Poppins Medium;
  letter-spacing: 0px;
  color: #04353C;
  opacity: 1;
  margin-bottom: 20px;
  margin-top: 0px;
}

.cityInfoCard .main-info p {
  text-align: left;
  font: normal normal 300 15px/25px Poppins Regular;
  letter-spacing: 0px;
  color: #04353C;
  opacity: 1;
  margin-top: 0px;
  margin-bottom: 10px ;
}

.cityInfoCard .main-info .bold {
  font: normal normal bold 15px/25px Poppins Medium;

}

.temperature {
  padding:  0 150px;
  text-align: center;
}

.temperature img{
  width: 75px;
  height: 75px;
}

/* Responsiveness */
@media (max-width: 1020px) {


  .cityInfoCard {
    max-width: 862px;
  }

  .temperature {
    padding:  0 50px;
    text-align: center;
  }
}

@media (max-width: 650px) {
  .cityInfoCard {
    max-width: 350px;
    flex-wrap: wrap;
  }

  .temperature {
    margin-top: 30px;
    padding:  0px;
    margin-right:  70px;
  }

  .temperature img{
    width: 48px;
    height: 48px;
  }

  h2 {
    font: normal normal 600 24px/30px Poppins Bold;
  }

  .cityInfoCard .main-info {
    width: 50%;
  }

  .short {
    padding-right: 100px;
  }
}
</style>
