
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import BookingCarousal from "../Carousal/BookingCarousal";

const BookBudget = () => {
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
        `https://the-hindu-server.herokuapp.com/bookbudget?_limit=3&_page=${page}`
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
        Book Budget Tour Packages Curated For You
      </Heading>
      <BookingCarousal data={data} incre={incre} decre={decre} page={page} />;
    </>
  );
};


export default BookBudget;