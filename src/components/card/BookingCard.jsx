import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BookingCard = (props) => {
  const { img,sort,location,price,logo,limit } = props.data;
  return (
    <Box>
      <Grid gridTemplateRows={["420px"]} h={"100%"} >
        <Box h={"45%"}>
          <Image h={"100%"} w={"100%"} src={img} borderRadius={"8px"} />
          <Box fontWeight={"bold"} color={"rgb(53,147,145)"} textAlign={"left"}>
            <Text h={"5%"} p={"2% 0%"}>
              PACKAGE
            </Text>
          </Box>
          <Box fontWeight={"bold"} textAlign={"left"}>
            <Text h={"20%"}>{sort}</Text>
          </Box>

          <Flex justifyContent={"space-between"} p={"1% 0% 3% 0%"} w={"100%"}>
            <Text color={"rgb(53,147,145)"} fontWeight={"bold"}>
              <StarIcon p={"0% 2% 3% 0%"} m={"0px 2px"} />
              {location}
            </Text>

            <Box
              bg={"rgb(53,147,145)"}
              fontWeight={"bold"}
              w={"20%"}
              borderRadius={"full"}
            >
              <Text
                color={"white"}
                textAlign={"center"}
                fontSize={["70%", "80%", "100%"]}
              >
                {limit || "4D-3N"}
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"} h={"15%"}>
            <Flex
              h={"100%"}
              w={["70%", "70%", "70%"]}
              justifyContent={"space-between"}
            >
              <Text
                
                h={"100%"}
                fontWeight={"bold"}
                fontSize={["80%", "80%", "100%"]}
              >
                {price}
              </Text>
              <Text color={"gray"} fontSize={["70%", "90%", "100%"]}>
                /person
              </Text>
            </Flex>

            <Box>
              <Link to="/payment">
                <Button h={"100%"} colorScheme="teal" variant="outline">
                  Book Now
                </Button>
              </Link>
            </Box>
          </Flex>

          <Flex w={"100%"} mt={"2%"} borderTop={"1px solid gray"} p={"2%"}>
            <Box w={"10%"} borderRadius="full">
              <Image borderRadius="full" src={logo} />
            </Box>
            <Box w={"50%"}>
              <Text fontSize={"70%"} p={"4%"} h={"100%"}>
                Tripotos's Mindful Retreats
              </Text>
            </Box>

            <Box>
              <CheckCircleIcon color={"rgb(109,207,246)"} />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default BookingCard;
