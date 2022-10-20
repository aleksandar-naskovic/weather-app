<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Add Cities</h2>
    <p>Add 5 cities whose temperature you want to track</p>
    <AddCity/>
    <CityCard></CityCard>
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
      CityCard
  }
}
</script>
