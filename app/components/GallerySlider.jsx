import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Keyboard } from "swiper/modules";
import Image from "next/image";

// data
const gallerySlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/fototapet.jpg",
        },
        {
          title: "title",
          path: "/folija1.jpg",
        },
        {
          title: "title",
          path: "/folija2.jpg",
        },
        {
          title: "title",
          path: "/lola3.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/NorProo_Norway.JPG",
        },
        {
          title: "title",
          path: "/3dslova1.JPG",
        },
        {
          title: "title",
          path: "/medijapan2.JPG",
        },
        {
          title: "title",
          path: "/folija3.JPG",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/folija6.JPG",
        },
        {
          title: "title",
          path: "/folija4.JPG",
        },
        {
          title: "title",
          path: "/folija5.JPG",
        },
        {
          title: "title",
          path: "/fototapet7.JPG",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/brand3.JPG",
        },
        {
          title: "title",
          path: "/folija12.JPG",
        },
        {
          title: "title",
          path: "/folija13.JPG",
        },
        {
          title: "title",
          path: "/folija14.JPG",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/folija15.JPG",
        },
        {
          title: "title",
          path: "/folija16.JPG",
        },
        {
          title: "title",
          path: "/folija17.JPG",
        },
        {
          title: "title",
          path: "/folija18.JPG",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/3dslova5.JPG",
        },
        {
          title: "title",
          path: "/3dslova6.JPG",
        },
        {
          title: "title",
          path: "/3dslova7.JPG",
        },
        {
          title: "title",
          path: "/3dslova8.JPG",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/folija19.JPG",
        },
        {
          title: "title",
          path: "/folija20.JPG",
        },
        {
          title: "title",
          path: "/folija23.JPG",
        },
        {
          title: "title",
          path: "/folija24.JPG",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/folija31.JPG",
        },
        {
          title: "title",
          path: "/folija26.JPG",
        },
        {
          title: "title",
          path: "/folija27.JPG",
        },
        {
          title: "title",
          path: "/folija34.JPG",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/folija28.JPG",
        },
        {
          title: "title",
          path: "/folija32.JPG",
        },
        {
          title: "title",
          path: "/folija36.JPG",
        },
        {
          title: "title",
          path: "/folija41.JPG",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/brand5.JPG",
        },
        {
          title: "title",
          path: "/svetleca3.JPG",
        },
        {
          title: "title",
          path: "/svetleca4.JPG",
        },
        {
          title: "title",
          path: "/folija7.JPG",
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
      modules={[Pagination, Keyboard]}
      effect="fade"  // Dodavanje fade-in/fade-out efekata
      fadeEffect={{
      crossFade: true,
      }}
      keyboard={{
        enabled: true, // Omogućiti tastaturu
      }}
      className="h-[280px] sm:h-[480px]"
    >
      {gallerySlides.slides.map((slide) => {
        const imageChunks = [];
        for (let i = 0; i < slide.images.length; i += 4) {
          imageChunks.push(slide.images.slice(i, i + 4));
        }

        return imageChunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {chunk.map((image) => (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  key={image.path}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                    <Image
                      src={image.path}
                      width={500}
                      height={600}
                      alt=""
                    />
                    {/* overlay gradient 
                    <div className="absolute inset-0 transition-all duration-700"></div>
                    */}
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ));
      })}
    </Swiper>
  );
};

export default GallerySlider;
