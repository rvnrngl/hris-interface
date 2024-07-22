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
  Menu,
  MenuButton,
} from "@chakra-ui/react";

import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { NavbarMenu } from "../components/Menu/NavbarMenu";

export const RootLayout = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box as="section" bg="#f5f9ff" minH="100vh">
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
              <NavbarMenu />
            </Flex>
          </Flex>

          <Box as="main" minH="91vh" className="p-5">
            <Outlet></Outlet>
          </Box>
        </Box>
      </Box>
    </>
  );
};
