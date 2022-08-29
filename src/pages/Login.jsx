import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { login } from "../redux/Auth/action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const fetchdata = async (er) => {
    let data = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${er.user}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${er.token}`,
        },
      }
    );

    let userData = await data.json();

    dispatch({ type: "SETUSER", payload: userData });
    console.log(userData);
  };

  const handleSubmmit = () => {
    let logindata = { password, username };
    console.log(logindata);
    dispatch(login(logindata)).then((er) => {
      console.log(er);
      if (er.err === "LOGIN_ERROR") {
        alert("Invalid Email or Password .");
      }
      if (er.message === "LOGIN_SUCCESS") {
        console.log(er);
        alert("Login SuccessFull");
        dispatch({ type: "SETUSER", payload: { name: username } });
        // fetchdata(er);
        navigate("/");
      }
    });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>User Name</FormLabel>
              <Input
                type={"text"}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmmit}
              >
                Login
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account ?{" "}
                  <RouterLink to="/SignUp" color={"blue.400"}>
                    Sign Up
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
