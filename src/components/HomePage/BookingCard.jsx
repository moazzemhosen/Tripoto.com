import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const BookingCard = (props) => {
  const { title, sortdesc, img } = props.data;
  return (
    <Box>
      <Grid
        gridTemplateRows={"500px"}
        h={"100%"}
        border={"1px solid red"}
      >
        <Box h={"45%"}>
          <Image h={"100%"} w={"100%"} src={img} borderRadius={"8px"} />
          <Box fontWeight={"bold"} color={"rgb(53,147,145)"}>
            <Text h={"5%"} p={"2% 0%"}>
              {title}
            </Text>
          </Box>
          <Box fontWeight={"bold"}>
            <Text h={"20%"} m={"1% 0%"}>
              {sortdesc || null}
            </Text>
          </Box>

          <Flex justifyContent={"space-between"} m={"5% 0%"}>
            <Text color={"rgb(53,147,145)"} fontWeight={"bold"}>
              Name
            </Text>
            <Box
              bg={"rgb(53,147,145)"}
              fontWeight={"bold"}
              w={"20%"}
              borderRadius={"full"}
            >
              <Text color={"white"} textAlign={"center"}>
                3D-2N
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"} h={"15%"}>
            <Box h={"100%"}>
              <Text h={"100%"} m={"auto"} fontWeight={"bold"}>
                75000
              </Text>
            </Box>

            <Box>
              <Button h={"100%"} colorScheme="teal" variant="outline">
                Book Now
              </Button>
            </Box>
          </Flex>

          <Flex w={"95%"} mt={"2%"} borderTop={"1px solid gray"} p={"2%"}>
            <Box w={"10%"} borderRadius="full">
              <Image
                borderRadius="full"
                src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
              />
            </Box>
            <Box w={"60%"}>
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
