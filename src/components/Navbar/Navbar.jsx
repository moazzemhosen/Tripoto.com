import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Flex>
        <Box>
          <Image
            bgColor={"black"}
            src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
            alt=""
          />
        </Box>
        <Box>
          <Input type="text" />
        </Box>
      </Flex>

      <Box>
        <Flex>
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Inspiration
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>Fourm</Box>
          <Box>
            {" "}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Inspiration
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>Publish Trip</Box>
          <Box>Sign In</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
