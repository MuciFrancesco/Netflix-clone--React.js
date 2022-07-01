const APIKEY = "cbafd9d94de10a7bb34346be22af5086";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
