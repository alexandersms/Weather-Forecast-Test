<template>
  <div id="favorite">
    <h4>Favoris</h4>
    <div class="favorite-item">
      <div
        class="single-favorite"
        v-for="favorite in favorites"
        :key="favorite.id"
      >
        <h5>{{ favorite.name }}</h5>
        <img :src="iconURL + favorite.icon + ext" alt="image temp" width="50" />
        <p>{{ favorite.temp }}&deg;C</p>
        <button
          class="btn btn-danger btn-sm float-right mt-1"
          @click="$store.dispatch('removeFavorite', favorite.id)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoriteCityWeather",
  data() {
    return {
      iconURL: `http://openweathermap.org/img/wn/`,
      ext: "@2x.png"
    };
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  }
};
</script>

<style scoped>
#favorite {
  color: #ffffff;
  padding: 3% 2.5% 5%;
  position: relative;
  text-align: center;
  background: #26658c;
}
.favorite-item {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  color: white;
  text-align: center;
  padding-top: 20px;
}
.favorite-item p {
  font-size: 0.8rem;
  margin-bottom: 0;
}

.favorite-item p:nth-child(3) {
  font-size: 1.6rem;
  margin-bottom: 0;
}

.favorite-item h3 {
  font-size: 1.6rem;
  font-weight: normal;
}

.favorite-icon {
  color: white;
  width: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.single-favorite {
  border: 1px solid white;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
}

.single-favorite h5 {
  margin-top: 0;
}
</style>
