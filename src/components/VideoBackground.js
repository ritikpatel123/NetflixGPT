import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";


const VideoBackground = ({ movieid }) => {
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)
    useMovieVideo(movieid)

  return (
    <div>
      <iframe
        className=" w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=T3xU39_7FsIuHLBI&autoplay=1&mute=1&modestbranding=1&showinfo=0&showinfo=0&showsearch=0&rel=1&iv_load_policy=0&cc_load_policy=0&autoplay=1&loop=1&fs=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
