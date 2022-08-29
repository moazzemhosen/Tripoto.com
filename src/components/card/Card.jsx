import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const { title, sortdesc, img,author } = props.data;
  return (
    <Box>
      <Grid
        gridTemplateRows={["200px", "200px", "300px"]}
        h={"100%"}
        gap={["1%", "0%", "0%"]}
        
      >
        <Box h={["70%"]}>
          <Image h={"100%"} w={"100%"} src={img} borderRadius={"8px"} />
          <Box fontWeight={"bold"} color={"tomato"} textAlign={"left"}>
            <Text fontSize={["60%", "85%", "100%"]}>{title}</Text>
          </Box>

          <Box fontWeight={"bold"} textAlign={"left"}>
            <Text fontSize={["50%", "60%", "90%"]}>{sortdesc}</Text>
            <Text color={"rgb(47,155,219)"}>{author}</Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Card;
