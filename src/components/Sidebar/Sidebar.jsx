import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import React, { useState } from "react";
import { SidebarContent } from "./SidebarContent";

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
    </>
  );
};
