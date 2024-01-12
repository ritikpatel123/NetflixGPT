import useMovies from "../hooks/useMovies";
import MainContainer from "../components/MainContainer";
import useShows from "../hooks/useShows";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const Browse = () => {
  const movies = useSelector((store) => store.movies);
  useMovies("now_playing", "now_playing", null, null);
  useMovies("trending", "trending", null, null);
  useMovies("bollywood", null, null, "hi");
  useMovies("top_rated", "top_rated", null, null);
  useShows("tvShowInternationl", null, null, "en");
  useMovies("popular", "popular", null, null);
  useMovies("action", null, "28", null);

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
    <div className=" bg-black">
      {
        movies.now_playing ? <MainContainer movie={"now_playing"} />: <div className=" h-screen bg-black"></div>
      }
      
      <SecondaryConatiner />
    </div>
  );
};

export default Browse;
