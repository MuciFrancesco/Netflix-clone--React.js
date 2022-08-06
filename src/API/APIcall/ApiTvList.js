import axios from "axios";
import { urlLinks } from "../../utility/urlLinks";
import tmdbApi, { tvType } from "../tmdbApi";

export const fetchTvList = async () => {
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
  const realityTvs = await axios.get(urlLinks.realityTv);

  const tvDrammas = await axios.get(urlLinks.tvDramma);

  return {
    tvPopulars,
    tvComedys,
    tvDrammas,
    tvOnAirs,
    tvTopRateds,
    realityTvs,
  };
};
