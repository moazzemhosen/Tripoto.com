import React from "react";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Stack,
  Image,
  Heading,
  Box,
} from "@chakra-ui/react";
import {  Search2Icon } from "@chakra-ui/icons";
import styles from "./SearchbarArea.module.css";

const SearchbarArea = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.imagediv}>
        <Image
          src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
          alt="Home Page Banner Image"
        />
      </div>
      <div className={styles.inputdiv}>
        <Box marginTop={"20%"}>
          <Heading color={"white"} m={"20px 0px 10px 0px"}>
            India's Largest Community of Travellers
          </Heading>
          <Stack className={styles.inputarea}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children=""
              />
              <Input placeholder="Search for itineraries, destinations, hotels or activites" />
              <InputRightElement children={<Search2Icon color="green.500" />} />
            </InputGroup>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default SearchbarArea;
