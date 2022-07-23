import React from 'react'
import { Heading,Box,Text, Flex,Image } from "@chakra-ui/react";

const Spotlight = () => {
    return (
      <Box w={"95%"}   m={"auto"}>
        <Box>
          <Heading  fontSize={"180%"} textAlign={"left"}>
            In the Spotlight: Tripoto Creators of the Month
          </Heading>
          <Text m={"1% 0% 1% 0%"} textAlign={"left"}>
            Tripoto Family is a community of travel content creators who create
            stunning photo blogs, engaging reels and videos as well as
            informative articles. Here are the most promising creators of the
            month who took us on a beautiful journey across India and the world
            through their content.<br/> Kudos to Tripoto's best creators for May
            2022!
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box w={"30%"}>
            <Image
              borderRadius={"8px"}
              w={"100%"}
              src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1657797228_9.jpg"
            />
          </Box>
          <Box w={"30%"}>
            <Image
              borderRadius={"8px"}
              w={"100%"}
              src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1657797266_8.jpg"
            />
          </Box>
          <Box w={"30%"}>
            <Image
              borderRadius={"8px"}
              w={"100%"}
              src="https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658470135_10.jpg"
            />
          </Box>
        </Flex>
      </Box>
    );
}

export default Spotlight;