import React from 'react';
import MainHeader from '@/app/components/MainHeader';
import MainServices from '../components/MainServices';
import MainCarousel from '@/app/components/MainCarousel';
import ParticlesContainer from '../components/ParticlesContainer';
import WorkSlider from '../components/WorkSlider';
import Clients from '../components/Clients';

const HomeCover = () => {
  return (
    <div style={{ position: 'relative' }}>
      <ParticlesContainer
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      <MainHeader style={{ zIndex: 2 }} />      
      <MainServices style={{ zIndex: 2 }} />      
      <WorkSlider style={{ zIndex: 2 }} />  
      <Clients style={{ zIndex: 2 }} />   
      <MainCarousel style={{ zIndex: 2 }} />                   
    </div>
  );
}

export default HomeCover;
