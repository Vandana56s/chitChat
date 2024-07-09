import React, { useState } from 'react';
import { Avatar, Button, Dialog, DialogTitle, IconButton, ListItem, Stack, TextField, Typography } from '@mui/material';
import { sampleUsers } from '../styles/styledComponents';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const NewGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  const submitHandler = () => {
    // Handle group creation logic here
    console.log('Group created with name:', groupName, 'and members:', selectedMembers);
  };

  const selectMemberHandler = (userId) => {
    setSelectedMembers((prevSelectedMembers) => {
      if (prevSelectedMembers.includes(userId)) {
        return prevSelectedMembers.filter((id) => id !== userId);
      } else {
        return [...prevSelectedMembers, userId];
      }
    });
  };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">New Group</DialogTitle>
        <TextField
          label="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {sampleUsers.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={() => selectMemberHandler(user._id)}
              isSelected={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">Cancel</Button>
          <Button variant="contained" size="large" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

const UserItem = ({ user, handler, isSelected }) => {
  const { name, avatar } = user;
  return (
    <ListItem>
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
            width: "100%",
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor: isSelected ? "secondary.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isSelected ? "secondary.dark" : "primary.dark",
            },
          }}
          onClick={handler}
        >
          {isSelected ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default NewGroup;
