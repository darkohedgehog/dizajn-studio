"use client"
import ClientSlider from "./ClientSlider";
import { motion } from "framer-motion";
import {fadeIn} from "../../variants";
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';





const Clients = () => {
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
      <div className="h-full bg-primary/30 py-32 text-center">
        <div className="container mx-auto h-full flex flex-col justify-center">
          {/* title */}
          <motion.h2 
          variants={fadeIn("right", 0.2)}
          initial={isComponentVisible ? "show" : "hidden"}
          animate={isComponentVisible ? "show" : "hidden"}
          exit="hidden"
          ref={ref} 
          className="h2 mb-8 xl:mb-0">What clients <span className="text-accent">say.</span>
          </motion.h2>
         {/* slider */}
          <motion.div 
          variants={fadeIn("right", 0.4)}
          initial={isComponentVisible ? "show" : "hidden"}
          animate={isComponentVisible ? "show" : "hidden"}
          exit="hidden"
          ref={ref} >
            <ClientSlider />
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Clients;