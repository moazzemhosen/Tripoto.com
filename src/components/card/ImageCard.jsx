import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";

const ImageCard = (props) => {
  const {img} = props.data;
  return (
    <Grid gridTemplateRows={"350px"} >
      <Box>
        <Image h={"100%"} w={"100%"} src={img} borderRadius={"8px"} />
      </Box>
    </Grid>
  );
};

export default ImageCard;
