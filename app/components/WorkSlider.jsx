"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import Link from "next/link";





// Data
const aboutWork = [
    {
        title: "Naši radovi",
        info: [
            {
                path: "/bilbord1.png",
                name: "Bilbord",
            },
            {
                path: "/bilbord2.png",
                name: "Bilbord2",
            },
           
            {
                path: "/bilbord4.png",
                name: "Bilbord4",
            },
        ],
    },
    {
        title: "3D slova",
        info: [
            {
                path: "/norway.jpg",
            },
            {
                path: "/cmana1.jpg",
            },
        ],
    },
    {
        title: "Foto tapet",
        info: [
            {

                path: "/fototapet4.png",
            },
            {

                path: "/fototapet5.png",
            },
            {

                path: "/fototapet6.png",
            },
        ],
    },
    {
        title: "Reklamne folije",
        info: [
            {

                path: "/designer1.png",
            },
            {

                path: "/designer2.png",
            },
            {

                path: "/designer3.png",
            },
        ],
    },
];

const WorkSlider = () => {
    const [index, setIndex] = useState(0);
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

        <div className="h-full w-full pt-32 mt-10 mb-0 text-center z-20">
            <div className="container mx-auto h-full w-full flex flex-col items-center gap-6">
                {/* text */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("left", 0.2)}
                        initial={isComponentVisible ? "show" : "hidden"}
                        animate={isComponentVisible ? "show" : "hidden"}
                        exit="hidden"
                        ref={ref}
                        className="h2"
                    >
                        Captivating <span className="text-accent">stories</span> birth
                        magnificent designs.
                    </motion.h2>
                   
                </div>
                {/* Info */}
                <motion.div
                    variants={fadeIn("left", 0.6)}
                    initial={isComponentVisible ? "show" : "hidden"}
                    animate={isComponentVisible ? "show" : "hidden"}
                    exit="hidden"
                    ref={ref}
                    className="flex flex-col w-full h-full"
                >
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto mb-10">
                        {aboutWork.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex
                                            ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                                            : ''
                                        } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center gap-4 w-full h-full">
                        {aboutWork[index].info.map((item, itemIndex) => {
                            return (
                    <div
                    key={itemIndex}
                    className="flex items-center justify-center"
                    >                           
                    <div className="flex lg:w-full lg:h-full gap-4">
                    {/* Images */}
                   {item.path && (
                <Image
                key={itemIndex}
                src={item.path}
                alt={""}
                width= {400}
                height={400}                           
                className="w-auto h-auto rounded-lg relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                            />
                                        )}
                                    </div>                   
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
           <div className="flex items-center justify-center py-32 my-10">
           <Link href="/blog" className="bg-[rgba(89,65,169,0.40)] text-sky-400 border border-sky-400 border-b-4 h-[80px] w-[200px] flex items-center justify-center text-xl font-bold overflow-hidden absolute px-4 py-2 rounded-3xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none group animate-pulse duration-300"><span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] items-center justify-center"></span> Istraži više ...
          </Link>
           </div>
        </div>
    );
};

export default WorkSlider;
