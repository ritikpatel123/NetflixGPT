import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import getGenresName from "../utils/getGenresName";
import GenreList from "./GenreList";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IMAGE_PATH } from "../utils/constants";



const MovieCardHover = ({movie_id,centerPosition,hovered,source="home"}) => {
  
   const data = useSelector(source === "gpt" ? store => store.gpt.movieResult : store => store.movies);

   let curr_movie=null
   if (source==="gpt")
{
  return null;
} else {

    let flatData = Object.values(data).flat();
    const validData = flatData.filter(movie => movie !== null);
curr_movie = validData.find(movie => movie.id === movie_id);


}


    const {original_title,poster_path,release_date,vote_average,genre_ids}=curr_movie;
  const genres = getGenresName(genre_ids);

    const releaseYear = release_date && release_date.split("-")[0];
  
    let safeTranslateX = '-82px';
    let safeTranslateY = '-50px';
  
    if (centerPosition.left <= 48) {
      safeTranslateX = '-8px'
    } else if (centerPosition.right <= 48) {
      safeTranslateX = '-168px'
    }
  
    const hoverCardStyle = {
      left: centerPosition.left,
      top: centerPosition.top,
      transform: `translate(${safeTranslateX}, ${safeTranslateY})`,
    };
  
    return (
 
      <div
        className={`movie-hovered absolute w-80 z-[9999] ${hovered && 'hovered'}`}
        style={hoverCardStyle}
      >
        <div className="hover-container bg-[#141414] shadow-md shadow-slate-950 m-2 rounded-md overflow-hidden">
          <div className='h-40 w-full bg-gray-700'>
            <Link className='inline-block w-full h-full'>
              <LazyLoadImage
                src={IMAGE_PATH+poster_path}
                alt={original_title}
                className="w-full h-full object-cover" />
            </Link>
          </div>
          <div className="detail p-5">
            <div className='actions flex items-center gap-3'>
              <Link  className='w-10 h-10 flex items-center bg-white hover:bg-gray-200 text-black rounded-full justify-center'>
              
                <PlayArrowIcon style={{ fontSize: '24px' }} />
              </Link>
              <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border-2 border-solid border-gray-500 hover:border-gray-50'>
      
                <AddIcon style={{ fontSize: '24px' }} />
              </button>
              <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border-2 border-solid border-gray-500 hover:border-gray-50'>
                {/* <span className='icon-line text-[20px]'>thumb_up</span> */}
                <ThumbUpOffAltIcon style={{ fontSize: '24px' }} />
              </button>
              <div className='ml-auto'>
                <button className='w-10 h-10 flex items-center bg-[#262626] text-white rounded-full justify-center border border-solid border-gray-500 hover:border-gray-50'>
            
                  <ExpandMoreIcon style={{ fontSize: '24px' }} />
                </button>
              </div>
            </div>
  
            <div className='mt-6'>
              <h4 className='text-white text-md'>{original_title}</h4>
              <div className='mt-3'>
                <div className='text-sm'>
                  <span className='font-bold text-green-500'>{vote_average} Rating</span>
                  <span className='text-gray-400 ml-3'>{releaseYear}</span>
                </div>
                <div className='genres mt-3 [&>*:last-child]:after:content-none text-gray-400'>
                  {
                    genres.map((genre) => (
                      <GenreList key={genre} genre={genre} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  };
  
  
  export default MovieCardHover;