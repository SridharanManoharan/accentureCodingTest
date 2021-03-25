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
}

const getWeatherStats = async () => {
  const longitude = 51.5074;
  const latitude = 0.1278;

  //Print the city for lat/long 51.5074 and 0.1278 in console
  const city = await Provider.findCity(longitude, latitude);
  console.log(`The city for ${longitude} and ${latitude} is ${city}`);

  //Print the weather for lat/long 51.5074 and 0.1278
  const weather = await Provider.getWeather(city);
  console.log(weather);

  //Print the weather and currency for a given city (London)
  const currency = await Provider.getLocalCurrency(city);
  console.log(currency);
};

getWeatherStats();
