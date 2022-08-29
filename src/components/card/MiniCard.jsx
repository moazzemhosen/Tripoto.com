import React, { useEffect, useState } from "react";
import axios from "axios";
import {Grid, GridItem, Image } from "@chakra-ui/react";
const MiniCard = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8080/minicard").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);
  const minicard= [
    {
      "id": 1,
      "img": "https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"
    },
    {
      "id": 2,
      "img": "https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"
    },
    {
      "id": 3,
      "img": "https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"
    },
    {
      "id": 4,
      "img": "https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"
    }
  ]
  return (
    <Grid
      templateColumns={["repeat(1fr)", "repeat(2, 1fr)","repeat(4, 1fr)"]}
      gap={6}
      w={"80%"}
      m={"auto"}
      paddingTop={"5%"}
    >
      {minicard.map((item) => {
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
