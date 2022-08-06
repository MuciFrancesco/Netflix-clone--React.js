import axios from "axios";
import { urlLinks } from "../../utility/urlLinks";
import tmdbApi, { movieType, tvType } from "../tmdbApi";

export const fetchHomeScreen = async () => {
  const populars = await tmdbApi.getMovieList(movieType.popular, {
    params: {},
  });
  const topRateds = await tmdbApi.getMovieList(movieType.top_rated, {
    params: {},
  });

  const upcomings = await tmdbApi.getMovieList(movieType.upcoming, {
    params: {},
  });

  const actionMovies = await axios.get(urlLinks.actionMovie);

  const tvPopulars = await tmdbApi.getTvList(tvType.popular, {
    params: {},
  });

  const tvTopRateds = await tmdbApi.getTvList(tvType.top_rated, {
    params: {},
  });

  const tvOnAirs = await tmdbApi.getTvList(tvType.on_the_air, {
    params: {},
  });

  const tvComedys = await axios.get(urlLinks.tvComedy);

  return {
    tvComedys,
    tvOnAirs,
    populars,
    tvTopRateds,
    tvPopulars,
    actionMovies,
    upcomings,
    topRateds,
  };
};
