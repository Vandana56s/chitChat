import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, IconButton, List, ListItem, ListItemText, Stack } from '@mui/material';
import { sampleUsers } from '../styles/styledComponents';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const AddMemberDialog = ({ open, handleClose, addMember, isLoadingAddMember, chatId }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (userId) => {
    setSelectedMembers((prevSelectedMembers) => {
      if (prevSelectedMembers.includes(userId)) {
        return prevSelectedMembers.filter((id) => id !== userId);
      } else {
        return [...prevSelectedMembers, userId];
      }
    });
  };

  const closeHandler = () => {
    setSelectedMembers([]); // Clear selected members
    handleClose(); // Close the dialog
  };

  const addMemberSubmitHandler = () => {
    addMember(selectedMembers, chatId);
  };

  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle>Add Member</DialogTitle>
      <Stack p={"2rem"} width={"25rem"} spacing={"2rem"}>
        <List>
          {sampleUsers.map((user) => (
            <UserItem
              key={user._id}
              user={user}
              handler={() => selectMemberHandler(user._id)}
              isSelected={selectedMembers.includes(user._id)}
            />
          ))}
        </List>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={addMemberSubmitHandler}
            disabled={isLoadingAddMember}
          >
            {isLoadingAddMember ? 'Adding...' : 'Add Members'}
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

const UserItem = ({ user, handler, isSelected }) => {
  const { name } = user;
  return (
    <ListItem button onClick={handler}>
      <ListItemText primary={name} />
      <IconButton
        sx={{
          bgcolor: isSelected ? "secondary.main" : "primary.main",
          color: "white",
          "&:hover": {
            bgcolor: isSelected ? "secondary.dark" : "primary.dark",
          },
        }}
      >
        {isSelected ? <RemoveIcon /> : <AddIcon />}
      </IconButton>
    </ListItem>
  );
};

export default AddMemberDialog;
