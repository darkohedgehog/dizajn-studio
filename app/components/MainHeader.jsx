"use client"
import Link from "next/link";
import Image from "next/image";
import image from "../../public/bilbord1.png";
import { motion } from "framer-motion";
import {fadeIn} from "../../variants";


const MainHeader = () => {
  return (
    <header className="w-screen h-[calc(100vh-3rem)] grid place-items-center mt-12 pt-20 z-20">
      <div className="container grid h-full grid-cols-1 md:grid-cols-2 items-center justify-between gap-24">
        <div className="mt-[-3rem]">
          <motion.h3 
          variants={fadeIn ('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="my-10 text-gray-300 font-normal">Istaknite svoje poslovanje
         </motion.h3>
          <motion.h2 
          variants={fadeIn ('down', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl md:text-5xl font-bold">
            VAŠE <span className="text-accent">REKLAME</span> U SAVRŠENOM SVETLU
          </motion.h2>
          <motion.p 
          variants={fadeIn ('down', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="my-10 text-lg md:text-xl text-gray-300">
            Pustite vaše ideje da zasijaju. Kvalitetna izrada, inovativni dizajn i magična svetlost koja će vas izdvojiti u odnosu na druge 
          </motion.p>
         <motion.div
          variants={fadeIn ('down', 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden" 
         >
         <Link href="/gallery" className="bg-[rgba(89,65,169,0.40)] text-sky-400 border border-sky-400 border-b-4 h-[80px] w-[200px] flex items-center justify-center text-xl font-bold overflow-hidden absolute px-4 py-2 rounded-3xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none group animate-pulse duration-300"><span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] items-center justify-center"></span>         Naši radovi
          </Link>
         </motion.div>         
        </div>
        <div className="container grid place-items-center relative">
        <div className="lg:block">
            <Image 
            src={image} 
            alt="HeaderImage"
            className="rounded-3xl bg-cover hover:animate-pulse duration-75 z-10"
            />            
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
