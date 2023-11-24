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
          path: "https://cdn.sanity.io/images/odnncdrb/production/76ecd172a132d6df55ad9c2ed8d52a6b911965ae-2048x1153.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/9da2c8f1e9001c726daf23a17f890f94bdb191a0-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/5abea9c7cf3a640a76e5ad69ebbac4fcc4337209-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/2622f5e6f54991d64fddd1a9c5290f8fdde50c8c-2048x1153.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/5d47728da25fce0e1ec8804908d2df57b7e45d72-960x541.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/97df16fc8e6395dda9135a79b04b1f8685b6fba0-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/f9f1b726deb6cec3594b240badd51199fa35a456-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/999e53a6f75b81331a6e11051e9d91b35c5b6dc7-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/4668693509d285f3a1debc769d14b3bad7b27c71-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/3d63e5bbb24e34ef0ca88cb7e386e2f3d7099a51-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/02e72fcdf0b8abebe233ff1f3c7ffc78aecd6c09-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/ae3bb417a2a16574ffce78e31dbd00b2c85231c6-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/33696c84667d47b8f301f0e3a81a9dbdac5becc5-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/4850708f2d5826b5e3840e83aadde43a4d169621-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/1541df3330018d13b55f72ae45c4f3d877026acc-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/4b9271ff3a923e8566b77f46f9655bef2070c2ce-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/4495e22da30a362056b2fc947f1a29c94750e876-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/64f6e38865837ec01b06e9ddcae7a938b351612a-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/a68a3dd0c6c1691fe88c3a6d4c9ccedfba78b7be-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/73d8a695f63f64714d044fe189b51370f5ad7545-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/b40e744f45b74708f0f6a99d52e80a9f6d73bb33-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/a0c43a1547419dceebcab15c59f7537a6c711b3d-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/5f1fa97499413013d992353b806639814a25c5cb-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/cc63e47c179f15db7e28ca261fb6f983331229e9-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/ddec71cedae32240ed3e520121191030a9095d44-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/b314ad1dbdbba276a726d758d36c00c8cc5174e0-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/f2f4a2e722479cbdff6f3ac85b72b7dab0ac6dea-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/76e682517cd6c7733ab327ace594c36415747ded-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/92e13fe21a003eab345b7b172a9104248246eea7-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/e97314cfa43e8b906aa9854cee79148e7806d31d-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/469f3feb1d7382e14b95ba49557da4991b3240d3-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/8c2036d8489f4332fc72b39dfaaefe971e4f6890-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/6df09d50c577ca4d8d0d5a4ef299ec95524e2e43-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/4f52086d266d1c88b1d9974c0bb69e1e25614bef-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/7ae36b85783965cc112ec8c165109ed668239b62-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/44ea9b7b6152f21f9dd4391a022ef898d717286b-1600x901.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/c5fe67e3f08c11bf21d904fe2c705d34f6cde976-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/13304f59fbf58591a9b18fbb9fa2db8cd36167d1-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/3741595c111c16747756abccb43b8681a875b0a1-1600x901.jpg",
        },
        {
          title: "title",
          path: "https://cdn.sanity.io/images/odnncdrb/production/54002ff57fc258cbf39556ceb7cfc26b64c34f93-1600x901.jpg",
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
