import React from 'react'
import { Flex, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Card from '../HomePage/Card';


const Carousal = ({ data, incre, decre,page }) => {
  return (
    <Flex w={"100%"} m={"auto"}>
      <IconButton
        borderRadius="full"
        zIndex={1}
        w={"3%"}
        mt={"10%"}
        position="relative"
        transform={"translate(40%, -40%)"}
        disabled={page ===0}
        onClick={decre}
      >
        <ArrowLeftIcon />
      </IconButton>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        w={"100%"}
        m={"auto"}
        paddingTop={"1%"}
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
         aria-label="right-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="relative"
        transform={"translate(-40%, -40%)"}
        zIndex={1}
        w={"3%"}
        mt={"10%"}
        disabled={page === 3}
        onClick={incre}
      >
        <ArrowRightIcon />
      </IconButton>
    </Flex>
  );
};

export default Carousal