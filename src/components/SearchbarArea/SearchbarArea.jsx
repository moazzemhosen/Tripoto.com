import { useState, useCallback } from "react";
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
import SearchResult from "./SearchResult";

const SearchbarArea = () => {
  const [search, setSearch] = useState([]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (event) => {
    const { value } = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

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
            <Input
              name={"search"}
              placeholder={"Search for Weekend Tour Something..."}
              className={"search"}
              onChange={optimisedVersion}
            />
            <InputRightElement children={<Search2Icon color="green.500" />} />
          </InputGroup>
          {search?.length > 0 && (
            <div style={{border:"1px solid red",height:"100px",overflow:"scroll"}}>
              {search?.map((el, i) => (
                <div key={i}><SearchResult data={el.name} /></div>
              ))}
            </div>
          )}
        </Stack>
      </Box>
    </div>
  );
};

export default SearchbarArea;
