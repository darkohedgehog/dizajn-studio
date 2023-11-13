import React from 'react';
import MainHeader from '@/app/components/MainHeader';
import MainServices from '../components/MainServices';
import MainCarousel from '@/app/components/MainCarousel';
import ParticlesContainer from '../components/ParticlesContainer';
import WorkSlider from '../components/WorkSlider';
import Clients from '../components/Clients';

const HomeCover = () => {
  return (
    <div className='relative'>
      <ParticlesContainer />
      <MainHeader />      
      <MainServices />      
      <WorkSlider />  
      <Clients />   
      <MainCarousel />                   
    </div>
  );
}

export default HomeCover;
