<template>
  <div>
    <Search />
    <div class="container mb-5">
      <CurrentWeatherVue />
      <div class="forecastWeather">
        <ForecastWeather />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import CurrentWeatherVue from "@/components/CurrentWeather.vue";
import ForecastWeather from "@/components/ForecastWeather.vue";

export default {
  name: "Home",
  components: {
    Search,
    CurrentWeatherVue,
    ForecastWeather
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
