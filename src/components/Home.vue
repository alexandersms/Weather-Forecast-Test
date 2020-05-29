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
            <div class="display-3 font-weight-bold">4°C</div>
            <div>Ressenti 2°</div>
          </div>
          <div class="mx-5">
            <div class="font-weight-bold">Cloudy</div>
            <div>Kinshasa, CD</div>
          </div>
        </div>
        <div class="icon">🌦</div>
      </div>
      <!-- end current-weather -->

      <div class="future-weather text-sm bg-light px-5 py-5 overflow-hidden">
        <div class="d-flex align-items-center">
          <div class="w-1/5 text-lg text-dark h5">MON</div>
          <div class="w-3/5 px-4 d-flex align-items-center">
            <div class="h4">🌦</div>
            <div class="ml-3 mb-2">Cloudy with a chance of showers</div>
          </div>
          <div class="w-1/5 text-right mx-5">
            <div>2°C</div>
            <div>-1°C</div>
          </div>
        </div>

        <div class="d-flex align-items-center mt-4">
          <div class="w-1/5 text-lg text-dark h5">MON</div>
          <div class="w-3/5 px-4 d-flex align-items-center">
            <div class="h4">🌦</div>
            <div class="ml-3 mb-2">Cloudy with a chance of showers</div>
          </div>
          <div class="w-1/5 text-right mx-5">
            <div>2°C</div>
            <div>-1°C</div>
          </div>
        </div>

        <div class="d-flex align-items-center mt-4">
          <div class="w-1/5 text-lg text-dark h5">MON</div>
          <div class="w-3/5 px-4 d-flex align-items-center">
            <div class="h4">🌦</div>
            <div class="ml-3 mb-2">Cloudy with a chance of showers</div>
          </div>
          <div class="w-1/5 text-right mx-5">
            <div>2°C</div>
            <div>-1°C</div>
          </div>
        </div>

        <div class="d-flex align-items-center mt-4">
          <div class="w-1/5 text-lg text-dark h5">MON</div>
          <div class="w-3/5 px-4 d-flex align-items-center">
            <div class="h4">🌦</div>
            <div class="ml-3 mb-2">Cloudy with a chance of showers</div>
          </div>
          <div class="w-1/5 text-right mx-5">
            <div>2°C</div>
            <div>-1°C</div>
          </div>
        </div>

        <div class="d-flex align-items-center mt-4">
          <div class="w-1/5 text-lg text-dark h5">MON</div>
          <div class="w-3/5 px-4 d-flex align-items-center">
            <div class="h4">🌦</div>
            <div class="ml-3 mb-2">Cloudy with a chance of showers</div>
          </div>
          <div class="w-1/5 text-right mx-5">
            <div>2°C</div>
            <div>-1°C</div>
          </div>
        </div>

        <div class="d-flex align-items-center mt-4">
          <div class="w-1/5 text-lg text-dark h5">MON</div>
          <div class="w-3/5 px-4 d-flex align-items-center">
            <div class="h4">🌦</div>
            <div class="ml-3 mb-2">Cloudy with a chance of showers</div>
          </div>
          <div class="w-1/5 text-right mx-5">
            <div>2°C</div>
            <div>-1°C</div>
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
  mounted() {
    console.log("Component Mounted");
  },
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
  font-size: 4.5em;
}
</style>
