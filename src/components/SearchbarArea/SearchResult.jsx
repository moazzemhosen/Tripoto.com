import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const SearchResult = (props) => {
    
  return (
    <>
      <Link to="/suggestion">
        <Box border={"1px solid black"}>{props.data}</Box>
      </Link>
    </>
  );
}

export default SearchResult