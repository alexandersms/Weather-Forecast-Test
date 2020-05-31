import axios from "axios";

const PROXY = "https://cors-anywhere.herokuapp.com/";
const WEATHER_API_URL = "https://api.darksky.net/forecast/";
const API_KEY = "a863d2bf51461f915d4cb114e08b40db";
const location = {
  name: "Paris",
  lat: 48.8534,
  lng: 2.3486
};

export const getData = ({ commit }) => {
  axios
    .get(`${PROXY}${WEATHER_API_URL}${API_KEY}/${location.lat},${location.lng}`)
    .then(response => {
      commit("SET_DATA", response.data);
    });
};
