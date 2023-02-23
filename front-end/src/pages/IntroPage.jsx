import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  CircularProgress,
  Progress,
  Image,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IntroPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState();
  const onNavigate = () => {
    // show()
    navigate("/start");
  };
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Center>
            <Image
              w={"200px"}
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRe4x3UPswMOoWFMQhv5d1dSsLoS8lG7zf8bbyRHVm7f5cHFDo8"
            ></Image>
          </Center>
          <Text
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Givaudan Digital Journey <br />
          </Text>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={onNavigate}
              // isLoading
              //   spinner={<BeatLoader size={8} color="white" />}
            >
              Go Live!
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
