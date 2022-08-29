import {
  Button,
  Flex,
  Text,
  LinkBox,
  Box,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsStack } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Dr } from "./Drawer";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GiPaperPlane } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";
import { FiPenTool } from "react-icons/fi";

import { CgProfile } from "react-icons/cg";

import { logout } from "../../redux/Auth/action";

export const Navbar = () => {
   const isauth = useSelector((state) => state.auth.isAuth);
  const userdata = JSON.parse(localStorage.getItem("UserData"));
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  // const isauth=true;
  //console.log("userdata", userdata);
  return (
    <div>
      <Flex
        justifyContent={"space-between"}
        // margin="2px"
        align={"center"}
        bg={"#2f9bdb"}
        position={"relative"}
      >
        <Flex
          fontSize={"27px"}
          textAlign={"center"}
          align={"center"}
          gap="10px"
        >
          <Link to="/">
            <BsStack></BsStack>
          </Link>

          <Link to="/">
            <Text
              fontWeight={"bold"}
              fontFamily="Roboto,sans-serif"
              color={"white"}
            >
              tripoto
            </Text>
          </Link>
        </Flex>

        <Flex display={["none", "none", "none", "view"]} align={"center"}>
          <LinkBox>
            <Menu>
              <MenuButton
                as={Button}
                color={"white"}
                bgColor={"#2f9bdb"}
                _hover={{ bgColor: "#2f9bdb" }}
                rightIcon={<ChevronDownIcon />}
              >
                Inspirations
              </MenuButton>
              <MenuList>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/Dubai">Visit Dubai</Link>
                </MenuItem>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/Singapore">Singapore</Link>
                </MenuItem>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/Beaches">Beaches</Link>
                </MenuItem>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/Mountains">Mountains</Link>
                </MenuItem>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/Heritage">Heritage</Link>
                </MenuItem>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/WeekendsGuide">Weekends Guide</Link>
                </MenuItem>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/RoadTrips">Road Trips</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </LinkBox>
          <LinkBox>
            <Link to={"/froums"}>
              <Button
                as="a"
                variant="ghost"
                color={"white"}
                colorScheme={"white"}
                area-label="Tools"
                my={5}
                w="100%"
              >
                Froums
              </Button>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link to={"/packages"}>
              <Button
                as="a"
                variant="ghost"
                color={"white"}
                colorScheme={"white"}
                area-label="Tools"
                my={5}
                w="100%"
              >
                Packages
              </Button>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link to="/AboutUs">
              <Button
                as="a"
                variant="ghost"
                color={"white"}
                colorScheme={"white"}
                area-label="Tools"
                my={5}
                w="100%"
              >
                About
              </Button>
            </Link>
          </LinkBox>
          <LinkBox>
            <Menu>
              <MenuButton
                as={Button}
                color={"white"}
                bgColor={"#2f9bdb"}
                _hover={{ bgColor: "#2f9bdb" }}
                rightIcon={<ChevronDownIcon />}
              >
                Publish Trips
              </MenuButton>
              <MenuList>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/create">Create new</Link>
                </MenuItem>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/upload">Upload Photos/Videos</Link>
                </MenuItem>
                <MenuItem fontWeight={"bold"}>
                  <Link to="/blog">Import Blog</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </LinkBox>
        </Flex>

        <Flex>
          {isauth ? (
            <Flex align={"center"}>
              <Flex align={"center"} gap={"15px"}>
                <CgProfile fontSize={"25px"}></CgProfile>
                <Text fontWeight={"bold"}> {"Moazzem"} </Text>
              </Flex>

              <Button
                fontSize={"30px"}
                colorScheme={"white"}
                color={"red"}
                onClick={handleLogout}
              >
                <BiLogOut></BiLogOut>
              </Button>
            </Flex>
          ) : (
            <Flex align={"center"}>
              <Link to="/login">
                <Button
                  colorScheme="blue"
                  variant="link"
                  marginRight={"10px"}
                  fontSize={"20px"}
                  display={["none", "none", "view", "view"]}
                >
                  Log In
                </Button>
              </Link>

              <Link to="/signup">
                <Button
                  colorScheme="blue"
                  variant="solid"
                  h={"50px"}
                  bg="#2f9bdb"
                  marginLeft={"10px"}
                  fontSize={"18px"}
                  display={["none", "none", "view", "view"]}
                >
                  Sign in
                </Button>
              </Link>
            </Flex>
          )}

          <Dr></Dr>
        </Flex>
      </Flex>
    </div>
  );
};
