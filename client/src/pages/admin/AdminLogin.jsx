import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

const isAdmin=false;

const AdminLogin = () => {
  const [secretKey, setSecretKey] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    // Add your login logic here
  }
  if(isAdmin) return <Navigate to="/admin/dashboard"/>

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">Admin Login</Typography>
        <form onSubmit={submitHandler}>
          <TextField
            required
            fullWidth
            label="Secret Key"
            type="password"
            margin="normal"
            variant="outlined"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
          <Button
            fullWidth
            sx={{
              marginTop: '1rem',
            }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default AdminLogin;
