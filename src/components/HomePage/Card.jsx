import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const { title, sortdesc, img } = props.data;
  return (
    <Box>
      <Grid gridTemplateRows={"300px"} h={"100%"}>
        <Box h={"70%"}>
          <Image h={"100%"} w={"100%"} src={img} borderRadius={"8px"} />
          <Box fontWeight={"bold"} color={"tomato"}>
            <Text>{title}</Text>
          </Box>

          <Box fontWeight={"bold"}>
            <Text>{sortdesc}</Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Card;
