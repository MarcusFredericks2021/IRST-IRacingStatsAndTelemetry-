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
        opacity={0.8}
      >
        <Flex
          fontWeight={"extrabold"}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          color={"grey"}
          bgColor={"black"}
          minW="100vw"
          align="center"
          pb={1.5}
        >
          <Button
            mt={1.5}
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
          >
            IRacing Stats And Telemetry
          </Heading>
        </Flex>
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
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
