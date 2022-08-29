import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import TripCarousal from "../Carousal/TripCarousal";

const FindPlaces = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  console.log(data.length);

  //partnership

  const incre = () => {
    // alert("yes");
    setPage(page + 1);
  };
  const decre = () => {
    // alert("no")
    setPage(page - 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://the-hindu-server.herokuapp.com/bestPlaces?_limit=4&_page=${page}`
      )
      .then((res) => {
        setData(res.data);
        //  console.log(res.data);
      });
  }, [page]);
  return (
    <>
      <Heading
        m={"3% 0% 0% 3%"}
        fontSize={["95%", "100%", "180%"]}
        textAlign={"left"}
      >
        Find Best Places to Visit in India in July & August
      </Heading>
      <TripCarousal data={data} incre={incre} decre={decre} page={page} />;
    </>
  );
};

export default FindPlaces;
