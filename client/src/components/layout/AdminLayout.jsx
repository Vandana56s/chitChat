import React, { useState } from 'react';
import { Box, Drawer, Grid, IconButton, Stack, Typography, styled } from '@mui/material';
import { Close as CloseIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon, Groups as GroupsIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import { useLocation, Link as LinkComponent, Navigate } from 'react-router-dom';
import { Dashboard as DashboardIcon } from "@mui/icons-material";

const Link = styled(LinkComponent)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: 'inherit',
  },
}));

const adminTabs = [{
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />
  },
  {
    name: "Users",
    path: "/admin/users-management",
    icon: <ManageAccountsIcon />
  },
  {
    name: "Chats",
    path: "/admin/chats-management",
    icon: <GroupsIcon />
  },
  {
    name: "Messages",
    path: "/admin/messages-management",
    icon: <MessageIcon />
  }
];

const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();

  const logoutHandler = () => {
    console.log("Logout clicked");
    // Implement your logout logic here
  };

  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant='h5' textTransform={"uppercase"}>
        chit_chat
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link key={tab.path} to={tab.path} sx={{
            ...(location.pathname === tab.path && {
              bgcolor: 'rgba(0,0,0,0.1)',
              color: "white",
              ":hover": { color: "white" },
            })
          }}>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography fontSize={"1.2rem"}>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}
        <Link onClick={logoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />
            <Typography fontSize={"1.2rem"}>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const isAdmin=true;
const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => setIsMobile(!isMobile);

  const handleClose = () => setIsMobile(false);
  if(!isAdmin) return <Navigate to="/admin"/>

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Grid item md={4} lg={3} sx={{ 
        display:
         { xs: "none",
          md: "block" },
        bgcolor: "#FF5733",
           }}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{
          bgcolor: "#C0C0C0",
        }}
      >
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
