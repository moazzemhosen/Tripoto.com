
import React from 'react'
import Animation from "../components/HomePage/Animation";
import CkeckOutHotels from "../components/HomePage/CkeckOutHotels";
import FindPlaces from "../components/HomePage/FindPlaces";
import MiniCard from "../components/card/MiniCard";
import Partners from "../components/HomePage/Partners";
import SearchbarArea from "../components/SearchbarArea/SearchbarArea";
import TravelLearn from "../components/HomePage/TravelLearn";
import { Box } from '@chakra-ui/react';
import PlanTrip from '../components/HomePage/PlanTrip';
import BookBudget from '../components/HomePage/BookBudget';
import Workshops from '../components/HomePage/Workshops';
import Travelvlog from '../components/HomePage/Travelvlog';
import NextTrip from '../components/HomePage/NextTrip';
import Spotlight from "../components/HomePage/Spotlight";

const HomePage = () => {
  
  return (
    <div>
      <SearchbarArea />
      <Box w={"80%"} m={"auto"} >
        <MiniCard />
        <hr />
        <Partners />
        <Animation />
        <FindPlaces />
        <PlanTrip />
        <CkeckOutHotels />
        <TravelLearn />
        <Workshops/>
        <BookBudget />
        <Spotlight/>
        <NextTrip/>
        <Travelvlog/>
      </Box>
    </div>
  );
};

export default HomePage;
