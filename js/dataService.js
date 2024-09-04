class DataService {
    #baseUrl = 'https://api.openweathermap.org/data/2.5/';
    #appId = 'f6d8f5793151b1d827c04bcbc4f30fff'
    #unit = 'metric'

    async getWeatherForecast(citiId) {
        const url = `${this.#baseUrl}weather?id=${citiId}&appid=${this.#appId}&units=${this.#unit}&lang=ua`
        const response = await fetch(url)

        if (response.ok) {
            return await response.json()
        } else {
            console.warn(`[Error] Something wrong getting weather for city with id ${citiId}`)
            return null
        }
    }
}

export const dataService = new DataService()