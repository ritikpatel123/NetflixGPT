import React from "react";
import MainContainer from "../components/MainContainer";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import useShows from "../hooks/useShows";

const TvShow = () => {
  useShows("tvShowIndia", null, null, "hi");

  const SecondaryConatiner = () => {
    const movies = useSelector((store) => store.movies);
    const topTenTrending = movies?.trending?.slice(0, 10);

    return (
      <div className="bg-black">
        <div className="-mt-52  pl-7 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.tvShowIndia} />
          <MovieList
            title={"Top 10 TV Shows in India"}
            movies={movies.tvShowInternationl}
          />
        </div>
      </div>
    );
  };
  return (
    <div>
      <MainContainer movie={"trending"} />
      <SecondaryConatiner />
    </div>
  );
};

export default TvShow;
