import {
  Box,
  Container,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function FooterComp() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Advertising</Link>
          <Link href={"#"}>Business</Link>
          <Link href={"#"}>How Search Works</Link>
        </Stack>
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Privacy</Link>
          <Link href={"#"}>Terms</Link>
          <Link href={"#"}>Settings</Link>
        </Stack>
      </Container>
    </Box>
  );
}
