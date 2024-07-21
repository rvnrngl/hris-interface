import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsFolder2, BsCalendarCheck, BsFolder } from "react-icons/bs";
import { RiFlashlightFill } from "react-icons/ri";
import { SidebarItem } from "./SidebarItem";
import { Link } from "react-router-dom";
import { SidebarItemWithDropdown } from "./SidebarItemWithDropdown";

export const SidebarContent = ({ ...props }) => {
  const leaveSubItems = [
    {
      route: "/leave/form",
      label: "Leave Form",
      icon: BsFolder,
      isSubItem: true,
    },
    {
      route: "/leave/approval",
      label: "Approval",
      icon: BsCalendarCheck,
      isSubItem: true,
    },
    {
      route: "/leave/list",
      label: "Leave List",
      icon: BsFolder2,
      isSubItem: true,
    },
  ];

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Icon as={RiFlashlightFill} h={8} w={8} />
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          LOGO HERE
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="md"
        gap={0.2}
        color="gray.600"
        aria-label="Main Navigation"
      >
        <SidebarItem
          route={`/dashboard`}
          icon={AiOutlineHome}
          isSubItem={false}
        >
          Dashboard
        </SidebarItem>
        <SidebarItemWithDropdown icon={BsFolder2} subItems={leaveSubItems}>
          Leave
        </SidebarItemWithDropdown>
        <SidebarItem route={`/personal`} icon={AiOutlineTeam} isSubItem={false}>
          Personal
        </SidebarItem>
      </Flex>
    </Box>
  );
};
