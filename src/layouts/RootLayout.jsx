import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Image,
  Button,
  Heading,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <Sidebar isOpen={isOpen} onClose={onClose} />

        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Flex
            as="header"
            align="center"
            justifyContent={{ base: "space-between", md: "flex-end" }}
            w="full"
            px="4"
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow="sm"
            h="9vh"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={onOpen}
              icon={<FiMenu />}
              size="md"
            />

            <Flex align="center">
              <Icon color="gray.500" as={FaBell} cursor="pointer" />
              <Avatar
                ml="4"
                size="sm"
                name="RavenRingel"
                src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                cursor="pointer"
              />
            </Flex>
          </Flex>

          <Box
            as="main"
            h="91vh"
            bg={useColorModeValue("gray.100", "blue.900")}
          >
            <Outlet></Outlet>
          </Box>
        </Box>
      </Box>
    </>
  );
};
