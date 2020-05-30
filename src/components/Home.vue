<template>
  <div class="home-container">
    <div class="places-input">
      <input type="text" class="form-control form-control-lg w-100" />
    </div>
    <div class="weather-container w-100 bg-secondary mt-4 overflow-hidden">
      <div
        class="current-weather d-flex align-items-center justify-content-between px-4 py-5"
      >
        <div class="d-flex align-items-center">
          <div>
            <div class="display-2 font-weight-bold">
              {{ currentTemperature.actual }}°C
            </div>
            <div>Ressenti {{ currentTemperature.feels }}°</div>
          </div>
          <div class="mx-5">
            <div class="h1 font-weight-bold">
              {{ currentTemperature.summary }}
            </div>
            <div class="h4">{{ LOCATION.name }}</div>
          </div>
        </div>
        <div class="icon">
          {{ icons[currentTemperature.icon] }}
        </div>
      </div>
      <!-- end current-weather -->

      <div class="future-weather text-sm bg-light px-5 py-5 overflow-hidden">
        <div
          class="d-flex align-items-center"
          v-for="(day, index) in daily"
          :key="day.time"
          :class="{ 'mt-4': index > 0 }"
        >
          <div class="w-1/5 text-lg text-dark h5">
            {{ toDayOfWeek(day.time) }}
          </div>
          <div class="w-3/5 px-4 d-flex align-items-center">
            <div class="h4">{{ icons[day.icon] }}</div>
            <div class="ml-3 mb-2">{{ day.summary }}</div>
          </div>
          <div class="w-1/5 text-right mx-5">
            <div>
              {{ Math.round((Math.round(day.temperatureHigh - 32) * 5) / 9) }}°C
            </div>
            <div>
              {{ Math.round((Math.round(day.temperatureLow - 32) * 5) / 9) }}°C
            </div>
          </div>
        </div>
      </div>
      <!-- end future weather -->
    </div>
    <!-- end weather-container -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      GEO_API_URL: "https://darksky.net/geo?q=",
      PROXY: "https://cors-anywhere.herokuapp.com/",
      WEATHER_API_URL: "https://api.darksky.net/forecast/",
      API_KEY: "a863d2bf51461f915d4cb114e08b40db",
      daily: [],
      LOCATION: {
        name: "Paris",
        lat: 48.8534,
        lng: 2.3486
      },
      currentTemperature: {
        actual: "",
        feels: "",
        summary: "",
        icon: ""
      },
      icons: {
        "clear-day": "😎",
        "clear-night": "🌉",
        rain: "🌧",
        snow: "❄️",
        cloudy: "🌥",
        sleet: "🌨",
        wind: "🎐",
        fog: "🌫",
        "partly-cloudy-day": "🌤",
        "partly-cloudy-night": "🌃"
      }
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(
        `${this.PROXY}${this.WEATHER_API_URL}${this.API_KEY}/${this.LOCATION.lat},${this.LOCATION.lng}`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.currentTemperature.actual = Math.round(
            ((data.currently.temperature - 32) * 5) / 9
          );
          this.currentTemperature.feels = Math.round(
            ((data.currently.apparentTemperature - 32) * 5) / 9
          );
          this.currentTemperature.summary = data.currently.summary;
          this.currentTemperature.icon = data.currently.icon;

          this.daily = data.daily.data;
          console.log(this.daily);
        });
    },
    toDayOfWeek(timestamp) {
      const newDate = new Date(timestamp * 1000);
      const days = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
      return days[newDate.getDay()];
    },
    fetchLocation() {
      fetch(`${this.PROXY}${this.GEO_API_URL}${this.LOCATION.name}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    }
  }
};
</script>

<style scoped>
.home-container {
  margin-bottom: 8px;
}

.places-input {
  color: gray;
  font-weight: 800;
}

.weather-container {
  border-radius: 20px;
}

.icon {
  font-size: 5em;
}
</style>
