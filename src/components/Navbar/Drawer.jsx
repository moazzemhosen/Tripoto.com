import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  LinkBox,
  Text,
  Divider,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsStack } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { Link } from "react-router-dom";

export const Dr = ({ display }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [ToolsView, setToolView] = useState(false);

  const handleToolShow = () => {
    setToolView(!ToolsView);
  };
  return (
    <div>
      <Button
        ref={btnRef}
        display={["view", "view", "view", "none"]}
        colorScheme="white"
        variant="ghost"
        onClick={onOpen}
      >
        <GiHamburgerMenu fontSize={"27px"} />
      </Button>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={"full"}
        finalFocusRef={btnRef}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent background={"#2f9bdb"} color="white">
          <DrawerCloseButton fontSize={"27px"} />
          <DrawerHeader>
            <Flex
              align={"center"}
              gap="10px"
              fontSize={"30px"}
              fontWeight={"bold"}
            >
              <BsStack></BsStack>
              <Text fontFamily="Roboto,sans-serif">Buffer</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction={"column"} align={"center"}>
              <LinkBox>
                <Button
                  as="a"
                  variant="ghost"
                  colorScheme={"white"}
                  area-label="Tools"
                  my={3}
                  w="100%"
                  fontSize={"27px"}
                  fontWeight={"bold"}
                  onClick={handleToolShow}
                >
                  Inspirations
                  {ToolsView ? (
                    <MdOutlineKeyboardArrowDown
                      fontSize={"35px"}
                    ></MdOutlineKeyboardArrowDown>
                  ) : (
                    <MdOutlineKeyboardArrowRight
                      fontSize={"35px"}
                    ></MdOutlineKeyboardArrowRight>
                  )}
                </Button>
                {ToolsView && (
                  <Flex direction={"column"}>
                    <Link to={"/inspirations"}>
                      <Button
                        as="a"
                        variant="ghost"
                        colorScheme={"white"}
                        area-label="Tools"
                        my={3}
                        w="100%"
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        onClick={onClose}
                      >
                        Visit Dubai
                      </Button>
                    </Link>

                    <Link to={"/analyze"}>
                      <Button
                        as="a"
                        variant="ghost"
                        colorScheme={"white"}
                        area-label="Tools"
                        my={3}
                        w="100%"
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        onClick={onClose}
                      >
                        Visit Singapore
                      </Button>
                    </Link>
                    <Link to={"/Beaches"}>
                      <Button
                        as="a"
                        variant="ghost"
                        colorScheme={"white"}
                        area-label="Tools"
                        my={3}
                        w="100%"
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        onClick={onClose}
                      >
                        Beaches
                      </Button>
                    </Link>
                    <Link to={"/Mountains"}>
                      <Button
                        as="a"
                        variant="ghost"
                        colorScheme={"white"}
                        area-label="Tools"
                        my={3}
                        w="100%"
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        onClick={onClose}
                      >
                        Mountains
                      </Button>
                    </Link>

                    <Divider />
                  </Flex>
                )}
              </LinkBox>
              <LinkBox>
                <Link to={"/fourm"}>
                  <Button
                    as="a"
                    variant="ghost"
                    colorScheme={"white"}
                    area-label="Tools"
                    my={5}
                    w="100%"
                    fontSize={"27px"}
                    fontWeight={"bold"}
                    onClick={onClose}
                  >
                    Fourm
                  </Button>
                </Link>
              </LinkBox>
              <LinkBox>
                <Link to="/Packages">
                  <Button
                    as="a"
                    variant="ghost"
                    colorScheme={"white"}
                    area-label="Tools"
                    my={5}
                    w="100%"
                    fontSize={"27px"}
                    fontWeight={"bold"}
                    onClick={onClose}
                  >
                    Packages
                  </Button>
                </Link>
              </LinkBox>

             
              <LinkBox>
                <Link to="/SignUp">
                  <Button
                    as="a"
                    variant="solid"
                    colorScheme={"orange"}
                    // bg="#ffb0bc"
                    area-label="Tools"
                    my={5}
                    w="100%"
                    fontSize={"20px"}
                    onClick={onClose}
                  >
                    Sign Up
                  </Button>
                </Link>
              </LinkBox>
              <LinkBox>
                <Link to="/login">
                  <Button
                    as="a"
                    variant="ghost"
                    colorScheme={"white"}
                    area-label="Tools"
                    my={5}
                    w="100%"
                    fontSize={"27px"}
                    fontWeight={"bold"}
                    onClick={onClose}
                  >
                    Log in
                  </Button>
                </Link>
              </LinkBox>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
