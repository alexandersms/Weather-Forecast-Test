<template>
  <div>
    <div class="forecast" v-if="cityForecast.list">
      <div
        class="single-forecast"
        v-for="(forecast, index) in cityForecast.list"
        :key="index"
      >
        <h3>{{ forecast.dt | moment("DD/MM/YYYY ") }}</h3>
        <img
          :src="iconURL + forecast.weather[0].icon + ext"
          alt="image temps"
          class="forecast-icon"
        />
        <p class="forecast-desc font-weight-bold">
          {{ forecast.weather[0].description.toUpperCase() }}
        </p>
        <p>Temp. Max: {{ forecast.temp.max.toFixed(0) }} &deg;C</p>
        <p>Temp. Min: {{ forecast.temp.min.toFixed(0) }} &deg;C</p>
        <p>Temp. Matin: {{ forecast.temp.morn.toFixed(0) }} &deg;C</p>
        <p>Temp. Journée: {{ forecast.temp.day.toFixed(0) }} &deg;C</p>
        <p>Temp. Soirée: {{ forecast.temp.eve.toFixed(0) }} &deg;C</p>
        <p>Temp. Nuit: {{ forecast.temp.night.toFixed(0) }} &deg;C</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconURL: `http://openweathermap.org/img/wn/`,
      ext: "@2x.png"
    };
  },
  computed: {
    cityForecast() {
      return this.$store.state.cityForecast;
    }
  }
};
</script>

<style scoped>
.forecast {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  color: white;
  text-align: center;
  padding-top: 20px;
}
.forecast p {
  font-size: 0.8rem;
  margin-bottom: 0;
}

.forecast p:nth-child(3) {
  font-size: 1.6rem;
  margin-bottom: 0;
}

.forecast h3 {
  font-size: 1.6rem;
  font-weight: normal;
}

.forecast-icon {
  color: white;
  width: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.single-forecast {
  border: 1px solid white;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
}

.single-forecast h3 {
  margin-top: 0;
}
</style>
