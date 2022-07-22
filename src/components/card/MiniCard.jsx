import React, { useEffect, useState } from "react";
import axios from "axios";
import {Grid, GridItem, Image } from "@chakra-ui/react";
const MiniCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/minicard").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} w={"80%"} m={"auto"} paddingTop={"5%"}>
      {data.map((item) => {
        return (
          <GridItem key={item.id}>
            <Image src={item.img} alt="" />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default MiniCard;
