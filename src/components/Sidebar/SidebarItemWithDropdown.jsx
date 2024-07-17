import React from "react";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSidebarStore } from "../../store/sidebarStore";
import { SidebarItem } from "./SidebarItem";

export const SidebarItemWithDropdown = ({ icon, children, subItems }) => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  const activeColor = isOpen
    ? useColorModeValue("gray.100", "gray.800")
    : useColorModeValue("inherit", "gray.400");
  const activeBgColor = isOpen
    ? useColorModeValue("blue.500", "blue.900")
    : useColorModeValue("inherit", "gray.400");

  return (
    <Box>
      <Flex
        align="center"
        px="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        color={activeColor}
        bg={activeBgColor}
        _hover={{
          bg: useColorModeValue("blue.500", "blue.900"),
          color: useColorModeValue("gray.100", "gray.800"),
        }}
        onClick={toggleSidebar}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            fontWeight="semibold"
            _groupHover={{
              color: useColorModeValue("gray.100", "gray.800"),
            }}
            as={icon}
          />
        )}
        {children}
        <Icon
          as={isOpen ? FaChevronUp : FaChevronDown}
          ml="auto"
          transition="transform 0.2s"
        />
      </Flex>
      <Collapse in={isOpen} unmountOnExit animateOpacity>
        <Box ml={5}>
          {subItems.map((subItem) => (
            <SidebarItem
              key={subItem.route}
              route={subItem.route}
              icon={subItem.icon}
              isSubItem={subItem.isSubItem}
            >
              {subItem.label}
            </SidebarItem>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
