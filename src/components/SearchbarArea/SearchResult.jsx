import { Box } from '@chakra-ui/react'
import React from 'react'

const SearchResult = (props) => {
    
  return (
      <Box border={"1px solid black"}>
          {props.data}
    </Box>
  )
}

export default SearchResult