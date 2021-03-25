class Provider {
  /**
   * Gets the weather for a given city
   */
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`);
  }
  /**
   * Gets the weather for a given city
   */
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`);
  }
  /**
   * Given Longitude and latitude, this function returns a city
   */
  static findCity(long, lat) {
    return Promise.resolve(`London`);
  }

  getWeatherStats = async (longitude, latitude) => {
    //Print the city for lat/long 51.5074 and 0.1278 in console
    const city = await Provider.findCity(longitude, latitude);
    console.log(`The city for ${longitude} and ${latitude} is ${city}`);

    //Print the weather for lat/long 51.5074 and 0.1278
    console.log(await Provider.getWeather(city));

    //Print the weather and currency for a given city (London)
    console.log(await Provider.getLocalCurrency(city));
  };
}

const provider = new Provider();

provider.getWeatherStats(51.5074, 0.1278);
