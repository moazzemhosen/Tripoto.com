import React from 'react'
import "./Details.css";


const DetailsForm = () => {
  return 
    // <div className="pricedetailsrighthandsidediv">
    //   <div>
    //     <Text style={{ fontWeight: 600, marginLeft: "15px", marginTop: "5px" }}>
    //       Price Details
    //     </Text>
    //   </div>
    //   <Flex style={{ marginLeft: "15px" }}>
    //     <Square>
    //       <Text>Total Amount</Text>
    //     </Square>
    //     <Spacer />
    //     <Square flex="1">
    //       <Text>15,000</Text>
    //     </Square>
    //   </Flex>

    //   <br />
    //   <hr />
    //   <br />
    //   <div>
    //     <Text style={{ fontWeight: 600, marginLeft: "15px" }}>Redemption</Text>
    //   </div>
    //   <Flex style={{ marginLeft: "15px" }}>
    //     <Checkbox> Earned Credits</Checkbox>
    //     <Spacer />
    //     <Square flex="1">
    //       <Text color="blue">-100</Text>
    //     </Square>
    //   </Flex>
    //   <Flex style={{ marginLeft: "15px" }}>
    //     <Square>
    //       <Text textAlign="center" color="grey">
    //         You have 25 credits in your account
    //       </Text>
    //     </Square>
    //     <Square flex="1">
    //       <Text color="grey">-25</Text>
    //     </Square>
    //   </Flex>
    //   <Box
    //     margin="10px"
    //     bg="blue.50"
    //     border="1px dashed grey"
    //     borderRadius="2px"
    //     w="94%"
    //     p={4}
    //   >
    //     <Flex style={{ marginLeft: "15px" }}>
    //       <Square>
    //         <Text color="blue.400" fontWeight="500">
    //           Total Redemption
    //         </Text>
    //       </Square>
    //       <Spacer />
    //       <Square flex="1">
    //         <Text fontWeight="500" color="blue.400">
    //           0
    //         </Text>
    //       </Square>
    //     </Flex>
    //   </Box>
    //   <br />
    //   <hr />
    //   <br />
    //   <Select
    //     margin="10px"
    //     w="94%"
    //     backgroundColor="#eeeeea"
    //     placeholder="State of Residence"
    //   >
    //     <option value="option1">Option 1</option>
    //     <option value="option2">Option 2</option>
    //     <option value="option3">Option 3</option>
    //   </Select>
    //   <br />
    //   <Box bg="#f7f7f7" width="94%" margin="10px">
    //     <Checkbox>Claim GST</Checkbox>
    //     <Text marginLeft="25px">
    //       Add your GST number for tax claim purposes (optional){" "}
    //     </Text>
    //   </Box>
    //   <br />
    //   <Flex>
    //     <Checkbox style={{ marginLeft: "15px" }}>
    //       I accept Tripoto's <Link color="blue">Terms and conditions</Link>
    //     </Checkbox>
    //   </Flex>
    //   <br />
    //   <hr />
    //   <br />
    //   <Flex style={{ marginLeft: "15px" }}>
    //     <Square>
    //       <Text>Grand Total</Text>
    //     </Square>
    //     <Spacer />
    //     <Square flex="1">
    //       <Text>15,000</Text>
    //     </Square>
    //   </Flex>
    //   <br />
    //   <Popover autoFocus={true} closeOnBlur={false}>
    //     <PopoverTrigger>
    //       <Button colorScheme="blue" w="94%" margin="5%">
    //         Proceed to the pay 15,000 <ArrowForwardIcon></ArrowForwardIcon>
    //       </Button>
    //     </PopoverTrigger>
    //     <PopoverContent
    //       position="relative"
    //       autoFocus={true}
    //       // marginRight="60px"
    //     >
    //       <PopoverHeader backgroundColor="#2f9bdb">
    //         <Box>
    //           <Heading color="white" size="sm" fontWeight="600">
    //             Your upcoming Trip
    //           </Heading>
    //           <Text color="blue.100">
    //             This Payment is for Tripoto's Mindful Retreats
    //           </Text>
    //           <Heading color="white" size="xl" fontWeight="600">
    //             15,000
    //           </Heading>
    //         </Box>
    //         <Box w="100%">
    //           <Select placeholder="English">
    //             <option value="Hindi">Hindi</option>
    //           </Select>
    //         </Box>
    //       </PopoverHeader>
    //       <PopoverArrow />
    //       <PopoverCloseButton />
    //       <Box backgroundColor="blue.50">
    //         <Flex>
    //           <Square>
    //             <CheckCircleIcon
    //               color="green"
    //               marginRight="5px"
    //             ></CheckCircleIcon>
    //             Razorpay Trusted Business
    //           </Square>
    //           <Spacer />
    //           <Square>
    //             <InfoOutlineIcon></InfoOutlineIcon>
    //           </Square>
    //         </Flex>
    //       </Box>
    //       <Stack spacing={4}>
    //         <InputGroup>
    //           <InputLeftElement
    //             pointerEvents="none"
    //             children={
    //               <EditIcon marginTop="20px" marginLeft="5px" color="blue" />
    //             }
    //           />
    //           <Input
    //             w="94%"
    //             margin="10px"
    //             type="tel"
    //             placeholder={`${storedNumber} | ${storedEmail}`}
    //           />
    //         </InputGroup>
    //       </Stack>
    //       <Stack>
    //         <Text marginLeft="10px" color="grey">
    //           PREFERRED PAYMENT METHODS
    //         </Text>
    //       </Stack>
    //       <br />
    //       <Stack spacing={4}>
    //         <InputGroup>
    //           <InputLeftElement
    //             pointerEvents="none"
    //             children={
    //               <img
    //                 height="25px"
    //                 width="25px"
    //                 src="https://cdn.razorpay.com/checkout/phonepe.png"
    //                 alt="image not available"
    //               />
    //             }
    //           />
    //           <Input
    //             type="tel"
    //             placeholder="UPI - PhonePe"
    //             w="94%"
    //             marginLeft="5px"
    //           />
    //         </InputGroup>
    //       </Stack>
    //       <br />
    //       <Text marginLeft="10px" color="grey">
    //         CARDS, UPI & MORE
    //       </Text>
    //       <br />
    //       <Box width="94%" margin="10px" border="1px solid grey">
    //         <Flex borderBottom="1px solid grey" height="50px">
    //           <Square>
    //             <CopyIcon
    //               color="blue.500"
    //               marginLeft="5px"
    //               height="20px"
    //               width="20px"
    //             ></CopyIcon>
    //           </Square>
    //           <Square display="block">
    //             <Text
    //               fontWeight="500"
    //               marginLeft="10px"
    //               onClick={handleClickCard}
    //             >
    //               Card
    //             </Text>
    //             <Text fontSize="16px" color="grey" marginLeft="10px">
    //               Visa,MasterCard,Rupay & More
    //             </Text>
    //           </Square>
    //         </Flex>
    //         <Flex borderBottom="1px solid grey" height="50px">
    //           <Square>
    //             <AttachmentIcon
    //               color="blue.500"
    //               marginLeft="5px"
    //               height="20px"
    //               width="20px"
    //             ></AttachmentIcon>
    //           </Square>
    //           <Square display="block">
    //             <Text fontWeight="500" marginLeft="10px">
    //               UPI/QR
    //             </Text>
    //             <Square marginLeft="10px">
    //               <img
    //                 height="15px"
    //                 width="15px"
    //                 src="https://cdn.razorpay.com/app/googlepay.svg"
    //                 alt="image not available"
    //               />
    //               <Square />
    //               <Square marginLeft="10px">
    //                 <img
    //                   height="15px"
    //                   width="15px"
    //                   src="https://cdn.razorpay.com/checkout/phonepe.png"
    //                   alt="image not available"
    //                 />
    //               </Square>
    //               <Square marginLeft="10px">
    //                 <img
    //                   height="15px"
    //                   width="15px"
    //                   src="https://cdn.razorpay.com/app/paytm.svg"
    //                   alt="image not available"
    //                 />
    //               </Square>
    //               <Text marginLeft="10px"> & More</Text>
    //             </Square>
    //           </Square>
    //         </Flex>
    //         <Flex borderBottom="1px solid grey" height="50px">
    //           <Square>
    //             <LinkIcon
    //               color="blue.500"
    //               marginLeft="5px"
    //               height="20px"
    //               width="20px"
    //             ></LinkIcon>
    //           </Square>
    //           <Square display="block">
    //             <Text fontWeight="500" marginLeft="10px">
    //               Netbanking
    //             </Text>
    //             <Text fontSize="16px" color="grey" marginLeft="10px">
    //               All Indian banks
    //             </Text>
    //           </Square>
    //         </Flex>
    //         <Flex borderBottom="1px solid grey" height="50px">
    //           <Square>
    //             <PlusSquareIcon
    //               color="blue.500"
    //               marginLeft="5px"
    //               height="20px"
    //               width="20px"
    //             ></PlusSquareIcon>
    //           </Square>
    //           <Square display="block">
    //             <Text fontWeight="500" marginLeft="10px">
    //               Wallet
    //             </Text>
    //             <Text fontSize="16px" color="grey" marginLeft="10px">
    //               PhonePe & More
    //             </Text>
    //           </Square>
    //         </Flex>
    //         <Flex borderBottom="1px solid grey" height="50px">
    //           <Square>
    //             <CalendarIcon
    //               color="blue.500"
    //               marginLeft="5px"
    //               height="20px"
    //               width="20px"
    //             ></CalendarIcon>
    //           </Square>
    //           <Square display="block">
    //             <Text fontWeight="500" marginLeft="10px">
    //               EMI
    //             </Text>
    //             <Text fontSize="16px" color="grey" marginLeft="10px">
    //               Debit/Credit cards and EarlySalary
    //             </Text>
    //           </Square>
    //         </Flex>
    //         <Flex height="50px">
    //           <Square>
    //             <CalendarIcon
    //               color="blue.500"
    //               marginLeft="5px"
    //               height="20px"
    //               width="20px"
    //             ></CalendarIcon>
    //           </Square>
    //           <Square display="block">
    //             <Text fontWeight="500" marginLeft="10px">
    //               Pay Later
    //             </Text>
    //             <Text fontSize="16px" color="grey" marginLeft="10px">
    //               ICICI Bank PayLater
    //             </Text>
    //           </Square>
    //         </Flex>
    //       </Box>
          
    //     </PopoverContent>
    //   </Popover>
    // </div>
  
}

export default DetailsForm