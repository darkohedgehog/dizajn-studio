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
          path: "https://cdn.sanity.io/images/odnncdrb/production/baee24bb432095aadafdaad2b2164a1e500b07e3-2048x1153.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/fabd4eb5f9b377f0a2abdfea112c9238c5d7c337-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/302b265ebef385a21f0f9e7663988c3b29308990-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/df53191201554b45de7ea23c1e9a401927a6cd01-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/cb47a4a6a462b8707db29100be92df1890af6213-960x541.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/7c72d89cda25a2d006d815ba9d464fdcc66f60f5-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/e2fec0db670ef252b08549f1eed591c2e577c5b4-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/97b95615d11fcd7facf9f815c3ff5be1ff41302b-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/45f3cd025af524516003ff2245b23752dce64c34-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/6d3e8b7b69a9b260cc83fae04d7f1da0b60d73ba-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/c7abb63206386cd54d044c753d3605e6ebde3bb9-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/9db6dee073bab04ace96fd9630dd4e4bc4b13f1c-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/353fae96cbeb625017f1976fc1e87e85a72e73f3-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/7dcbdaf29365b7a9089d3ac779321e30fc9d1a73-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/d1c731bc3cfe8ab031715b29c33f1094265ad510-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/345940c911e1404d73f0d8f2218f6ef7adb7225c-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/943fc3b277d2ea4654fb83596a2b7cb080d5a032-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/c47d1b6129cd46fed129af434a51a2b70cffd1ec-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/ceacd8b8aa14fde0dea4956ee2e745f30b26b957-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/0e8ebce92dc2f318cc2de5623c16908f4f2ce430-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/ce11ab11d45cbed117a3850c499c5d1c9a9ccc5a-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/ebd5be400ce3958856fac2afea4248fa6a975bdc-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/b4f7dcf273b9748b180b7c4918fd98f3547afe5a-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/96ef0b1a44cc537a58485551501f21c94a65cd43-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/ad61a9349c8363edd530a49f767dd87febf6a010-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/9555f3adb6a030af03e219dd81d5c81928ae4800-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/3812e7988f4130d08066d126f9e62b26af6aa9b4-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/508dda93470b5373cf216de3f589a0138d35a268-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/53f18b5f56838557217e19c8fbc834d72db924fd-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/bfe8c56bfdeaf6de7a46ae3fbb9d20fdb40c28f0-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/5ca1ccbd8eaf42605fd426561a96af39dbaa8363-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/812b7d8d578cc988e931a8d238b54c485e48124f-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/adbcaa4b6a2fd3b021078d70339079fb7388dcbf-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/86b8d964daf9e44d21049b4fbbe409c4f81d820d-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/5e1d653d7dc2a50957f7912bc5118d5eab5ac4ec-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/0364230d761f91a664142cdf1750e1a090c1ff91-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/bb4b19eab2d3412ee3d6f79ef030c4bdb7028da8-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/7bae7afb9a4c5017bd29feb18e786d07bfb4839d-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/15b2fb141137630467b85ca294cb21273e796201-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/95e36d4a04ea616d42b2f6a8a84e436257a784ea-1600x901.jpg",
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
