import { axiosClient } from "./axios";
import apiConfig from "./reguests";

export const category = {
  movie: "movie",
  tv: "tv",
};
export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

export const requests = {
  fetchTrending: `${apiConfig.baseUrl}/trending/all/week?api_key=${apiConfig.APIKEY}&language=en-US`,
  fetchNetflixOriginals: `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.APIKEY}&with_networks=213`,
  fetchTopRated: `${apiConfig.baseUrl}/movie/top_rated?api_key=${apiConfig.APIKEY}&language=en-US`,
  fetchActionMovie: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.APIKEY}&with_genres=28`,
  fetchComedyMovie: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.APIKEY}&with_genres=35`,
  fetchHorrorMovie: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.APIKEY}&with_genres=27`,
  fetchRomanceMovie: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.APIKEY}&with_genres=10749`,
  fetchDocumentaries: `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.APIKEY}&with_genres=99`,
  fetchComedyTv: `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.APIKEY}&with_genres=35&language=en-US`,
  fetchDrammaTv: `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.APIKEY}&with_genres=18&language=en-US`,
  fetchRealityTv: `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.APIKEY}&with_genres=10764&language=en-US`,
};

const tmdbApi = {
  getMovieList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },

  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },

  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },

  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },

  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },

  credits: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similat";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
