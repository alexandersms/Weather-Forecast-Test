const favorite = {
  addToFavorite(city) {
    console.log("Calling servive");
    console.log(city);
    return new Promise(resolve => {
      console.log("API: Service call done");
      resolve(true);
    });
  }
};

export default favorite;
