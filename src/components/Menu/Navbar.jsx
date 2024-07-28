import { Flex, Icon, IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export const Navbar = ({ onOpen, children }) => {
  return (
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
        {children}
      </Flex>
    </Flex>
  );
};
