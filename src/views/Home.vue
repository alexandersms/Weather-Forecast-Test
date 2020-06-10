<template>
  <div>
    <Search />
    <div class="container mb-5">
      <CurrentWeatherVue />
      <div class="forecastWeather">
        <ForecastWeather />
      </div>
      <FavoriteCityWeather />
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import CurrentWeatherVue from "@/components/CurrentWeather.vue";
import ForecastWeather from "@/components/ForecastWeather.vue";
import FavoriteCityWeather from "../components/FavoriteCityWeather.vue";

export default {
  name: "Home",
  components: {
    Search,
    CurrentWeatherVue,
    ForecastWeather,
    FavoriteCityWeather
  }
};
</script>

<style scoped>
.forecastWeather {
  position: relative;
  color: #ffffff;
  text-align: center;
  width: 100%;
  background: #5aa3bf;
}
</style>
