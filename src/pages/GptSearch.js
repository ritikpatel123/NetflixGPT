import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptSearchContainer from "../components/GptSearchContainer";
import { NETFLIX_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" fixed  -z-10">
        <img src={NETFLIX_BG} alt="baground" />
      </div>
      <GptSearchBar />
      <GptSearchContainer />
    </div>
  );
};

export default GptSearch;
