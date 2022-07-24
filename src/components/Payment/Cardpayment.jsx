import React from "react";
import "./Cardpayment.css";
import {
  PopoverContent,
  PopoverHeader,
  Heading,
  Box,
  Text,
  Select,
  Square,
  Flex,
  Spacer,
  Checkbox,
  Link,
  Input,
  Button,
} from "@chakra-ui/react";
import { ArrowBackIcon, AtSignIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Cardpayment = () => {
  const navigate = useNavigate();
  let storedNumber = JSON.parse(localStorage.getItem("number"));
  const handleClickcardpayment = () => {
    navigate("/lastpage")
  }
  return (
    <div>
      <div className="cardpaymentdetailsdiv">
        <Box backgroundColor="#2f9bdb" textAlign="left">
          <Heading color="white" size="sm" fontWeight="600">
            Your upcoming Trip
          </Heading>
          <Text color="blue.100">
            This Payment is for Tripoto's Mindful Retreats
          </Text>
          <Heading color="white" size="xl" fontWeight="600">
            15,000
          </Heading>
        </Box>
        <Box w="100%" backgroundColor="blue.100">
          <Select placeholder="English">
            <option value="Hindi">Hindi</option>
          </Select>
        </Box>
        <Flex backgroundColor="#eeee">
          <Square>
            <Text>
              <ArrowBackIcon></ArrowBackIcon> Card
            </Text>
          </Square>
          <Spacer />
          <Square>
            <Text>
              <AtSignIcon></AtSignIcon>
              {storedNumber}
            </Text>
          </Square>
        </Flex>
        <Text>Add New Card</Text>
        <br />
        <Text
          mb="8px"
          fontSize="10px"
          color="eeee"
          textAlign="left"
          marginLeft="10px"
        >
          Card Number
        </Text>
        <Input
          border="none"
          borderBottom="1px solid grey"
          margin="10px"
          width="94%"
          size="sm"
        />
        <Text
          mb="8px"
          fontSize="10px"
          color="eeee"
          textAlign="left"
          marginLeft="10px"
        >
          Card Holder Name
        </Text>
        <Input
          border="none"
          borderBottom="1px solid grey"
          margin="10px"
          width="94%"
          size="sm"
        />

        <Text
          mb="8px"
          fontSize="10px"
          color="eeee"
          textAlign="left"
          marginLeft="10px"
        >
          Expiry
        </Text>
        <Input
          border="none"
          borderBottom="1px solid grey"
          margin="10px"
          width="94%"
          size="sm"
        />

        <Text
          mb="8px"
          fontSize="10px"
          color="eeee"
          textAlign="left"
          marginLeft="10px"
        >
          CVV
        </Text>
        <Input
          border="none"
          borderBottom="1px solid grey"
          margin="10px"
          width="94%"
          size="sm"
        />
        <Checkbox marginLeft="10px">
          Save card securely for future payment
          <Link color="blue"> Know More</Link>
        </Checkbox>
        <br />
        <Box backgroundColor="#eeee">
          <Flex marginLeft="10px">
            <Checkbox fontSize="10px">USD</Checkbox>
            <Checkbox fontSize="10px">INR</Checkbox>
            <Text flex="1">
              More<ArrowForwardIcon></ArrowForwardIcon>
            </Text>
          </Flex>
        </Box>
        <br />
        <Button onClick={handleClickcardpayment} borderRadius="none" backgroundColor="#2f9bdb" w="100%">
          PROCEED
        </Button>
        <br />
      </div>
    </div>
  );
};

export default Cardpayment;
