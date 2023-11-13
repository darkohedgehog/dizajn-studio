"use client"
import StoryImage from "../../public/hedgehog1000_a_portfolio_website_cover_photo_for_a_graphic_desi_cabe4185-2624-4a10-b4ef-e061d7799d30.png";
import VisionImage from "../../public/NorProo_Norway.jpg";
import MissionImage from "../../public/bilbord3.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import CountUp from "react-countup";

const About = () => {
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
    <>
    <section className="container mx-auto h-full flex flex-col items-center justify-center xl:flex-row gap-x-6 mb-8">
    <motion.h2
         variants={fadeIn ('right', 0.2)}
         initial= "hidden"
         animate= "show"
         exit="hidden"
         className="h2 mb-5">
          Captivating <span className="text-accent">stories</span> birth magnificent designs.
    </motion.h2>
        {/* counters */}
        <motion.div 
         variants={fadeIn ('right', 0.6)}
         initial= "hidden"
         animate= "show"
         exit="hidden"
         className="flex items-center justify-center md:flex md::max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-semibold text-accent mb-2">
                <CountUp key={0} start={0} end={19} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of experience
                </div>
            </div>
           {/* clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-semibold text-accent mb-2">
                <CountUp key={1} start={0} end={200} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Satisfied clients
                </div>
            </div>
            {/* projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-semibold text-accent mb-2">
                <CountUp key={3} start={0} end={300} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Finished projects
                </div>
            </div>
          </div>
         </motion.div>
      </section>      
      <section className="flex items-center justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          ref={ref} 
          className="container">
            <Image 
            className="rounded-3xl hover:-skew-y-2" 
            src={StoryImage} 
            alt="O nama" />
          </motion.div>
          <motion.div 
           variants={fadeIn("right", 0.4)}
           initial="hidden"
           animate="show"
           exit="hidden"
           ref={ref} 
          className="grid grid-cols-1">
            <h1 className="mb-8">Naša priča</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime voluptates numquam ducimus nam at sequi inventore libero atque placeat?
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, adipisci iure rem voluptate qui corporis?
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
          variants={fadeIn("left", 0.2)}
          initial={isComponentVisible ? "show" : "hidden"}
          animate={isComponentVisible ? "show" : "hidden"}
          exit="hidden"
          ref={ref} 
          className="grid">
            <h1 className="mb-8">Naša vizija</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime voluptates numquam ducimus nam at sequi inventore libero atque placeat?
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, adipisci iure rem voluptate qui corporis?
            </p>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.4)}
          initial={isComponentVisible ? "show" : "hidden"}
          animate={isComponentVisible ? "show" : "hidden"}
          exit="hidden"
          ref={ref} 
          className="container">
            <Image 
            className="rounded-3xl hover:-skew-y-2" 
            src={VisionImage} 
            alt="Vision" />
          </motion.div>
        </div>
      </section>

      <section className="flex items-center justify-center pb-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={isComponentVisible ? "show" : "hidden"}
          animate={isComponentVisible ? "show" : "hidden"}
          exit="hidden"
          ref={ref} 
          className="container">
            <Image 
            className="rounded-3xl hover:-skew-y-2 mb-4 mx-auto" 
            src={MissionImage}
            alt="Naša misija" />
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.4)}
          initial={isComponentVisible ? "show" : "hidden"}
          animate={isComponentVisible ? "show" : "hidden"}
          exit="hidden"
          ref={ref} 
          className="grid grid-cols-1">
            <h1 className="mb-8">Naša misija</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime voluptates numquam ducimus nam at sequi inventore libero atque placeat?
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, adipisci iure rem voluptate qui corporis?
            </p>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quos.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
