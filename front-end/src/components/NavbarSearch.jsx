import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  SimpleGrid,
  Card,
  
  CardBody,
  CardFooter,
 
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  DragHandleIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Links = ["Gmail", "Images"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavbarSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/givaudan");
  };

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              w={"100px"}
              src="https://pngimg.com/uploads/google/google_PNG19644.png"
            ></Image>
            <InputGroup size="md">
              <Input
                pl="4.5rem"
                type={"text"}
                placeholder="bisnis parfum"
                w={"500px"}
                borderRadius="50px"
              ></Input>
              <InputLeftElement width="4.5rem">
                <Button backgroundColor={"white"} h="1.75rem" size="sm">
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
            {/* <Box>Logo</Box> */}
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Action
            </Button> */}
            <Menu>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                pr="20px"
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
                <DragHandleIcon />
              </HStack>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} background="white">
                  <Image src="https://companieslogo.com/img/orig/GIVN.SW-a230286c.png?t=1592735974"></Image>
                </Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Tabs>
        <TabList pl={"75px"}>
          <Tab>
            <SearchIcon pr={"5px"}></SearchIcon>
            All
          </Tab>
          <Tab>Images</Tab>
          <Tab>Video</Tab>
          <Tab>Maps</Tab>
          <Tab>Shopping</Tab>
          <Tab>
            <HamburgerIcon pr={"5px"}></HamburgerIcon>
            More
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box pl={"50px"}>
              <Stack pl={"20px"} spacing={3}>
                <Box
                // onClick={onNavigate}
                >
                  <Text pb={"5px"} fontSize="md">
                    www.givaudanfragrance.id
                  </Text>
                  <Link
                    color={"blue"}
                    fontSize="xl"
                    href="https://ragecommunications.invisionapp.com/console/share/F8MHTG9CWP7/975672814"
                  >
                    {" "}
                    Givaudan Indonesia | Human by Nature{" "}
                  </Link>
                </Box>
                <Text fontSize="lg">
                  Givaudan hadir menyediakan solusi bagi usaha anda dan
                  pengembangan produk beraroma yang melengkapi berbagai momen
                  kehidupan.
                </Text>
              </Stack>
              <Box pl={"30px"}>
                <Stack mt={"25px"} pl={"20px"} spacing={3}>
                  <Link color={"blue"} fontSize="xl">
                    {" "}
                    Tentang Kami | Our Company{" "}
                  </Link>
                  <Text fontSize="lg">
                    Menghadirkan produk terbaik sebagai selebrasi atas keindahan
                    hidup
                  </Text>
                </Stack>
                <Stack mt={"20px"} pl={"20px"} spacing={3}>
                  <Link color={"blue"} fontSize="xl">
                    {" "}
                    Wewangian Kami | Our Fragrance{" "}
                  </Link>
                  <Text fontSize="lg">
                    Memadukan kreativitas expert perfumers kami dan riset,
                    wewangian kami dirancang khusus untuk keunikan usaha anda.
                  </Text>
                </Stack>
                <Stack mt={"20px"} pl={"20px"} spacing={3}>
                  <Link color={"blue"} fontSize="xl">
                    {" "}
                    Teknologi Kami | Our Technology{" "}
                  </Link>
                  <Text fontSize="lg">
                    Terus berinovasi dan berkembang dengan science, untuk
                    memberikan nilai lebih bagi kebutuhan konsumen anda.
                  </Text>
                </Stack>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              <Card variant={"unstyled"}>
                <CardBody>
                  <Image src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/3/10/8c549458-1708-4ca0-a1d7-60c1938eaba0.jpg"></Image>
                </CardBody>
                <CardFooter>Image</CardFooter>
              </Card>

              <Card variant={"unstyled"}>
                <CardBody>
                  <Image src="https://cf.shopee.co.id/file/5671c350245abc142b729d759013c40f"></Image>
                </CardBody>
                <CardFooter>Image</CardFooter>
              </Card>
              <Card variant={"unstyled"}>
                <CardBody>
                  <Image src="https://cdn.shopify.com/s/files/1/0256/2398/6281/products/NATUNAPARFUME_1_1800x1800.jpg?v=1650291991"></Image>
                </CardBody>
                <CardFooter>Image</CardFooter>
              </Card>
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <p></p>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
