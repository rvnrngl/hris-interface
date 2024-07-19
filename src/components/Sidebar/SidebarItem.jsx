import React from "react";
import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useActiveRoute } from "../../hooks/useActiveRoute";
import { useSidebarStore } from "../../store/sidebarStore";

export const SidebarItem = ({ route, icon, children, isSubItem }) => {
  const activeRoute = useActiveRoute();
  const { isOpen, toggleSidebar } = useSidebarStore();

  const activeColor =
    activeRoute === route && !isSubItem && !isOpen
      ? useColorModeValue("gray.100", "gray.800")
      : activeRoute === route && isSubItem
        ? "blue.500"
        : useColorModeValue("inherit", "gray.400");

  const activeBgColor =
    activeRoute === route && !isOpen
      ? useColorModeValue("blue.500", "blue.900")
      : useColorModeValue("inherit", "gray.400");

  const hoverColors = {
    bg: !isSubItem ? useColorModeValue("blue.500", "blue.900") : "",
    color: !isSubItem ? useColorModeValue("gray.100", "gray.800") : "blue.500",
  };

  return (
    <Link to={route} onClick={!isSubItem && toggleSidebar}>
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
        _hover={hoverColors}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            fontWeight="semibold"
            _groupHover={{
              color: !isSubItem
                ? useColorModeValue("gray.100", "gray.800")
                : "blue.500",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
