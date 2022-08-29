
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import BookingCarousal from "../Carousal/BookingCarousal";

const TravelLearn = () => {
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
        `https://the-hindu-server.herokuapp.com/booking?_limit=3&_page=${page}`
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
        Travel and Learn with Tripoto's Mindful Retreats
      </Heading>
      <BookingCarousal data={data} incre={incre} decre={decre} page={page} />;
    </>
  );
};

export default TravelLearn;