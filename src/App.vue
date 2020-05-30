<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-navbar">
      <a class="navbar-brand" href="#">Weather-Forecast App 🌧</a>
    </nav>
    <div class="container mt-4">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "@/components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>
<style>
body {
  background: #2d6da6;
}
.bg-navbar {
  background: #2E6FF2
}
</style>
