import React from "react";
import "./Otp.css";
import {
  Spacer,
  Box,
  Flex,
  Text,
  HStack,
  PinInput,
  PinInputField,
  Link,
  Stack,
  Button,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";

const Otp = () => {
  const navigate = useNavigate();
  return (
    <div className="mainotpdiv">
      <Flex>
        <Box p="4">
          <Text
            style={{ textAlign: "left", fontWeight: "500", fontSize: "18px" }}
          >
            Verify your phone number
          </Text>
        </Box>
        <Spacer />
        <Box p="4">
          <CloseIcon></CloseIcon>
        </Box>
      </Flex>
      <hr />
      <br />
      <Text>
        We've sent you an OTP code to verify your phone number and prove you're
        a human.
      </Text>
      <br />
      <HStack>
        <PinInput>
          <PinInputField style={{ marginLeft: "200px" }} />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <br />
      <Text>
        Didn't receive one?
        <Link fontWeight={"500"} color={"blue"}>
          Resend OTP.
        </Link>
      </Text>
      <br />
      <div className="dashedlineinotppage">
        <div className="leftsidedashedline"></div>
        <div>
          <p className="centerdashedlinetext">Want to edit phone no?</p>
        </div>
        <div className="rightsidedashedline"></div>
      </div>
      <Input
        width={"550px"}
        borderRadius={"50px"}
        marginLeft={"10px"}
        marginRight={"20px"}
        variant="filled"
        placeholder="+918223037373"
      />
      <br />
      <br />
      <hr />
      <br />
      <Stack marginLeft={"225px"} spacing={4} direction="row">
        <Button
          colorScheme="gray"
          size="md"
          onClick={() => {
            navigate("/details");
          }}
        >
          Continue Without Verification
        </Button>
        <Button colorScheme="blue" size="md">
          Verify
        </Button>
      </Stack>
      <br />
    </div>
  );
};

export default Otp;
