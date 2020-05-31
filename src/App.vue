<template>
  <div id="app">
    <Header />
    <div class="container mt-4">
      <Home />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Home from "@/pages/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home
  }
};
</script>
<style>
body {
  background: #2d6da6;
}
</style>
