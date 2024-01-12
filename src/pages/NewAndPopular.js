import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";

const NewAndPopular = () => {
  const SecondaryConatiner = () => {
    const movies = useSelector((store) => store.movies);
    const topTenTrending = movies?.trending?.slice(0, 10);

    return (
      <div className="bg-black">
        <div className="-mt-52  pl-7 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.now_playing} />
          <MovieList
            title={"Top 10 Trending Movies"}
            type={"trending"}
            movies={topTenTrending}
          />
          <MovieList
            title={"Now Playing Bollywood Movies"}
            movies={movies.bollywood}
          />
          <MovieList title={"Top Rated Movies"} movies={movies.top_rated} />
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
      <MainContainer movie={"bollywood"} />
      <SecondaryConatiner />
    </div>
  );
};

export default NewAndPopular;
