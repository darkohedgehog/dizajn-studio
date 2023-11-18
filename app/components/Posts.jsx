import Link from "next/link";


export default function Posts({ posts = [] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <main className="container mx-auto grid grid-cols-1 py-36 h-full mb-60">
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 items-center justify-center">
      <h2          
          className="flex items-center justify-center text-3xl font-bold md:text-5xl md:leading-10 text-white">Posetite   <span className='text-accent mx-2'> naš </span> blog
          </h2>
          <p 
           className="flex items-center justify-center max-w-[500px] mx-auto xl:mx-0 mb-10 pb-7 xl:mb-12 px-2 xl:px-0 text-white">
            Dizajn reklama danas je kao bitka boja, oblika i svetlosti. Kako izdvojiti svoju firmu u gunguli informacija i vizuelnih podsticaja? Odgovor leži u svetlećim reklamama, reklamnim folijama koje preobražavaju vozila u pokretne bilborde, i u izlozima koji pričaju priču. Dobrodošli u svet dizajna reklama koji ne ostavlja nikoga ravnodušnim!
          </p>
      </div>
      <h2 className="text-2xl p-4 font-bold">{title}</h2>
      {posts.map((post) => (
        <Link key={post._id} href={post.slug.current} className="p-4 hover:animate-pulse">
          <h2>{post.title}</h2>
        </Link>
      ))}
    </main>
  );
}
