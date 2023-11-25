import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowBottomRight
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Brendiranje',
    description: 'Više od stvaranja logotipa',
  },
  {
    icon: <RxPencil2 />,
    title: 'Dizajn',
    description: 'Dizajn koji privlači pažnju',
  },
  {
    icon: <RxDesktop />,
    title: 'Svetleće reklame',
    description: 'Budite u centru pažnje',
  },
  {
    icon: <RxReader />,
    title: 'Reklamne folije',
    description: 'Čarolija koja transformiše izloge',
  },
  {
    icon: <RxRocket />,
    title: '3D slova',
    description: 'Stvaranje identiteta u prostoru.',
  },
];


  
  const ServiceSlider = () => {
    return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
    >
     {serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
         <div className="bg-[rgba(65,47,123,0.30)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.30)] transition-all duration-300">
          {/* icon */}
          <div className="text-4xl text-accent mb-4">{item.icon}</div>
          {/* title & desc */}
          <div className="mb-8 text-gray-200">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="max-w-[35px] leading-normal text-gray-300">{item.description}</p>
          </div>
          {/* arrow */}
          <div className="text-3xl text-gray-400">
            <RxArrowBottomRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
          </div>
         </div>
        </SwiperSlide>
      )
     })}
    </Swiper>
    );
  };
  
  export default ServiceSlider;