import {
  Avatar,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useAuthStore } from "../../store/authStore";

export const NavbarMenu = () => {
  const logOut = useAuthStore((state) => state.logOut);

  const OnLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    logOut();
  };

  return (
    <Menu>
      <MenuButton ml="4">
        <Avatar
          size="sm"
          name="RavenRingel"
          src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          cursor="pointer"
        />
      </MenuButton>
      <MenuList className="w-fit" minWidth="140px">
        <MenuGroup title="Profile">
          <MenuItem className="text-sm">My Account</MenuItem>
          <MenuItem onClick={() => OnLogout()} className="text-sm">
            Logout
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
