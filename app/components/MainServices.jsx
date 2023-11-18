"use client"
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ServiceSlider from "./ServiceSlider";
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';





const MainServices = () => {  
  const [isComponentVisible, setComponentVisible] = useState(false);  

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isComponentVisible) {
      setComponentVisible(true);
    }
  }, [inView, isComponentVisible]);


  return (
    <div className="h-full flex items-center mt-40 pt-40 lg:mt-2 lg:pt-2 z-20">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
               variants={fadeIn("right", 0.2)}
               initial={isComponentVisible ? "show" : "hidden"}
               animate={isComponentVisible ? "show" : "hidden"}
               exit="hidden"
               ref={ref} 
              className=" h2 xl:mt-8"
            >
              Naše usluge <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
               variants={fadeIn("right", 0.4)}
               initial={isComponentVisible ? "show" : "hidden"}
               animate={isComponentVisible ? "show" : "hidden"}
               exit="hidden"
               ref={ref} 
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-gray-300"
            >
              Dobrodošli u svet dizajna reklama koji ne ostavlja nikoga ravnodušnim! Upoznajte naše usluge..
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial={isComponentVisible ? "show" : "hidden"}
            animate={isComponentVisible ? "show" : "hidden"}
            exit="hidden"
            ref={ref} 
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
