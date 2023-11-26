"use client"
//import StoryImage from "../../public/hedgehog1000_a_portfolio_website_cover_photo_for_a_graphic_desi_cabe4185-2624-4a10-b4ef-e061d7799d30.png";
//import VisionImage from "../../public/vision2.png";
//import MissionImage from "../../public/bilbord3.png";
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
          Kada <span className="text-accent">strast</span> susreće inovaciju.
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
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                Godina iskustva
                </div>
            </div>
           {/* clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-semibold text-accent mb-2">
                <CountUp key={1} start={0} end={200} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                zadovoljnih klijenata
                </div>
            </div>
            {/* projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-semibold text-accent mb-2">
                <CountUp key={3} start={0} end={300} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                Završenih projekata
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
            src={"https://cdn.sanity.io/images/odnncdrb/production/058d85a2a301c8ae6ae5bf9df7f850074098892e-1456x816.png"} 
            width={400}
            height={300}
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
            Dobrodošli u naš svet, gde svetlo ide dalje od reklama, a boje nisu samo naša strast, već i naš način izražavanja. Naša priča počinje sa ljubavlju prema dizajnu i željom da stvorimo nešto jedinstveno.
            </p>
            <p className="mb-4">
            Sa skromnim počecima, evoluirali smo u kreativnu radionicu gde se ideje pretvaraju u stvarnost. Svaki projekat za nas je priča koja se razvija, a svaki klijent postaje deo te priče.
            </p>
            <p className="mb-2">
            Zajedno gradimo svetlo i boje koje ostavljaju traga.
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
            Naša vizija je jednostavna - transformisati prostor i komunicirati emocije kroz dizajn. Želimo da svaki projekat bude izraz kreativnosti i inovacije, da inspiriše ljude i da ostavi snažan vizuelni utisak. 
            </p>
            <p className="mb-2">
            Vizualni identitet nije samo sredstvo prepoznavanja; to je jezik koji govori o vrednostima i karakteru. Sa svakim projektom, želimo postaviti standarde i pružiti iskustvo koje prevazilazi očekivanja.
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
            src={"https://cdn.sanity.io/images/odnncdrb/production/f65ae8ef17ac2e7cf53fde2f83ee95c91e0180f7-1024x576.png"} 
            width={400}
            height={300}
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
            src={"https://cdn.sanity.io/images/odnncdrb/production/deb7c0070e41ba7ca5b668c92a517f70193bd1ae-1024x606.png"}
            width={400}
            height={300}
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
            Naša misija je jasna - pružiti klijentima ne samo proizvode, već i iskustvo koje će se pamćenje. Radimo sa strašću i predanošću kako bismo doneli inovativne dizajne koji se ističu.
            </p>
            <p className="mb-4">
            Kroz svetleće reklame, 3D slova, reklamne folije i foto tapete, želimo transformisati svaki prostor u priču koja inspiriše. 
            </p>
            <p className="mb-10">
            Naša misija je stvarati vizuelne priče koje se pamte, jer verujemo da dizajn ima moć da transformiše svet oko nas.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
