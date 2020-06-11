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
      <p class="text-white text-center font-weight-bold mt-3">
        {{ errormessage }}
      </p>
      <div class="page-title">
        <h1 class="h3 text-center" v-if="cityCurrentWeather.length === 0">
          Weather App 🌧
        </h1>
        <div v-else>
          <h1 class="h2 text-center">
            {{ cityCurrentWeather.name }}
          </h1>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary btn-sm mb-3" @click="addToFavorite">
              <i class="fa fa-plus" aria-hidden="true"> </i>
              ajouter au favoris
            </button>
          </div>
        </div>
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
    },
    favorites() {
      return this.$store.state.favorites;
    }
  },
  mounted() {
    console.log("App mounted");
    if (localStorage.getItem("Cities"))
      this.$store.state.favorites = JSON.parse(localStorage.getItem("Cities"));
  },
  methods: {
    searchCity() {
      this.$store.state.cityName = this.search;
      this.$store.dispatch("getCityWeather");
      this.$store.dispatch("getCityForecast");
      console.log(this.$store.state.cityName);
    },
    addToFavorite() {
      this.$store.dispatch("addToFavorite", {
        id: this.$store.state.cityCurrentWeather.id,
        name: this.$store.state.cityCurrentWeather.name,
        temp: this.cityCurrentWeather.main.temp.toFixed(0),
        icon: this.cityCurrentWeather.weather[0].icon
      });
      this.search = "";
    }
  },
  watch: {
    favorites: {
      handler() {
        console.log("Favorites changed!");
        localStorage.setItem(
          "Cities",
          JSON.stringify(this.$store.state.favorites)
        );
      },
      deep: true
    }
  }
};
</script>

<style scoped></style>
