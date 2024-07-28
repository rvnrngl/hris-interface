import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useAuthStore } from "../../store/authStore";
import { formatUserName } from "../../helpers/formatUserName";
import { useNavigate } from "react-router-dom";
import { UserAvatar } from "../Avatar/UserAvatar";
import profileImage from "../../assets/profile/profile.png";

export const NavbarMenu = () => {
  const user = useAuthStore((state) => state.user);
  const logOut = useAuthStore((state) => state.logOut);
  const navigate = useNavigate();

  const OnLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    logOut();
  };

  return (
    <Menu>
      <MenuButton ml="4">
        <UserAvatar size="sm" src={profileImage} />
      </MenuButton>
      <MenuList className="w-fit overflow-hidden" minWidth="140px">
        <MenuGroup
          title={formatUserName(user)}
          className="line-clamp-1 w-[140px]"
        >
          <MenuItem
            onClick={() => navigate("/user/profile")}
            className="text-sm"
          >
            My Profile
          </MenuItem>
          <MenuItem onClick={() => OnLogout()} className="text-sm">
            Logout
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
