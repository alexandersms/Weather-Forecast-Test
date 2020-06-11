<template>
  <div id="current" v-if="(cityCurrentWeather, cityCurrentWeather.main)">
    <div>
      <h3 class="date">
        {{ cityCurrentWeather.dt | moment("DD/MM/YYYY ") }}
      </h3>
      <div v-if="cityCurrentWeather.weather">
        <div class="weatherIcon">
          <div class="sunny">
            <img
              :src="iconURL + cityCurrentWeather.weather[0].icon + ext"
              alt="image temps"
            />
          </div>
        </div>
        <p class="temp">
          <i class="fas fa-thermometer-half"></i>
          {{ cityCurrentWeather.main.temp.toFixed(0) }} &deg;C
        </p>
        <p class="conditions">
          {{ cityCurrentWeather.weather[0].description }}
        </p>
      </div>
      <div class="row">
        <div class="col-6">
          <p>
            <i class="fas fa-thermometer-three-quarters"></i>
            Température Max:
            {{ cityCurrentWeather.main.temp_max.toFixed(0) }} &deg;C
          </p>
          <p>
            <i class="fas fa-thermometer-quarter"></i>
            Température Min:
            {{ cityCurrentWeather.main.temp_min.toFixed(0) }} &deg;C
          </p>
        </div>
        <div class="col-6">
          <p>
            <i class="fas fa-tint"></i>
            Humidité:
            {{ cityCurrentWeather.main.humidity }}%
          </p>
          <p>
            <i class="fas fa-tachometer-alt"></i>
            Pression:
            {{ cityCurrentWeather.main.pressure }} hPa
          </p>
        </div>
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
    cityCurrentWeather() {
      return this.$store.state.cityCurrentWeather;
    }
  }
};
</script>

<style scoped>
#current {
  color: #ffffff;
  padding: 3% 2.5% 5%;
  position: relative;
  text-align: center;
  background: #26658c;
}
.location {
  font-size: 3em;
  font-weight: 700;
  margin: 0;
}
.date {
  font-size: 30px;
  font-weight: 300;
  text-transform: uppercase;
}
#current .weatherIcon {
  height: 100px;
  margin: 2% auto 1%;
  width: 100px;
}
.temp {
  font-size: 6.5em;
  line-height: 1.3;
}
.temp:after {
  margin-right: -0.3em;
}
#current .conditions {
  font-size: 2em;
  text-transform: uppercase;
}

p {
  font-size: 1.2em;
}
</style>
