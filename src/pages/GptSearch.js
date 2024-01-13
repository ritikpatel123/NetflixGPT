import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptSearchContainer from "../components/GptSearchContainer";
import { NETFLIX_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute  -z-10">
        <img  className="fixed h-[100%]" src={NETFLIX_BG} alt="background" />
      </div>
      <GptSearchBar />
      <GptSearchContainer />
    </div>
  );
};

export default GptSearch;
