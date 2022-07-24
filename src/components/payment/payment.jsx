import React, { useState } from "react";
import "./Payment.css";
import {
  Stack,
  FormControl,
  Checkbox,
  Input,
  Box,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Details from "./Details";
const Payment = () => {
  const btnRef = React.useRef();
  const [count, setCount] = useState(2);
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [departure, setDepartureCity] = useState("");
  const [date, setDate] = useState("");
  const [checkeditems, setCheckedItems] = useState("");
  const [flag, setFlag] = useState("flase");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (
      !email ||
      !fullname ||
      !number ||
      !departure ||
      !date ||
      !checkeditems
    ) {
      setFlag(true);
    } else {
      setFlag(false);
      navigate("/otp");
      localStorage.setItem("fullname", JSON.stringify(fullname));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("number", JSON.stringify(number));
      localStorage.setItem("departure", JSON.stringify(departure));
      localStorage.setItem("date", JSON.stringify(date));
      localStorage.setItem("checkeditems", JSON.stringify(checkeditems));
      localStorage.setItem("count", JSON.stringify(count));
      console.log("Saved into local storage");
    }
  }
  const handleClickadd = () => {
    setCount(count + 1);
  };
  const handleClicksubstract = () => {
    if (count <= 2) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <img width={"60%"}
        src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg"
        alt=""
      />
      <div className="rightsidepaymentdiv">
        <Stack spacing={4}>
          <Box>
            <FormControl>
              <p className="headofpaymentform">
                Please share your details to get a custom quote.
              </p>
              <br />
              <Input
                isRequired
                focusBorderColor="blue"
                variant="outline"
                id="first-name"
                placeholder="Email"
                borderRadius="none"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <Input
                isRequired
                focusBorderColor="blue"
                variant="outline"
                id="first-name"
                placeholder="Full Name"
                borderRadius="none"
                className="form-control"
                onChange={(event) => setFullName(event.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <Input
                isRequired
                focusBorderColor="blue"
                variant="outline"
                id="first-name"
                placeholder="Contact Number"
                borderRadius="none"
                className="form-control"
                onChange={(event) => setNumber(event.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <Input
                isRequired
                focusBorderColor="blue"
                variant="outline"
                id="first-name"
                placeholder="Departure City"
                borderRadius="none"
                className="form-control"
                onChange={(event) => setDepartureCity(event.target.value)}
              />
            </FormControl>
          </Box>
          <Flex>
            <Box flex="1">
              <Text>No of People</Text>
            </Box>
            <Box flex="1">
              <Flex>
                <Button size="sm" onClick={handleClickadd}>
                  +
                </Button>
                <Text
                  className="countvaluemain"
                  onChange={(event) => setCount(event.target.value)}
                >
                  {count}
                </Text>
                <Button size="sm" onClick={handleClicksubstract}>
                  -
                </Button>
              </Flex>
            </Box>
          </Flex>
          <Box>
            <FormControl>
              <Input
                isRequired
                focusBorderColor="blue"
                type="date"
                placeholder="Chek In Date"
                borderRadius="none"
                className="form-control"
                onChange={(event) => setDate(event.target.value)}
              />
            </FormControl>
          </Box>
        </Stack>
        <p className="roomtypetext">Type of room</p>
        <Stack spacing={5} direction="row">
          <Checkbox
            onChange={(e) => setCheckedItems([e.target.checked.value])}
            size="sm"
            className="roomtypetext"
            colorScheme="blue"
          >
            deluxe room on twin sharing
          </Checkbox>
        </Stack>
        <Stack>
          <Checkbox
            onChange={(e) => setCheckedItems([e.target.checked.value])}
            size="sm"
            className="roomtypetext"
            colorScheme="blue"
          >
            log hut cabins on triple sharing
          </Checkbox>
        </Stack>
        <Stack spacing={3}>
          <Checkbox className="whatsappbookingupdate" colorScheme="blue">
            Send me updates for this booking on
            <FontAwesomeIcon
              className="whatsappicon"
              icon={faWhatsapp}
            ></FontAwesomeIcon>
          </Checkbox>
        </Stack>
        <br />
        <Flex>
          <Box flex="1">
            <Text className="roomtypetext">Amount :</Text>
          </Box>
          <Box flex="1">
            <Text className="amountfetched">15000</Text>
          </Box>
        </Flex>
        <Box>
          <p style={{ fontSize: "12px", marginBottom: "15px" }}>
            Taxes and discounts are calculated at checkout.
          </p>
        </Box>

        <Button
          type="submit"
          borderRadius={"none"}
          colorScheme="blue"
          width="100%"
          onClick={handleSubmit}
        >
          Next <ArrowForwardIcon></ArrowForwardIcon>
        </Button>
        <Box>
          <p style={{ fontSize: "12px", color: "grey", marginTop: "10px" }}>
            I accept the Terms of Use and Privacy Policy of Tripoto.
          </p>
        </Box>
      </div>
    </div>
  );
};

export default Payment;
