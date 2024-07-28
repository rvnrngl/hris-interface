import { Avatar } from "@chakra-ui/react";
import { useAuthStore } from "../../store/authStore";
import { formatUserName } from "../../helpers/formatUserName";

export const UserAvatar = ({ size, src }) => {
  const user = useAuthStore((state) => state.user);
  return (
    <Avatar
      bg="white"
      size={size}
      name={formatUserName(user)}
      src={src}
      cursor="pointer"
    />
  );
};
