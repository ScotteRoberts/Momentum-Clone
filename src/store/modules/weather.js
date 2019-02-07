// Variables
/**
 * @description Weather module state
 */
const state = {
  show: false,
  forecast: {
    currently: {},
    minutely: [],
    hourly: [],
    daily: []
  }
};

/**
 * @description DarkSkyAPI icon names that are given with their forecasts.
 */
const skyconsIcons = {
  sun: "clear-day",
  moon: "clear-night",
  cloudSun: "partly-cloudy-day",
  cloudMoon: "partly-cloudy-night",
  cloud: "cloudy",
  cloudRain: "rain",
  cloudShowersHeavy: "sleet",
  snowflake: "snow",
  wind: "wind",
  smog: "fog"
};

/**
 * @description FontAwesome icon names that this application uses to display the forecast.
 */
const fontAwesomeIcons = {
  sun: "sun",
  moon: "moon",
  cloudSun: "cloud-sun",
  cloudMoon: "cloud-moon",
  cloud: "cloud",
  cloudRain: "cloud-rain",
  cloudShowersHeavy: "cloud-showers-heavy", // DEV: Couldn't use sleet for free.
  snowflake: "snowflake",
  wind: "wind",
  smog: "smog" // DEV: Couldn't use fog for free
};

// Transformers

/**
 * @description Icon transformer to correct the string icon DarkSkyAPI provides to a usable FontAwesome format.
 * @param {string} skyconIcon
 */
const skyconIconTransformer = function(skyconIcon) {
  switch (skyconIcon) {
    case skyconsIcons.sun:
      return fontAwesomeIcons.sun;
    case skyconsIcons.moon:
      return fontAwesomeIcons.moon;
    case skyconsIcons.cloudSun:
      return fontAwesomeIcons.cloudSun;
    case skyconsIcons.cloudMoon:
      return fontAwesomeIcons.cloudMoon;
    case skyconsIcons.cloud:
      return fontAwesomeIcons.cloud;
    case skyconsIcons.cloudRain:
      return fontAwesomeIcons.cloudRain;
    case skyconsIcons.cloudShowersHeavy:
      return fontAwesomeIcons.cloudShowersHeavy;
    case skyconsIcons.snowflake:
      return fontAwesomeIcons.snowflake;
    case skyconsIcons.wind:
      return fontAwesomeIcons.wind;
    case skyconsIcons.smog:
      return fontAwesomeIcons.smog;
    default:
      return fontAwesomeIcons.sun;
  }
};

const currentDataTransformer = function(currentData) {
  return {
    apparentTemperature: currentData.apparentTemperature,
    humidity: currentData.humidity,
    icon: skyconIconTransformer(currentData.icon),
    precipIntensity: currentData.precipIntensity,
    precipProbability: currentData.precipProbability,
    summary: currentData.summary,
    temperature: currentData.temperature,
    time: currentData.time
  };
};

const dailyDataTransformer = function(weekData) {
  let week = [];
  for (let dayData of weekData) {
    let day = {
      humidity: dayData.humidity,
      icon: skyconIconTransformer(dayData.icon),
      precipIntensity: dayData.precipIntensity,
      precipProbability: dayData.precipProbability,
      summary: dayData.summary,
      sunriseTime: dayData.sunriseTime,
      sunsetTime: dayData.sunsetTime,
      temperatureMax: dayData.temperatureMax,
      temperatureMin: dayData.temperatureMin,
      time: dayData.time
    };
    week.push(day);
  }
  return week;
};

const mutationTypes = {
  SET_SHOW: "SET_SHOW",
  SET_WEATHER: "SET_WEATHER"
};

const mutations = {
  [mutationTypes.SET_SHOW](state, value) {
    state.show = value;
  },
  [mutationTypes.SET_WEATHER](state, forecast) {
    state.forecast = JSON.parse(JSON.stringify(forecast));
  }
};

const actions = {
  setShow: ({ commit }, value) => {
    commit(mutationTypes.SET_SHOW, value);
  },
  setWeather: ({ commit }, responseData) => {
    let transformedCurrentData = currentDataTransformer(responseData.currently);
    let transformedDailyData = dailyDataTransformer(responseData.daily.data);
    let forecast = {
      currently: transformedCurrentData,
      minutely: [],
      hourly: [],
      daily: transformedDailyData
    };
    commit(mutationTypes.SET_WEATHER, forecast);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
