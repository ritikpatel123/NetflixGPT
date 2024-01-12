import React from "react";
import MainContainer from "../components/MainContainer";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  useMovies("hollywood", null, null, "en");
  useMovies("romance", null, 10749, null);
  useMovies("scienceFiction", null, 878, null);
  useMovies("adventure", null, 12, null);
  useMovies("animation", null, 16, null);

  const SecondaryConatiner = () => {
    const movies = useSelector((store) => store.movies);

    return (
      <div className="bg-black">
        <div className="-mt-52  pl-7 relative z-20">
          <MovieList title={"Bollywood Superstar"} movies={movies.bollywood} />
          <MovieList
            title={"Top 10 Trending Movies"}
            type={"trending"}
            movies={movies.hollywood}
          />
          <MovieList title={"Action Thriller"} movies={movies.action} />
          <MovieList title={"Romantic Movies"} movies={movies.romance} />
          <MovieList title={"Science Fiction"} movies={movies.scienceFiction} />
          <MovieList title={"Adventure Movies"} movies={movies.adventure} />
          <MovieList title={"Popular in Animation"} movies={movies.animation} />
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

export default Movies;
