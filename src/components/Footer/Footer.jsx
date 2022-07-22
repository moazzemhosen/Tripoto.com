
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillFacebook, AiOutlineYoutube } from "react-icons/ai";
import {
  FaTwitterSquare,
  FaInstagram,
  FaPinterestSquare,
  FaWifi,
} from "react-icons/fa";

const Logo = () => {
  return (
    <Image
      src="https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg"
      alt=""
    />
  );
};


export const LargeWithLogoLeft = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"8xl"} py={10} p={"20px"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={4}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>India's Largest Travel Community</Text>

            <hr></hr>
            <Box display={"flex"} gap="10px" fontSize="22px">
              <AiFillFacebook />
              <FaTwitterSquare />
              <FaInstagram />
              <AiOutlineYoutube />
              <FaPinterestSquare />
              <FaWifi />
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading fontSize={"lg"}>About Tripoto</Heading>
            <Link href={"#"}>How it Works</Link>
            <Link href={"#"}>FAQ's</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms & Conditions</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading fontSize={"lg"}>Products</Heading>

            <Link href={"#"}>Tour Packages</Link>
            <Link href={"#"}>Travel Guides</Link>
            <Link href={"#"}>trips & Itineraries</Link>
            <Link href={"#"}>Weekend Getaways</Link>
            <Link href={"#"}>Places to Visit</Link>
            <Link href={"#"}>Other Travel Categories</Link>
            <Link href={"#"}>Tripoto Forum</Link>
            <Link href={"#"}>Honeymoon Packages</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading fontSize={"lg"} w="200px">
              Important Travel Links
            </Heading>
            <Link href={"#"}>Goa Tourism</Link>
            <Link href={"#"}>Singapore Tourism</Link>
            <Link href={"#"}>Kerala Tourism</Link>
            <Link href={"#"}>Manali Tourism</Link>
            <Link href={"#"}>Bali Tourism</Link>
            <Link href={"#"}>Sri Lanka Tourism</Link>
            <Link href={"#"}>Honeymoon Destinations in India</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading fontSize={"lg"}>Programs</Heading>
            <Link href={"#"}>Buy Travel Leads</Link>
            <Link href={"#"}>Partner With Us</Link>
            <Link href={"#"}>Earn Credits</Link>
            <Link href={"#"}>Get Paid To Travel</Link>
            <Link href={"#"}>Import Blog to Ltinerary</Link>
            <Link href={"#"}>Tripoto Ai</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <hr></hr>
      <h4 style={{ textAlign: "center" }}> © All rights reserved</h4>
    </Box>
  );
};
