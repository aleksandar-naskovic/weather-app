<template>
<!--  Add city input-->
  <div>
    <div class="search_wrap ">
      <div class="search_box">
        <div class="circle">
          <img src="../assets/Icon awesome-plus.svg" style="width: 16px; height: 16px">
        </div>
        <input v-model="city" type="text" class="input" placeholder="Add a city...">
      </div>
      <button class="btn" @click="addCity">Add</button>
    </div>
    <div v-if="error">
      <p>{{error}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import API from '@/api/api';

export default {
  name: 'AddCity',
  data () {
    return {
      city:'',
      error: '',
      cities:[]
    }
  },
  created() {
    this.cities = JSON.parse(localStorage.getItem("cities") || '[]')
  },

  methods: {
    async addCity() {
      this.error = ''
      let result = await API.getCity(this.city)
      this.city = '';
      //API Error handling
      if (result.type === "apiError"){
        this.error = result.message
        return
      }
      //Throw error if user wants to add 6th city
      if (this.cities.length === 5){
        this.error = "You select the maximum number of cities"
        return
      }
      this.cities.push(result)
      localStorage.setItem("cities", JSON.stringify(this.cities));
      this.$emit('newCityAdded', result);
    },
  }
}
</script>

<style scoped>
p {
  font: normal normal normal 20px/30px Poppins Medium;
}

.btn {
  width: 134px;
  height: 65px;
  /* UI Properties */
  background: #04353C 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  margin-right: 7px;
  font: normal normal normal 20px/30px Poppins Medium;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  cursor: pointer;
}

 input:focus{
  outline: none;
}

.circle {
  width: 40px;
  height: 40px;
  /* UI Properties */
  background: #04353C no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 21px;
  margin-right: 20px;
}


.search_wrap{
  width: 1000px;
  height: 80px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search_wrap .search_box{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.search_wrap .search_box .input{
  /*font-family: "Poppins Regular";*/
  padding: 10px;
  border: none;
  text-align: left;
  font: normal normal normal 20px/30px Poppins Regular;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width: 100%;
}
</style>
