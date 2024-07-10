import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Box, Grid, IconButton, Tooltip, Typography, Stack, TextField, Drawer, Backdrop, Button } from '@mui/material';
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Edit as EditIcon,
  Done as DoneIcon,
  Menu as MenuIcon,
  Add as AddIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { useNavigate, useSearchParams } from "react-router-dom";
import AvatarCard from '../components/shared/AvatarCard';
import { Link } from '../components/styles/styledComponents';
import { sampleChats, sampleUsers } from '../components/styles/styledComponents';
import UserItem from '../components/shared/UserItem';

const ConfirmDeleteDialog = lazy(() => import('../components/dialogs/ConfirmDeleteDialog'));
const AddMemberDialog = lazy(() => import('../components/dialogs/AddMemberDialog'));

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [addMemberDialog, setAddMemberDialog] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [isLoadingAddMember, setIsLoadingAddMember] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };

  const confirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("delete member");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {
    setAddMemberDialog(true);
  };

  const closeAddMemberHandler = () => {
    setAddMemberDialog(false);
  };

  const addMember = (selectedMembers) => {
    setGroupMembers((prevGroupMembers) => [
      ...prevGroupMembers,
      ...selectedMembers.filter(member => !prevGroupMembers.includes(member))
    ]);
    setIsLoadingAddMember(true);
    setTimeout(() => {
      setIsLoadingAddMember(false);
      closeAddMemberHandler();
    }, 2000);
  };

  const removeMember = (memberId) => {
    setGroupMembers((prevGroupMembers) =>
      prevGroupMembers.filter((member) => member !== memberId)
    );
  };

  useEffect(() => {
    setGroupName(`Group Name ${chatId}`);
    setGroupNameUpdatedValue(`Group Name ${chatId}`);
    const group = sampleChats.find(group => group._id === chatId);
    setGroupMembers(group ? group.members : []);
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const GroupName = () => (
    <Stack
      direction={"row"}
      spacing={"1rem"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant='h4'>{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}><EditIcon /></IconButton>
        </>
      )}
      <IconButton onClick={handleMobile}>
        <MenuIcon />
      </IconButton>
    </Stack>
  );

  const ButtonGroup = () => (
    <Stack
      direction={{
        xs: "column",
        sm: "row"
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem"
      }}
    >
      <Button
        color="primary"
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
      <Button
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={confirmDeleteHandler}
      >
        Delete Group
      </Button>
    </Stack>
  );

  return (
    <Grid container height="100vh">
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        bgcolor="#7393B3"
      >
        <GroupsList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {groupName && (
          <>
            <GroupName />
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant='body1'
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
            >
              {groupMembers.map((member) => (
                <UserItem
                  user={sampleUsers.find(user => user._id === member)}
                  key={member}
                  onAdd={() => addMember([member])}
                  onRemove={() => removeMember(member)}
                  isMember={true}
                />
              ))}
            </Stack>
            <ButtonGroup />
          </>
        )}

        <Tooltip title="back">
          <IconButton
            sx={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              bgcolor: "#36454F",
              color: "white",
              ":hover": {
                bgcolor: "black",
              },
            }}
            onClick={navigateBack}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
        </Tooltip>
      </Grid>

      {addMemberDialog && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog
            open={addMemberDialog}
            handleClose={closeAddMemberHandler}
            addMember={addMember}
            isLoadingAddMember={isLoadingAddMember}
            chatId={chatId}
          />
        </Suspense>
      )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={() => console.log("delete handler")}
          />
        </Suspense>
      )}

      <Drawer anchor="right" open={isMobileMenuOpen} onClose={handleMobileClose}>
        <Box
          sx={{
            width: 250,
            padding: '1rem',
          }}
        >
          <GroupsList myGroups={sampleChats} chatId={chatId} />
        </Box>
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupsListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        No GROUPS
      </Typography>
    )}
  </Stack>
);

const GroupsListItem = ({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
      style={{ textDecoration: 'none' }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
};

export default Groups;
