'use client'
import Image from 'next/image';
import {useState} from 'react';




const posts = [
  {
    category: 'Design',
    title: '10 Tips for Crafting the Perfect UX Portfolio',
    description: 'Learn how to showcase your design skills and stand out in a crowded job market.',
    author: 'Emily Lee',
    date: '3 April 2023',   
    poster:
      '/@ DIZAJN.png',
  },
  {
    category: 'Technology',
    title: 'The Future of Mobile App Development',
    description:
      'Discover the latest trends and techniques that will shape the future of mobile app development.',
    author: 'John Smith',
    date: '1 April 2023',   
    poster:
      '/designer1.png',
  },
  {
    category: 'Business',
    title: 'How to Launch a Successful Startup',
    description:
      'Learn the essential steps to launch a successful startup and make your dreams a reality.',
    author: 'Sarah Brown',
    date: '28 March 2023',    
    poster:
      '/designer2.png',
  },
  {
    category: 'Health',
    title: 'The Benefits of Mindfulness Meditation',
    description:
      'Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.',
    author: 'David Kim',
    date: '25 March 2023',   
    poster:
      '/designer3.png',
  },
  {
    category: 'Education',
    title: 'Why Learning a Second Language is Important',
    description:
      'Explore the benefits of learning a second language and how it can improve your cognitive abilities.',
    author: 'Maria Rodriguez',
    date: '22 March 2023',   
    poster:
      '/designer4.png',
  },
  {
    category: 'Travel',
    title: 'The Best Places to Visit in Europe',
    description: 'Discover the top destinations in Europe and plan your dream vacation.',
    author: 'Alex Johnson',
    date: '19 March 2023',    
    poster:
      '/designer5.png',
  },
  {
    category: 'Food',
    title: 'How to Make the Perfect Cup of Coffee',
    description:
      'Learn the secrets to making the perfect cup of coffee and impress your friends and family.',
    author: 'Thomas Lee',
    date: '16 March 2023',    
    poster:
      '/cmana1.jpg',
  },
  {
    category: 'Fashion',
    title: 'The Latest Fashion Trends for Spring 2023',
    description:
      'Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.',
    author: 'Jessica Kim',
    date: '13 March 2023',   
    poster:
      '/bilbord1.png',
  },
  {
    category: 'Sports',
    title: 'The Benefits of Yoga for Athletes',
    description:
      'Learn how practicing yoga can improve your athletic performance and prevent injuries.',
    author: 'Michael Johnson',
    date: '10 March 2023',    
    poster:
      '/bilbord2.png',
  },
]

const Blog = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div>  
      <div className="mx-auto max-w-7xl px-2 py-20">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 items-center justify-center">
          <p className="flex items-center justify-center text-3xl font-bold md:text-5xl md:leading-10">
            Resources and insights
          </p>
          <p className="flex items-center justify-center max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
          <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
        <input
          className="flex h-10 w-full rounded-md border border-accent bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Search Topics"
          // Povezujemo vrijednost polja pretraživanja s našim stateom
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Search
        </button>
      </div>
        </div>
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            {['Design', 'Product', 'Software Engineering', 'Customer Success'].map(
              (filter, index) => (
                <div
                  className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal first:border-b-2 first:border-black"
                  key={filter}
                >
                  {filter}
                </div>
              )
            )}
          </div>
        </div>
        {/* posts */}
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
        <div className="w-full border-t border-gray-300">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block">
              <p>
                showing <strong>1</strong> to <strong>10</strong> of <strong>20</strong> results
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Blog;