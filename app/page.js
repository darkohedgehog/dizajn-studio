import dynamic from 'next/dynamic';

const ParticlesContainer = dynamic(() => import('./components/ParticlesContainer'), { name: 'ParticlesContainerChunk' });
const MainHeader = dynamic(() => import('./components/MainHeader'), { name: 'MainHeaderChunk' });
const MainServices = dynamic(() => import('./components/MainServices'), { name: 'MainServicesChunk' });
const WorkSlider = dynamic(() => import('./components/WorkSlider'), { name: 'WorkSliderChunk' });
//const Clients = dynamic(() => import('./components/Clients'), { name: 'ClientsChunk' });
const MainCarousel = dynamic(() => import('./components/MainCarousel'), { name: 'MainCarouselChunk' });

export default function Home() {
  return (     
    <div className='relative'>
      <ParticlesContainer />
      <MainHeader />      
      <MainServices />      
      <WorkSlider />    
      <MainCarousel />                   
    </div>   
  );
}
