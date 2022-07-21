
import { Box } from '@chakra-ui/react';
import React from 'react'
import Animation from '../components/HomePage/Animation';
import FindPlaces from '../components/HomePage/FindPlaces';
import MiniCard from '../components/HomePage/MiniCard';
import Partners from '../components/HomePage/Partners';
import PlanTrip from '../components/HomePage/PlanTrip';
import SearchbarArea from '../components/SearchbarArea/SearchbarArea'

const HomePage = () => {
  
  return (
    <div>
      <SearchbarArea />
      <Box w={"80%"} m={"auto"} border={"1px solid red"}>
        <MiniCard />
        <hr />
        <Partners />
        <Animation />
        <FindPlaces />
        <PlanTrip/>
      </Box>
    </div>
  );
}

export default HomePage;
