import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchContainer = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  return (
    <div className="p-0 m-4 bg-black  text-white">
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList key={movieName } title={movieName} movies={movieResults[index]} source={"gpt"} />
        ))}
      </div>
    </div>
  );
};

export default GptSearchContainer;
    