import { Avatar, AvatarGroup, Box, Stack } from '@mui/material';
import React from 'react';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"} position="relative">
          {
            avatar.map((src, index) => (
                
              <Avatar
                key={index}
                src={src}
                alt={`Avatar ${index}`}
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: `${index * 0.5}rem`,
                }}
              />
            ))
          }
        </Box>
      </AvatarGroup>
    </Stack>
  );
}

export default AvatarCard;
