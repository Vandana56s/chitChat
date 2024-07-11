import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { AdminPanelSettings as AdminPanelSettingsIcon,
     Group as GroupIcon,
     Message as MessageIcon,
     Notifications as NotificationsIcon,
     Person as PersonIcon
} from '@mui/icons-material';
import moment from 'moment';
import { CurveButton, SearchField } from '../../components/styles/styledComponents';
import { DoughnutChart, LineChart } from '../../components/specific/Charts'; // Fixed import

const Dashboard = () => {
  const AppBar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
        >
          {moment().format("MMMM Do YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing="2rem"
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={34} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={3} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={453} Icon={<MessageIcon />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>
        {AppBar}
        <Stack 
          direction={{
            xs: "column",
            lg: "row",
          }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{
            xs: "center",
            lg: "stretch"
          }}
          sx={{ gap: "2rem" }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography margin={"2rem 0"} variant="h4">Last Message</Typography>
            <LineChart value={[23, 56, 33, 67, 33]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "100%",
              maxWidth: "25rem",
              height: "25rem",
            }}
          >
            <DoughnutChart 
              labels={["Single Chats", "Group Chats"]}
              value={[300, 50]}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
            >
              <GroupIcon /><Typography>vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing="2rem"
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={"2rem"}
        >
          {Widgets}
        </Stack>
      </Container>
    </AdminLayout>
  );
};

const Widget = ({ title, value, Icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1.5rem",
      width: "17rem",
      justifyContent: "center",
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"} justifyContent={"center"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: `5px solid #000`, // Replace with the actual color
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >{value}</Typography>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"1rem"}
      >
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

export default Dashboard;
