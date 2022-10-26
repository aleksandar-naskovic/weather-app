import axios from 'axios'


export default {

    async getCity(cityName) {
        try {
            axios.defaults.headers['X-API-KEY'] = 'rBAwRXe3WoFsjqn11HiaGg==Wp1L1UUfUYqKJ2K6';
            let generalInfo = await axios.get(`https://api.api-ninjas.com/v1/city?name=${cityName}`, {})
            if (generalInfo.data[0].name.toLowerCase() !== cityName.toLowerCase()) {
                throw {
                    type: "apiError",
                    message: "The city with name of '" + cityName+ "' was not found",
                };
            }
            let detailedInfo = await this.getCityInfo(cityName)

            let cityObject = {
                generalInfo: generalInfo.data,
                detailedInfo: detailedInfo.data
            }

            return cityObject

        }
        catch (error) {
            return error;
        }
    },
    async getCityInfo(cityName) {
        try {
            axios.defaults.headers = {};
            let today = new Date().toISOString().split('T')[0];
            let addTwoDays = new Date();
            addTwoDays.setDate(addTwoDays.getDate() + 2);
            //reformat date for API
            addTwoDays = addTwoDays.toISOString().split('T')[0];
             return await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/${today}/${addTwoDays}?unitGroup=us&key=9RGJSXWNWH6N2ESEV3G75ZSH4&contentType=json
`, {})
        }
        catch (error) {
            console.log(error);
        }
    },

    convertFahrenheitToCelsius(temperature) {
        parseFloat(temperature)
        return Math.round((temperature - 32) * 5 / 9)
    }
}
