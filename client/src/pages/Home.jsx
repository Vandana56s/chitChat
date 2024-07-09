import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      bgcolor="#818589"
      height="100%"
      width="100%" // Ensure it takes full width
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
  )
};

export default AppLayout(Home);


