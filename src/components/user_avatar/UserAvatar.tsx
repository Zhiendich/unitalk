import React, { FC } from "react";
import { Avatar } from "@mui/material";
import { UserAvatarWrapper } from "./styled";
import PersonIcon from "@mui/icons-material/Person";

interface I_UserAvatar {
  avatar: string;
  name: string;
}
const UserAvatar: FC<I_UserAvatar> = ({ name, avatar }) => {
  return (
    <UserAvatarWrapper>
      {avatar ? (
        <Avatar src={avatar} />
      ) : (
        <Avatar sx={{ bgcolor: "#F04259" }}>
          <PersonIcon />
        </Avatar>
      )}

      <span> {name}</span>
    </UserAvatarWrapper>
  );
};

export default UserAvatar;
