import React from "react";
import { Flex, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import BookingCard from "../card/BookingCard";

const BookingCarousal = ({ data, incre, decre, page }) => {
  return (
    <Flex w={"100%"} m={"auto"}>
      <IconButton
        borderRadius="full"
        zIndex={1}
        w={"3%"}
        mt={"10%"}
        position="relative"
        transform={"translate(40%, 100%)"}
        disabled={page == 0}
        onClick={decre}
      >
        <ArrowLeftIcon />
      </IconButton>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        w={"100%"}
        m={"auto"}
        paddingTop={"5%"}
      >
        {data.map((item) => {
          return (
            <div>
              <GridItem>
                <BookingCard key={item.id} data={item} />
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
        transform={"translate(-40%, 100%)"}
        zIndex={1}
        w={"3%"}
        mt={"10%"}
        disabled={page == 3}
        onClick={incre}
      >
        <ArrowRightIcon />
      </IconButton>
    </Flex>
  );
};

export default BookingCarousal;
