import React, { useEffect, useRef, useState } from 'react'
import { IMAGE_PATH } from '../utils/constants'
import { LazyLoadImage } from "react-lazy-load-image-component";
import MovieCardHover from './MovieCaedHover';
import { createPortal } from 'react-dom';

const MovieCard = ({posterpath,id,source}) => {
  
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [centerPosition, setCenterPosition] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

  const handleHover = () => {
    if (posterpath !== null) {
      clearTimeout(hoverTimeout);

      hoverTimeout = setTimeout(() => {
        setHovered(true);
        if (cardRef.current) {
          const triggerRect = cardRef.current.getBoundingClientRect();
          const offsetFromTop = triggerRect.top + window.scrollY;
          const positionFromRight = window.innerWidth - triggerRect.right;
          setCenterPosition({
            left: triggerRect.left,
            right: positionFromRight,
            top: offsetFromTop,
            bottom: offsetFromTop,
          });
        }
      }, 500);
    }
  };

  const handleLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered(false);
  };

  let hoverTimeout;
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize isLargeScreen

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (posterpath === null) return null;

  if(!posterpath) return null;
  return (
    <div className='w-44 p-2 hover:w-50'
    onMouseEnter={handleHover}
    onMouseLeave={handleLeave}
    ref={cardRef}>
      <div className='movie-thumb aspect-[2/3] bg-shimmer overflow-hidden rounded'>
        <img 
        className='hover:scale-110' style={{ transition: '0.9s' }}
        src={IMAGE_PATH+posterpath} 
        alt="" />

</div>
     {hovered && isLargeScreen &&
        createPortal(
          <MovieCardHover source={source} movie_id={id} centerPosition={centerPosition} hovered={true} />,
          document.body
        )
      }
     
    </div>
  )
}



export default MovieCard