const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  APIKEY: "cbafd9d94de10a7bb34346be22af5086",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};

export default apiConfig;
