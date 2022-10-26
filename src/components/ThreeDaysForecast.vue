<template>
<!--    Table Hourly View-->
  <div v-if="cityInfo" class="hourViewCard">
<!--    Loop through days-->
    <table v-for="day in cityInfo.days">
      <caption class="dayOfWeek">{{getDate(day)}}</caption>
<!--      Loop through properties in hourly view-->
      <tr v-for="(property) in propertiesArr">
        <template v-for="(value, index) in day.hours">
<!--          Hours-->
          <td v-if="property === 'datetime'"><span class="hours">{{ index }}h</span></td>
<!--          Icon-->
          <td v-if="property === 'icon'">
            <img v-bind:src="require('../assets/' + value[property] + '.png')" style="width: 32px; height: 28px"/>
          </td>
<!--            Temperature-->
          <td v-if="property === 'temp'"><span class="temperature">{{ convertFahrenheitToCelsius(value[property]) }}&#176;</span></td>
        </template>
      </tr>
    </table>
  </div>
</template>
<script>
import API from '@/api/api'
export default {
  name: 'ThreeDaysForecast',
  data() {
    return  {
      propertiesArr: ["datetime","icon", "temp"],
    }
  },
  props: {
    cityInfo: {
      default: {}
    }
  },
  methods: {
    getDate(day) {
      const event = new Date(day.datetime);
      const options = { weekday: 'long', month: 'short', day: 'numeric' };
      return event.toLocaleDateString('en-US', options) + '.';
    },
      convertFahrenheitToCelsius(temp){
        return API.convertFahrenheitToCelsius(temp)
      }
  }
}
</script>
<style>
table {
  margin: auto;
  border-collapse: separate;
  border-spacing: 30px 0;
}

.dayOfWeek {
  text-align: left;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-top: 38px;
}

td {
  padding-bottom: 20px;
}

caption {
  text-align: left;
  font: normal normal 600 22px/33px Poppins Bold;
  letter-spacing: 0px;
  color: #04353C;
  opacity: 1;
}

.hourViewCard {
  width: 1560px;
  /* UI Properties */
  background: #FFFFFF no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}

.hours {
  text-align: left;
  font: normal normal 300 15px/20px Poppins Regular;
  letter-spacing: 0px;
  color: #04353C;
  opacity: 1;
}

.temperature {
  text-align: left;
  font: normal normal 300 14px/10px Poppins Bold;
  letter-spacing: 0px;
  color: #04353C;
  opacity: 1;
  margin:0;
  padding:0;
}

/* Responsiveness */
@media (max-width: 1020px) {
  .hourViewCard {
    width: 660px;
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .hourViewCard ::-webkit-scrollbar {
    height: 10px;
  }


  .hourViewCard ::-webkit-scrollbar-track {
    background: #EFEFEF;
  }

  .hourViewCard ::-webkit-scrollbar-thumb {
    background: #5D979B;
  }

  .hourViewCard ::-webkit-scrollbar-thumb:hover {
    background: #5D979B;
  }
}

@media (max-width: 650px) {
  .hourViewCard {
    max-width: 350px;
  }
}
</style>
