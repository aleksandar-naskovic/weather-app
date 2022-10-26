<template>
<!--  Home Page-->
  <div class="home">
    <div class="primary-controls">
      <h2 class="title">Add Cities</h2>
      <p class="subtitle">Add 5 cities whose temperature you want to track</p>
      <AddCity  @newCityAdded="addCity"/>
    </div>
<!--    Chosen cities-->
    <div class="citiesCards">
      <template v-for="city in cities">
        <CityCard :city="city" />
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddCity from '@/components/AddCity.vue'
import CityCard from '@/components/CityCard.vue'

export default {
  name: 'Home',
  components: {
      AddCity,
      CityCard,
  },
  data() {
    return  {
      cities: []
    }
  },
  methods: {
    addCity(city){
      this.cities.push(city)
    }
  },
  created() {
    this.cities = JSON.parse(localStorage.getItem("cities") || '[]')
    //Removing items from storage for testing purposes
    // localStorage.removeItem("cities")
  },
}
</script>
<style>
.home{
  max-width: 1520px;
}
.primary-controls {
  margin: auto;
  width: 1000px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.citiesCards {
  display: flex;
  margin-top: 150px;
  flex-direction: row;
  margin-bottom: 145px;
  max-width: 1520px;
}



.title {
  font-family: "Poppins Bold";
  color: #FFFFFF;
}

.subtitle {
  font-family: "Poppins Light";
  margin-top: 0;
  margin-bottom: 70px;
  color: #FFFFFF;
}

@media (max-width: 1020px) {

  .citiesCards {
    margin-top: 50px;
    margin-bottom: 42px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .primary-controls {
    width: 660px;
    margin-top: 80px;
  }
}

@media (max-width: 650px) {

  .citiesCards {
    margin-top: 30px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .primary-controls {
    width: 350px;
    margin-top: 30px;
  }

  .subtitle {
    font-size: 14px;
    margin-bottom: 30px;
  }
}
</style>
