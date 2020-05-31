<template>
  <div class="row d-flex align-items-center">
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
          {{ Math.round((Math.round(day.temperatureHigh - 32) * 5) / 9) }}°C
        </div>
        <div>
          {{ Math.round((Math.round(day.temperatureLow - 32) * 5) / 9) }}°C
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FutureWeather",
  props: ["day"],
  data() {
    return {
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
  methods: {
    toDayOfWeek(timestamp) {
      const newDate = new Date(timestamp * 1000);
      const days = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
      return days[newDate.getDay()];
    }
  }
};
</script>

<style scoped></style>
