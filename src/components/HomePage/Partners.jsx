import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
import { Box, Flex, Grid, GridItem, IconButton } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';




const Partners = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/Partnerships").then((res) => {
      setData(res.data);
    });
  }, []);
    return (
      <Flex w={"85%"} m={"auto"}>
        <IconButton
          borderRadius="full"
          zIndex={1}
          w={"3%"}
          mt={"10%"}
        >
          <ArrowLeftIcon />
        </IconButton>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          w={"100%"}
         m={"auto"}
         paddingTop={"5%"}
                
        >
          {data.map((item) => {
            return (
              <div>
                <GridItem>
                  <Card key={item.id} data={item} />
                </GridItem>
              </div>
            );
          })}
        </Grid>
        <IconButton
          // aria-label="right-arrow"
          // colorScheme="messenger"
          borderRadius="full"
          // position="absolute"
          // transform={"translate(0%, -50%)"}
          zIndex={1}
          w={"3%"}
          mt={"10%"}
          // onClick={() => slider?.slickPrev()}
        >
          <ArrowRightIcon />
        </IconButton>
      </Flex>
    );
  
}

export default Partners;