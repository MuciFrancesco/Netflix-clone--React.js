import axios from "axios";
import { urlLinks } from "../../utility/urlLinks";
import tmdbApi, { movieType } from "../tmdbApi";

export const fetchFilmList = async () => {
  const populars = await tmdbApi.getMovieList(movieType.popular, {
    params: {},
  });
  const topRateds = await tmdbApi.getMovieList(movieType.top_rated, {
    params: {},
  });
  const upcomings = await tmdbApi.getMovieList(movieType.upcoming, {
    params: {},
  });
  const horrorMovies = await axios.get(urlLinks.horrorMovie);
  const actionMovies = await axios.get(urlLinks.actionMovie);
  const romanceMovies = await axios.get(urlLinks.romanceMovie);

  return {
    populars,
    upcomings,
    topRateds,
    horrorMovies,
    actionMovies,
    romanceMovies,
  };
};
