"use client"
import GallerySlider from "../components/GallerySlider";
import { motion } from "framer-motion";
import {fadeIn} from "../../variants";

const Gallery = () => {
  const galleryLength = 10;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../public/gallery${i}.jpg`));
  }

  return (
    <>      
      <div className="h-full bg-primary/30 py-36 flex items-center">       
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className=" h2 xl:mt-12"
              >
                Naši radovi <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                imperdiet enim velit, sit amet laoreet est dapibus a. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Nullam eu aliquam metus.
              </motion.p>
            </div>
            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <GallerySlider />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
