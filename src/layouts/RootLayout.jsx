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
import { Navbar } from "../components/Menu/Navbar";

export const RootLayout = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box as="section" bg="#F5F5F5" minH="100vh">
        <Sidebar isOpen={isOpen} onClose={onClose} />

        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Navbar onOpen={onOpen}>
            <NavbarMenu />
          </Navbar>

          <Outlet></Outlet>
        </Box>
      </Box>
    </>
  );
};
