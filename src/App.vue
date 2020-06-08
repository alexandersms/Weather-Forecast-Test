<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}
body {
  background: #2d6da6 !important;
}

#app {
  color: #2c3e50;
}
#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
