import React from 'react';
import Advantages from '../../components/Advantages/Advantages';
import Clients from '../../components/Clients/Clients';
import Header from '../../components/Header/Header';
import OurTeam from '../../components/OurTeam/OurTeam';
import WorksSection from '../../components/WorksSection/WorksSection';

const Home = () => {
  return (
    <>
      <Header />
      <WorksSection />
      <Advantages />
      <OurTeam />
      <Clients />
    </>
  );
};

export default Home;
