import React, { useCallback, useState } from "react";
import apiConfig from "../API/reguests";
import RowHover from "./RowHover";
import Details from "./Details";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//swich case useeffect ...chiamare prima !if...
function Row({
  title,
  isLargeRow,
  cart,
  addToFavorite,
  trailer,
  selectedTrailer,
  prova,
  showTrailer,
  removeToFavorite,
  movie,
  id,
}) {
  const [isHovering, SetIsOvering] = useState(-1);
  const [openDetails, setOpenDetails] = useState(false);
  const [moreInfo, setMoreInfo] = useState(-1);

  const handleMouseOver = useCallback((i) => SetIsOvering(i), []);

  const handleMouseOut = useCallback(() => SetIsOvering(-1), []);

  const handleClick = useCallback((i, movie) => {
    setOpenDetails(movie);
    setMoreInfo(i);
    console.log(moreInfo);
    window.scroll(0, 0);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseDetails = useCallback(() => {
    setMoreInfo(-1);
    document.body.style.overflow = "auto";
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className={`row ${title} `}>
        <div className="bg"></div>
        <h2>{title}</h2>
        <Carousel
          infinite={true}
          responsive={responsive}
          transitionDuration={600}
          customTransition={"transform 0.6s ease-in-out"}
          containerClass="row"
          itemClass="row-posters"
        >
          {movie?.map((movie, i) => (
            <div key={i}>
              <div className="row-poster-div">
                <a
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseOut={() => handleMouseOut()}
                  key={movie.id}
                >
                  {isHovering === i ? (
                    <>
                      <RowHover
                        prova={prova}
                        selectedTrailer={selectedTrailer}
                        i={i}
                        movie={movie}
                        handleClick={handleClick}
                        isLargeRow={isLargeRow}
                        moreInfo={moreInfo}
                        addToFavorite={addToFavorite}
                        cart={cart}
                        removeToFavorite={removeToFavorite}
                      />
                    </>
                  ) : null}
                  <img
                    className={`row-poster ${
                      isLargeRow ? "row-posterLarge" : ""
                    }`}
                    src={
                      isLargeRow
                        ? apiConfig.originalImage(movie.poster_path)
                        : apiConfig.originalImage(movie.backdrop_path)
                    }
                    alt={movie.name}
                  />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="row-details">
        {moreInfo !== -1 ? (
          <Details
            handleCloseDetails={handleCloseDetails}
            movie={openDetails}
            trailer={trailer}
            i={moreInfo}
            showTrailer={showTrailer}
            cart={cart}
            addToFavorite={addToFavorite}
            removeToFavorite={removeToFavorite}
          />
        ) : null}
      </div>
    </>
  );
}

export default Row;
