import React, { useState } from "react";
import MovieCard, { WithTrending } from "./MovieCard";
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
const MovieList = ({ title,type, movies,source }) => {
  const [slidesPerGroup, setSlidesPerGroup] = useState(2);
  SwiperCore.use([Navigation, Pagination]);
  const handleResize = () => {
    const slidesInView = Math.floor(window.innerWidth / 144);  // Adjust 200 to your slide width
    setSlidesPerGroup(slidesInView);
  };
 
  return (
    <div className="px-4 text-white">
      <h1 className="text-3xl p-2 py-4">{title}</h1>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        onResize={handleResize}
        className="mySwiper flex overflow-visibleF"
      >
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie,index) => (
             
            <MovieCard  key={movie.id} title={title} id={movie.id} source={source} posterpath={movie.poster_path} />
 
          ))}
          
        </div>
      </div>
      </Swiper>
    </div>
  );
};

export default MovieList;
