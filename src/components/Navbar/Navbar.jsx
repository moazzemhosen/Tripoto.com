

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      p={4}
      w="100%"
      h="65px"
      bg="#2f9bdb"
      color="white.500"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex>
        <Box>
          <Image
            src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
            alt=""
          />
        </Box>
      </Flex>
      <Box>
        <Flex gap="50px" fontWeight={"500"} color="white">
          <Box>
            <Menu>
              <MenuButton
                rightIcon={<ChevronDownIcon />}
                fontWeight={"500"}
                color="white"
              >
                Inspiration
              </MenuButton>
              <MenuList fontWeight={"800"} color="#333333">
                <MenuItem>Visit Dubai</MenuItem>
                <MenuItem>Visit Singapore</MenuItem>
                <MenuItem>Beaches</MenuItem>
                <MenuItem>Mountains</MenuItem>
                <MenuItem>Heritage</MenuItem>
                <MenuItem>Weekend Guide</MenuItem>
                <MenuItem>Upcoming Festivals</MenuItem>
                <MenuItem>Honeymoon Packages</MenuItem>
                <MenuItem>Wildlife Tourism</MenuItem>
                <MenuItem>Road Trips</MenuItem>
                <MenuItem>Getaways Guide</MenuItem>
                <MenuItem>Luxury Travel</MenuItem>
                <MenuItem>Explore More</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>Fourm</Box>

          <Box>Packages</Box>
          <Menu>
            <MenuButton
              rightIcon={<ChevronDownIcon />}
              fontWeight={"500"}
              color="white"
            >
              Publish Trip
            </MenuButton>
            <MenuList fontWeight={"700"} color="black">
              <MenuItem>Create New</MenuItem>
              <MenuItem>Upload Photos/Videos</MenuItem>
              <MenuItem>Import Blog</MenuItem>
            </MenuList>
          </Menu>

          <Box>
            <Link to="/SignUp">
              <Button bg="#2f9bdb" color="white.500" h="85%" w="100%">
                Sign In
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;

