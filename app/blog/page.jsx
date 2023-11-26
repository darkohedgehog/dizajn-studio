'use client'
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { VscSearch } from "react-icons/vsc";
import { motion } from "framer-motion";
import {fadeIn} from "../../variants";
import Link from 'next/link';





const posts = [
  {
    category: 'Dizajn',
    title: 'Vaša priča, naša kreacija',
    description: 'U svetu dizajna koji svetli, svaka naša kreacija je priča koja osvetljava prostor.',
    author: 'Ninoslav Janaćković',
    date: '3 April 2023',   
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/e9a429307cfe50aec0d2c02ab7d5dfc5dc589c25-4096x4096.png',
  },
  {
    category: 'Dizajn',
    title: 'Reklame su nosioci indetiteta vašeg brenda',
    description:
      'Oblikujemo svetleće reklame koje nisu samo vizuelno zadivljujuće, već i nosioci identiteta vašeg brenda.',
    author: 'Ninoslav Janaćković',
    date: '1 April 2023',   
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/ceb697f010d8d22f56d049f5827b922cf71faacd-1024x1024.png',
  },
  {
    category: 'Dizajn',
    title: 'Dizajn koji transformiše izloge',
    description:
      'Naš dizajn folija za izloge transformiše prozore u platna na kojima se igra svetlost, stvarajući privlačne vizualne priče koje privlače poglede.',
    author: 'Ninoslav Janaćković',
    date: '28 Mart 2023',    
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/6ddbbe48a9966419c0de8f27b07f422cee1aa123-1024x1024.png',
  },
  {
    category: '3D-slova',
    title: 'Dobrodošli u svet dimenzija i izražajnosti',
    description:
      '3D slova su više od običnih znakova; ona su suština identiteta.',
    author: 'Ninoslav Janaćković',
    date: '25 Mart 2023',   
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/d30999b513ce3ac84e69c6e1bec3fe9f9df17c2d-1600x901.jpg',
  },
  {
    category: '3D-slova',
    title: 'Dobrodošli u čarobni svet naših 3D slova',
    description:
      'Naša 3D slova stvaraju impozantne vizuelne efekte, ističući vaš brend na način koji je teško zaboraviti.',
    author: 'Ninoslav Janaćković',
    date: '22 Maj 2023',   
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/b4f7dcf273b9748b180b7c4918fd98f3547afe5a-1600x901.jpg',
  },
  {
    category: '3D-slova',
    title: 'Dizajn i preciznost izrade spojeni su u svakom slovu',
    description: 'Bilo da želite naglasiti logo, ime firme ili poruku, naša 3D slova pružaju trodimenzionalni utisak koji se ističe u svakom okruženju.',
    author: 'Ninoslav Janaćković',
    date: '19 Jun 2023',    
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/70eae84a7f3a55b367d5777ec13af7e50d7a5c5f-683x691.jpg',
  },
  {
    category: 'Reklamne-folije',
    title: 'Dobrodošli u svet dinamičnog brendiranja i neograničenih mogućnosti!',
    description:
      'Reklamne folije za izloge transformišu prozore u platna koja privlače poglede.',
    author: 'Ninoslav Janaćković',
    date: '10 Septembar 2023',    
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/5ca1ccbd8eaf42605fd426561a96af39dbaa8363-1600x901.jpg',
  },
  {
    category: 'Reklamne-folije',
    title: 'Istaknite vaše izloge i vozila',
    description:
      'Naše reklamne folije za izloge i vozila nisu samo materijali - one su vizuelni prikaz vaše priče u pokretu.',
    author: 'Ninoslav Janaćković',
    date: '13 Avgust 2023',   
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/0d18356936c4725258516f1d43a5fe9b4df2fb2b-1600x901.jpg',
  },
  {
    category: 'Reklamne-folije',
    title: 'Naše reklamne folije nisu samo nalepnice ',
    description:
      'Od jednostavnih i elegantnih do smelih i šarenih dizajna, prilagođavamo folije tako da odražavaju dušu vašeg poslovanja dok se krećete gradskim ulicama.',
    author: 'Ninoslav Janaćković',
    date: '10 Oktobar 2023',    
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/0659f55a96d58c61957532116412c551d8ff8239-1600x901.jpg',
  },
  {
    category: 'Foto-tapet',
    title: 'Dobrodošli u našu kolekciju foto tapeta',
    description:
      'Svaki detalj, svaka nijansa boje pažljivo je odabrana kako bi stvorila harmoniju između prostora i umetnosti',
    author: 'Ninoslav Janaćković',
    date: '10 Mart 2023',    
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/cce4d129941004701c50b5f046f1d49a25f5a63f-1024x1024.png',
  },
  {
    category: 'Foto-tapet',
    title: 'Ovde umetnost postaje deo vašeg svakodnevnog prostora',
    description:
      'Naše foto tapete nisu samo slike; one su priče koje oživljavaju vaš dom ili poslovni prostor.',
    author: 'Ninoslav Janaćković',
    date: '10 Februar 2023',    
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/ce961520611ab36396e5fb07ef8599aab2d7c57d-1024x1024.png',
  },
  {
    category: 'Foto-tapet',
    title: 'Svaki zid postaje vlastiti pečat vaše jedinstvenosti',
    description:
      'Uz naše foto tapete, svaka soba postaje platno na kojem se ispisuje priča vašeg života.',
    author: 'Ninoslav Janaćković',
    date: '15 Mart 2023',    
    poster:
      'https://cdn.sanity.io/images/odnncdrb/production/e6e03a35657dec50988d7c882a8c1511fcdfcf23-1024x1024.png',
  },
]


const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories] = useState([]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const includesSearchTerm = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const includesSelectedCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((selectedCategory) =>
          post.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );
      return includesSearchTerm && includesSelectedCategory;
    });
  }, [searchTerm, selectedCategories]);

 
  return (
    <div>  
      <div className="mx-auto max-w-7xl px-2 py-20">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 items-center justify-center">
          <motion.h2 
           variants={fadeIn ('down', 0.2)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="flex items-center justify-center text-3xl font-bold md:text-5xl md:leading-10 text-white">Upoznajte   <span className='text-accent mx-2'> naše </span> usluge
          </motion.h2>
          <motion.p 
           variants={fadeIn ('down', 0.4)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="flex items-center justify-center max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-white">
             Osvetlite svoj put ka uspehu i neka vaša reklama bude zvezda koja sija u noći biznisa!
          </motion.p>
          <motion.div 
           variants={fadeIn ('down', 0.6)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
         <input
          className="flex h-10 w-full rounded-md border border-zinc-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:border-red-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Pretražite temu"
          // Povezujemo vrijednost polja pretraživanja s našim stateom
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
         ></input>
         <button
          type="button"
          className="rounded-md bg-[rgba(89,65,169,0.40)] text-sky-400 border border-sky-400 border-b-4 px-3 py-2 h-[45px] w-[150px] text-sm font-semibold shadow-sm hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none group animate-pulse duration-300"
        >
         <VscSearch className='flex items-center justify-center h-6 w-6 mx-6' />
        </button>
      </motion.div>
        </div>
        
        {/* posts */}
        <motion.div 
         variants={fadeIn ('up', 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden"
        className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div key={post.title} className="border">
              <Image src={post.poster} className="aspect-video w-full rounded-md" alt="" width={300} height={300} />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight">
                  #{post.category}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold">{post.title}</p>
                <p className="mt-4 w-full text-sm leading-normal">
                  {post.description}
                </p>
                <div className="mt-4 flex space-x-3">                 
                  <div>
                    <p className="text-sm font-semibold leading-tight">
                      {post.author}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>        
      </div>
      <div className='flex items-center justify-center my-20 pb-16'>
        <Link href="/posts" className="bg-[rgba(89,65,169,0.40)] text-sky-400 border border-sky-400 border-b-4 h-[80px] w-[200px] flex items-center justify-center text-xl font-bold overflow-hidden absolute px-4 py-2 rounded-3xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none group animate-pulse duration-300"><span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] items-center justify-center"></span> Više o ...        
        
        </Link>
        </div>            
    </div>
  );
}

export default Blog;