import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchContainer = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  return (
    <div >
      { movieNames?
      <div className=" p-0 m-4 text-white bg-black">
        {movieNames?.map((movieName, index) => (
          <MovieList key={movieName } title={movieName} movies={movieResults[index]} source={"gpt"} />
        ))}:
      </div>:<div className="h-[100dvh] bg-transparent" ></div> }
    </div>
  );
};

export default GptSearchContainer;
    