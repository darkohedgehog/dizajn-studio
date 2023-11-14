import ParticlesContainer from './components/ParticlesContainer';
import MainHeader from './components/MainHeader';
import MainServices from './components/MainServices';
import WorkSlider from './components/WorkSlider';
import Clients from './components/Clients';
import MainCarousel from './components/MainCarousel';


export default function Home() {
  return (     
   <div className='relative'>
      <ParticlesContainer />
      <MainHeader />      
      <MainServices />      
      <WorkSlider />  
      <Clients />   
      <MainCarousel />                   
    </div>   
   
  )
}
