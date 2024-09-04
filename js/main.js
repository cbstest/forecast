import { ForecastListView } from './forecastListView.js'
import { dataService } from './dataService.js'
import { STATE } from './state.js'
import { Forecast } from './forecast.js'

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded') 

    const forecastListView = new ForecastListView('#tableBody')

    STATE.cities.forEach( async (cityId) => {
        const forecast = await dataService.getWeatherForecast(cityId)
        console.log(forecast)
        const currentForecast = new Forecast(forecast)

        forecastListView.showForecast(currentForecast)
    })
})