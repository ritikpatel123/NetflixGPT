
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryConatiner/>
    </div>



    //  mainCotainer 
    //    -VideoBackgroud
    //    -VideoTitle
    //  seondaryConatiner
    //     -MovieList*N
    //     -cards*N
  );
};

export default Browse;
