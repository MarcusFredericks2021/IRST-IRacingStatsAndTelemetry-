import React from "react";
import {
  Drawer,
  Box,
  useDisclosure,
  HStack,
  Text,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Stack,
  Flex,
  Heading,
  Center,
  VStack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";
import theme from "../theme";

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HStack
        maxW={"100vw"}
        theme={theme}
        textAlign={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        fontFamily="Add City Boy, sans-serif"
      >
        <Flex
          fontWeight={"extrabold"}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          color={"grey"}
          bgColor={"black"}
          minW="100vw"
          align="center"
          pb={2}
          opacity={0.8}
        >
          <Button
            mt={2}
            ml={2}
            leftIcon={<HamburgerIcon />}
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            position={"left"}
          >
            IRST
          </Button>

          <Heading
            mx={"auto"} //NOT CORRECTLY CENTERING HEADING TEXT. FIND SOLUTION LATER
            textAlign={"center"}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            textColor={"teal"}
          >
            IRacing Stats And Telemetry
          </Heading>
        </Flex>
      </HStack>

      <Drawer
        //use multi style themeing to customize drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textColor={"teal"} letterSpacing={2}>
            IRST
          </DrawerHeader>

          <DrawerBody colorScheme="teal">
            <VStack>
              <Container>
                <Box>
                  <Button
                    width={"250px"}
                    mb={3}
                    //ADD BUTTON FUNCTION
                  >
                    About
                  </Button>
                </Box>
                <Box>
                  <Button width={"250px"} mb={3}>
                    Statistics
                  </Button>
                </Box>
                <Box>
                  <Button width={"250px"} mb={3}>
                    Telemetry
                  </Button>
                </Box>
              </Container>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
