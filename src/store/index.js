import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import favorite from "../services/favorite";
const API_KEY = "c0c4a4b4047b97ebc5948ac9c48c0559";
const WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const FORECAST_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
const UNITS = "&units=metric";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityName: "",
    cityCurrentWeather: [],
    cityForecast: [],
    search: "",
    errormessage: "",
    fetchError: false,
    favorites: []
  },
  actions: {
    getCityWeather({ commit }) {
      axios
        .get(
          `${WEATHER_URL}${this.state.cityName}&appid=${API_KEY}${UNITS}&lang=fr`
        )
        .then(data => {
          commit("SET_CITY_WEATHER", data);
          this.state.errormessage = "";
        })
        .catch(error => commit("API_FAILURE", error));
    },
    getCityForecast({ commit }) {
      axios
        .get(
          `${FORECAST_URL}${this.state.cityName}${UNITS}&cnt=7&lang=fr&appid=${API_KEY}`
        )
        .then(data => {
          commit("SET_CITY_FORECAST", data);
          this.state.errormessage = "";
        })
        .catch(error => commit("API_FAILURE", error));
    },
    async addToFavorite({ commit }, city) {
      console.log("Action: Trying to add in favorite");
      if (!city || !city.id) {
        console.error("invalid");
        return;
      }
      const result = await favorite.addToFavorite(city);
      if (result === true) commit("ADD_TO_FAVORITE", city);
      else console.error("Could not add to favorite");
    }
  },
  mutations: {
    API_FAILURE(state, error) {
      if (error.message.includes("400")) {
        state.errormessage = "Entrez une ville s'il vous plait";
      } else if (error.message.includes("404")) {
        state.errormessage = "Ville non trouvée";
      }
    },
    SET_CITY_WEATHER(state, data) {
      state.cityCurrentWeather = data.data;
    },
    SET_CITY_FORECAST(state, data) {
      state.cityForecast = data.data;
    },
    ADD_TO_FAVORITE(state, city) {
      state.favorites.push(city);
      console.log("Mutation : Ok, city has been added");
    }
  }
});
