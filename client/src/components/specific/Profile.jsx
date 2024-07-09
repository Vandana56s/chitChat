import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material';
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"1rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 150,
          height: 150,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "3px solid white"
        }}
      />
      <ProfileCard heading={"Bio"} text={"Living life in dark mode. Code, coffee, repeat"} />
      <ProfileCard heading={"Username"} text={"sakshi"} icon={<UserNameIcon fontSize="small" />} />
      <ProfileCard heading={"Name"} text={"sakshi rai"} icon={<FaceIcon fontSize="small" />} />
      <ProfileCard heading={"Joined"} 
      text={moment('2023-11-04T18:30:00.000Z').fromNow()} 
      icon={<CalendarIcon fontSize="small" />} />
    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"0.5rem"}
    color={"white"}
    textAlign={"center"}
    sx={{ width: '100%', justifyContent: 'center' }}
  >
    {icon && icon}
    <Stack spacing={"0.25rem"} textAlign={"left"}>
      <Typography variant="body2">{text}</Typography>
      <Typography color={"gray"} variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;

