import { requests } from "../API/tmdbApi";

export const urlLinks = {
  popular: requests.fetchTrending,
  upComing: "upComing",
  topRated: "topRated",
  actionMovie: requests.fetchActionMovie,
  horrorMovie: requests.fetchHorrorMovie,
  romanceMovie: requests.fetchRomanceMovie,
  tvComedy: requests.fetchComedyTv,
  realityTv: requests.fetchRealityTv,
  tvDramma: requests.fetchDrammaTv,
};

export const responsiveLargerRow = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1336 },
    items: 6,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1336, min: 1200 },
    items: 5,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 1200, min: 980 },
    items: 4,
    slidesToSlide: 3,
  },
  mobiles: {
    breakpoint: { max: 980, min: 650 },
    items: 3,
    slidesToSlide: 2,
  },
  mobiless: {
    breakpoint: { max: 650, min: 450 },
    items: 2,
    slidesToSlide: 1,
  },
  mobilesss: {
    breakpoint: { max: 450, min: 300 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const responsiveSmallRow = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1336 },
    items: 6,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1636, min: 1400 },
    items: 5,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 1400, min: 1200 },
    items: 4,
    slidesToSlide: 3,
  },
  mobiles: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
    slidesToSlide: 2,
  },
  mobiless: {
    breakpoint: { max: 800, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobilesss: {
    breakpoint: { max: 600, min: 300 },
    items: 1,
    slidesToSlide: 1,
  },
};
