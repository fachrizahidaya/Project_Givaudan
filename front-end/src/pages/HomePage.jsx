import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Button,
  Stack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  InputRightElement,
  Center,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

export const HomePage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/search");
  };

  return (
    <>
      <NavbarComp />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"2xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Center>
            <Image
              src="https://pngimg.com/uploads/google/google_PNG19644.png"
              w="272px"
            ></Image>
          </Center>
          <HStack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <InputGroup size="md">
              <Input
                pl="4.5rem"
                type={"text"}
                placeholder="Search Google or type a URL"
                w={"500px"}
                borderRadius="50px"
              />
              <InputLeftElement width="4.5rem">
                <Button
                  backgroundColor={"white"}
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                >
                  <SearchIcon />
                  {/* {show ? "Hide" : "Show"} */}
                </Button>
              </InputLeftElement>
              <InputRightElement>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1425px-Google_mic.svg.png"
                  w={"15px"}
                />
              </InputRightElement>
            </InputGroup>
          </HStack>
          <Center>
            <Flex>
              <Button onClick={onNavigate} mr="10px">
                Google Search
              </Button>
              <Button>I'm feeling lucky</Button>
            </Flex>
          </Center>
        </Stack>
      </Container>
      <FooterComp/>
    </>
  );
};
