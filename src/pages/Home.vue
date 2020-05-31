<template>
  <div class="container">
    <div class="places-input">
      <input
        type="search"
        id="address"
        class="form-control"
        placeholder="Rechercher une ville..."
      />

      <p>Selected: <strong id="address-value">none</strong></p>
    </div>
    <div
      class="weather-container w-100 bg-currentWeather mt-4 mb-5 overflow-hidden"
    >
      <div
        class="current-weather d-flex align-items-center justify-content-between px-4 py-5"
      >
        <div class="container-fluid">
          <div class="row d-flex align-items-center ">
            <div class="col-5">
              <div class="cureentTemp display-3 font-weight-bold">
                {{ currentTemperature.actual }}°C
              </div>
              <div class="cureentTempFeels">
                Ressenti {{ currentTemperature.feels }}°
              </div>
            </div>
            <div class="col-5 ">
              <div class="cureentTempSummary h1 font-weight-bold">
                {{ currentTemperature.summary }}
              </div>
              <div class="cureentTempLocation h2">{{ LOCATION.name }}</div>
            </div>
            <div class="col-2 ">
              <div class="icon">
                {{ icons[currentTemperature.icon] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end current-weather -->

      <div
        class="future-weather text-sm bg-futureWeather px-5 py-5 overflow-hidden"
      >
        <div
          class="row d-flex align-items-center"
          v-for="(day, index) in daily"
          :key="day.time"
          :class="{ 'mt-4': index > 0 }"
        >
          <div class="col-2">
            <div class="text-lg text-dark h6">
              {{ toDayOfWeek(day.time) }}
            </div>
          </div>
          <div class="col-8">
            <div class="text-lg h6">
              <div></div>
              <div class="ml-3 mb-2">
                {{ icons[day.icon] }}
                <span class="mx-1">{{ day.summary }}</span>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="text-lg h6">
              <div>
                {{
                  Math.round((Math.round(day.temperatureHigh - 32) * 5) / 9)
                }}°C
              </div>
              <div>
                {{
                  Math.round((Math.round(day.temperatureLow - 32) * 5) / 9)
                }}°C
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end future weather -->
    </div>
    <!-- end weather-container -->
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/places.js@1.19.0"></script>
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

    const placesAutocomplete = places({
      appId: "plGYBGBYZG16",
      apiKey: "ec3285701faacad3de1c0291168e4990",
      container: document.querySelector("#address")
    }).configure({
      type: "city",
      aroundLatLngViaIP: false
    });

    const $address = document.querySelector("#address-value");
    placesAutocomplete.on("change", e => {
      $address.textContent = e.suggestion.value;
      this.LOCATION.name = `${e.suggestion.name}, ${e.suggestion.country}`;
      this.LOCATION.lat = e.suggestion.latlng.lat;
      this.LOCATION.lng = e.suggestion.latlng.lng;
    });

    placesAutocomplete.on("clear", function() {
      $address.textContent = "none";
    });
  },
  watch: {
    LOCATION: {
      handler(newValue, oldValue) {
        this.fetchData();
      },
      deep: true
    }
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
    }
  }
};
</script>

<style scoped>
.places-input {
  color: gray;
  font-weight: 800;
}

.weather-container {
  border-radius: 20px;
}

.bg-currentWeather {
  background: #26658c;
}

.bg-futureWeather {
  background: #5aa3bf;
}

.icon {
  font-size: 3.5em;
}

@media (max-width: 770px) {
  .cureentTemp {
    font-size: 45px;
  }
  .cureentTempFeels {
    font-size: 12px;
  }
  .cureentTempSummary {
    font-size: 24px;
  }
  .cureentTempLocation {
    font-size: 18px;
  }

  .icon {
    font-size: 2em;
  }
}
</style>
