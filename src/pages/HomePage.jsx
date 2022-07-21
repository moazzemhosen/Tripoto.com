
import { Heading } from '@chakra-ui/react';
import React from 'react'
import MiniCard from '../components/HomePage/MiniCard';
import Partners from '../components/HomePage/Partners';
import SearchbarArea from '../components/SearchbarArea/SearchbarArea'

const HomePage = () => {
  
  return (
    <div>
      <SearchbarArea />
      <MiniCard />
      <Heading>In the Spotlight: Partnerships</Heading>
      <Partners/>
    </div>
  );
}

export default HomePage;