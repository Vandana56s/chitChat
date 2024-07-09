import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { Add as AddIcon } from '@mui/icons-material';

const UserItem = ({ user, handler, handlerIsLoading }) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem
    sx={{
        bgcolor:"#848884",
    }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar[0]} />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            bgcolor:"#848884",
            widht:"100%"
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
