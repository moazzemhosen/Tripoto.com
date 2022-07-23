import {
  Link,
  Select,
  Checkbox,
  CheckboxGroup,
  Spacer,
  Square,
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  CheckCircleIcon,
  InfoOutlineIcon,
  EditIcon,
} from "@chakra-ui/icons";
import React from "react";
import "./Details.css";
const Details = () => {
  let storedFullName = JSON.parse(localStorage.getItem("fullname"));
  let storedEmail = JSON.parse(localStorage.getItem("email"));
  let storedNumber = JSON.parse(localStorage.getItem("number"));
  let departureCity = JSON.parse(localStorage.getItem("departure"));
  let storedDate = JSON.parse(localStorage.getItem("date"));
  let storedCheckedItems = JSON.parse(localStorage.getItem("checkeditems"));
  return (
    <div className="detailsmaindiv">
      <div className="topdivindetailspage">
        <div>
          <img
            className="imagetagindetailspage"
            src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg"
            alt="image not available"
          ></img>
        </div>
        <div>
          <h4 className="textafterimageflex">
            Explore One of Asia's Spookiest Spots While Unwinding Amidst Nature
            | Seegreen Lodges, Mussorie.
          </h4>
          <div className="mindfullretreatsdiv">
            <img
              className="logomindsetretretreats"
              src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
              alt=""
            ></img>
            <p className="mindfullretreatstxt">Tripotos mindfull Retreats</p>
          </div>
        </div>
      </div>
      <div className="pricedetailsrighthandsidediv">
        <div>
          <Text
            style={{ fontWeight: 600, marginLeft: "15px", marginTop: "5px" }}
          >
            Price Details
          </Text>
        </div>
        <Flex style={{ marginLeft: "15px" }}>
          <Square>
            <Text>Total Amount</Text>
          </Square>
          <Spacer />
          <Square flex="1">
            <Text>15,000</Text>
          </Square>
        </Flex>
        <br />
        <hr />
        <br />
        <div>
          <Text style={{ fontWeight: 600, marginLeft: "15px" }}>
            Redemption
          </Text>
        </div>
        <Flex style={{ marginLeft: "15px" }}>
          <Checkbox> Earned Credits</Checkbox>
          <Spacer />
          <Square flex="1">
            <Text color="blue">-100</Text>
          </Square>
        </Flex>
        <Flex style={{ marginLeft: "15px" }}>
          <Square>
            <Text textAlign="center" color="grey">
              You have 25 credits in your account
            </Text>
          </Square>
          <Square flex="1">
            <Text color="grey">-25</Text>
          </Square>
        </Flex>
        <Box
          margin="10px"
          bg="blue.50"
          border="1px dashed grey"
          borderRadius="2px"
          w="94%"
          p={4}
        >
          <Flex style={{ marginLeft: "15px" }}>
            <Square>
              <Text color="blue.400" fontWeight="500">
                Total Redemption
              </Text>
            </Square>
            <Spacer />
            <Square flex="1">
              <Text fontWeight="500" color="blue.400">
                0
              </Text>
            </Square>
          </Flex>
        </Box>
        <br />
        <hr />
        <br />
        <Select
          margin="10px"
          w="94%"
          backgroundColor="#eeeeea"
          placeholder="State of Residence"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <br />
        <Box bg="#f7f7f7" width="94%" margin="10px">
          <Checkbox>Claim GST</Checkbox>
          <Text marginLeft="25px">
            Add your GST number for tax claim purposes (optional){" "}
          </Text>
        </Box>
        <br />
        <Flex>
          <Checkbox style={{ marginLeft: "15px" }}>
            I accept Tripoto's <Link color="blue">Terms and conditions</Link>
          </Checkbox>
        </Flex>
        <br />
        <hr />
        <br />
        <Flex style={{ marginLeft: "15px" }}>
          <Square>
            <Text>Grand Total</Text>
          </Square>
          <Spacer />
          <Square flex="1">
            <Text>15,000</Text>
          </Square>
        </Flex>
        <br />
        <Popover closeOnBlur="false">
          <PopoverTrigger>
            <Button colorScheme="blue" w="94%" margin="10px">
              Proceed to the pay 15,000 <ArrowForwardIcon></ArrowForwardIcon>
            </Button>
          </PopoverTrigger>
          <PopoverContent marginRight="600px" marginBottom="300px">
            <PopoverHeader backgroundColor="#2f9bdb">
              <Box>
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
              <Box w="100%">
                <Select placeholder="English">
                  <option value="Hindi">Hindi</option>
                </Select>
              </Box>
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <Box backgroundColor="blue.50">
              <Flex>
                <Square>
                  <CheckCircleIcon
                    color="green"
                    marginRight="5px"
                  ></CheckCircleIcon>
                  Razorpay Trusted Business
                </Square>
                <Spacer />
                <Square>
                  <InfoOutlineIcon></InfoOutlineIcon>
                </Square>
              </Flex>
            </Box>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <EditIcon marginTop="20px" marginLeft="5px" color="blue" />
                  }
                />
                <Input
                  w="94%"
                  margin="10px"
                  type="tel"
                  placeholder={`${storedNumber} | ${storedEmail}`}
                />
              </InputGroup>
            </Stack>
            <Stack>
              <Text marginLeft="10px" color="grey">
                PREFERRED PAYMENT METHODS
              </Text>
            </Stack>
            <br />
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <img
                      height="25px"
                      width="25px"
                      src="https://cdn.razorpay.com/checkout/phonepe.png"
                      alt="image not available"
                    />
                  }
                />
                <Input
                  type="tel"
                  placeholder="UPI - PhonePe"
                  w="94%"
                  marginLeft="5px"
                />
              </InputGroup>
            </Stack>
            <br />
            <Text marginLeft="10px" color="grey">
              CARDS, UPI & MORE
            </Text>
            <Box>
              <Flex>
                <Square>
                    
                </Square>
              </Flex>
            </Box>
          </PopoverContent>
        </Popover>
      </div>
      <br />
      <hr style={{ width: "950px", marginLeft: "100px" }} />
      <br />
      <Heading
        fontWeight={500}
        textAlign={"left"}
        marginLeft={"100px"}
        size="lg"
      >
        Details Providied
      </Heading>
      <div className="detailsprovideddiv">
        <div className="detailsfirstdiv">
          <br />
          <div>
            <Text color="grey">Full Name</Text>
            <p>{storedFullName}</p>
          </div>
          <br />
          <div>
            <Text color="grey">Contact</Text>
            <p>{storedNumber}</p>
          </div>
          <br />
          <div>
            <Text color="grey">Departure City</Text>
            <p>{departureCity}</p>
          </div>
          <br />
          <div>
            <Text color="grey">Check-Out-Date</Text>
            <p>{storedDate}</p>
          </div>
          <br />
          <div>
            <Text color="grey">Room Type</Text>
            <p>{storedCheckedItems}</p>
          </div>
          <br />
          <div>
            <Text color="grey">Amount</Text>
            <p>15000</p>
          </div>
          <br />
        </div>
        <div className="detailsseconddiv">
          <br />
          <div>
            <Text color="grey">Email</Text>
            <p>{storedEmail}</p>
          </div>
          <br />
          <div>
            <Text color="grey">Destination</Text>
            <p>Mussoorie</p>
          </div>
          <br />
          <div>
            <Text color="grey">Check-In-Date</Text>
            <p>25July,2022 12:00PM</p>
          </div>
          <br />
          <div>
            <Text color="grey">Duration</Text>
            <p>3 Days / 2 Nights</p>
          </div>
          <br />
          <div>
            <Text color="grey">No of People</Text>
            <p> Adults</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
