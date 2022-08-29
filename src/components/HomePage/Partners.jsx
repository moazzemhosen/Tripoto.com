import React, { useEffect, useState } from "react";
import Carousal from "../Carousal/Carousal";
import axios from "axios";
import { Heading } from "@chakra-ui/react";

const Partners = () => {
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
        `https://the-hindu-server.herokuapp.com/Partnerships?_limit=4&_page=${page}`
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
        In the Spotlight: Partnerships
      </Heading>
      <Carousal data={data} incre={incre} decre={decre} page={page} />;
    </>
  );
};

export default Partners;
