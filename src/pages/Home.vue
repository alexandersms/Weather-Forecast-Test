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
          <div class="row d-flex align-items-center" v-if="weathers.currently">
            <div class="col-5">
              <div class="cureentTemp display-3 font-weight-bold">
                {{
                  Math.round(
                    (Math.round(weathers.currently.temperature - 32) * 5) / 9
                  )
                }}°C
              </div>
              <div class="cureentTempFeels">
                Ressenti
                {{
                  Math.round(
                    (Math.round(weathers.currently.apparentTemperature - 32) *
                      5) /
                      9
                  )
                }}°
              </div>
            </div>
            <div class="col-5 ">
              <div class="cureentTempSummary h1 font-weight-bold">
                {{ weathers.currently.summary }}
              </div>
              <div class="cureentTempLocation h2">
                {{ weathers.timezone }}
              </div>
            </div>
            <div class="col-2 ">
              <div class="icon">
                {{ icons[weathers.currently.icon] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end current-weather -->

      <div
        class="future-weather text-sm bg-futureWeather px-5 py-5 overflow-hidden"
        v-if="weathers.daily"
      >
        <FutureWeather
          v-for="(day, index) in weathers.daily.data"
          :key="day.time"
          :day="day"
          :class="{ 'mt-4': index > 0 }"
        />
      </div>
      <!-- end future weather -->
    </div>
    <!-- end weather-container -->
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/places.js@1.19.0"></script>
<script>
import Places from "vue-places";
import FutureWeather from "../components/FutureWeather.vue";
export default {
  name: "Home",

  computed: {
    weathers() {
      return this.$store.state.weather;
    }
  },
  mounted() {
    this.$store.dispatch("getData");
    // barre de recherche
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
      this.weathers.timezone = `${e.suggestion.name}, ${e.suggestion.country}`;
      this.weathers.latitude = e.suggestion.latlng.lat;
      this.weathers.longitude = e.suggestion.latlng.lng;
    });
    placesAutocomplete.on("clear", () => {
      $address.textContent = "none";
    });
  },
  /*
  methods: {
    fetchData() {
      console.log(`LOCATION ${this.form.location.data}`);
      this.weathers.timezone = this.form.location.data;
      //console.log(this.weathers.timezone);
    },
  },
  */
  data() {
    return {
      options: {
        appId: "plGYBGBYZG16",
        apiKey: "ec3285701faacad3de1c0291168e4990"
      },
      form: {
        location: {
          name: null,
          data: {}
        }
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
  components: {
    FutureWeather,
    Places
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
