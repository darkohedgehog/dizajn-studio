import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

// data
const gallerySlides = {
    slides: [
      {
        images: [
          {
            title: 'title',
            path: '/fototapet.jpg',
          },
          {
            title: 'title',
            path: '/Fototapet2.jpg',
          },
          {
            title: 'title',
            path: '/lola2.jpg',
          },
          {
            title: 'title',
            path: '/lola3.jpg',
          },
        ],
      },
      {
        images: [
          {
            title: 'title',
            path: '/NorProo_Norway.jpg',
          },
          {
            title: 'title',
            path: '/norway.jpg',
          },
          {
            title: 'title',
            path: '/Slova_medijapan5.jpg',
          },
          {
            title: 'title',
            path: '/cmana1.jpg',
          },
        ],
      },
      {
        images: [
          {
            title: 'title',
            path: '/fototapet.jpg',
          },
          {
            title: 'title',
            path: '/Fototapet2.jpg',
          },
          {
            title: 'title',
            path: '/lola2.jpg',
          },
          {
            title: 'title',
            path: '/lola3.jpg',
          },
        ],
      },
    ],
  };

  
  const GallerySlider = () => {
    return (
    <Swiper
      spaceBetween={10}
      pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="h-[280px] sm:h-[480px]"
    >
     {gallerySlides.slides.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
         <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          {slide.images.map((image, index) => {
            return(
              <div 
              key={index} 
              className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image 
                  src={image.path}
                  width={500}
                  height={600}
                  alt=""/>
                  {/* overlay gradient */}
                  <div className="absolute inset-0 transition-all duration-700">
                  </div>
                                 
                </div>
              </div>
              );            
          })}
         </div>
        </SwiperSlide>
      )
     })}
    </Swiper>
    );
  };
  
  export default GallerySlider;