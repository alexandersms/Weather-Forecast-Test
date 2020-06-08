<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-navbar mb-3">
      <router-link to="/" class="navbar-brand">Weather App 🌧</router-link>
      <div id="nav">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <router-link to="/about" class="navbar-brand">About</router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.bg-navbar {
  background: #2e6ff2;
}

#nav {
  padding: 5px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
