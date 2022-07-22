import React from 'react'
import { Image,Box } from "@chakra-ui/react";

const Animation = () => {
  return (
    <Box h={"280px"} mt={"2%"}>
      <Image 
        objectFit={"contain"}
        h={"100%"}
        w={"100%"}
        src={
          "https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1656479622_header_web2.gif"
        }
      />
    </Box>
  );
}

export default Animation