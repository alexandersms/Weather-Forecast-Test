<template>
  <div>
    <div class="container search">
      <form
        class="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2"
        @submit.prevent="searchCity()"
      >
        <input
          class="form-control form-control-lg mr-3 w-75"
          type="text"
          placeholder="Rechercher une ville..."
          aria-label="Search"
          v-model="search"
          @keyup.enter="searchCity()"
        />
        <i
          class="fas fa-search fa-2x text-white"
          aria-hidden="true"
          @click="searchCity()"
        ></i>
      </form>
      <p class="text-white text-center">
        {{ errormessage }}
      </p>
      <div class="page-title">
        <h1 class="h3 text-center" v-if="cityCurrentWeather.length === 0">
          Weather App 🌧
        </h1>
        <h1 class="h2 text-center" v-else>
          {{ cityCurrentWeather.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: "",
      search: ""
    };
  },
  computed: {
    cityCurrentWeather() {
      return this.$store.state.cityCurrentWeather;
    },
    errormessage() {
      return this.$store.state.errormessage;
    }
  },
  methods: {
    searchCity() {
      this.$store.state.cityName = this.search;
      this.$store.dispatch("getCityWeather");
      this.$store.dispatch("getCityForecast");
      console.log(this.$store.state.cityName);
    }
  }
};
</script>

<style scoped></style>
