import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const TripCard = (props) => {
  const { title, author, img } = props.data;
  return (
    <Box>
      <Grid gridTemplateRows={"300px"} h={"100%"}>
        <Box h={"70%"}>
          <Image h={"100%"} w={"100%"} src={img} borderRadius={"8px"} />
          <Box fontWeight={"bold"}>
            <Text>{title}</Text>
          </Box>

          <Box>
            <Text color={"rgb(47,155,219)"}>
              <span color={"black"}>By</span> {author}
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default TripCard;
