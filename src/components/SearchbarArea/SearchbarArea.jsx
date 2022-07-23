import React from "react";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Stack,
  Heading,
  Box,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import styles from "./SearchbarArea.module.css";

const SearchbarArea = () => {
  return (
    <div className={styles.maindiv}>
      <Box marginTop={"10%"}>
        <Heading color={"white"} >
          India's Largest Community of Travellers
        </Heading>
        <Stack className={styles.inputarea} m={"5%"}>
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
  );
};

export default SearchbarArea;
