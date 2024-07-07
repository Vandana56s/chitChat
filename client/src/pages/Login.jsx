import React, { useRef, useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, TextField, Typography, Stack } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/styledComponents';
import useInputValidation from '../hooks/useInputValidation';
import useStrongPassword from '../hooks/useStrongPassword';
import useFileHandler from '../hooks/useFileHandler';
import { usernameValidator } from '../utils/validators';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const fileInputRef = useRef(null);

  const toggleLogin = () => setIsLogin((prev) => !prev);
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword("");
  const avatar = useFileHandler();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { username: username.value, password: password.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with', { name: name.value, bio: bio.value, username: username.value, password: password.value, avatar: avatar.file });
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

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
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
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
              <Typography textAlign="center">OR</Typography>
              <Button
                fullWidth
                sx={{
                  marginTop: '1rem',
                }}
                variant="text"
                onClick={toggleLogin}
              >
                SIGN UP INSTEAD
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form onSubmit={handleSignup} style={{ width: '100%', marginTop: '1rem' }}>
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                  sx={{
                    width: '10rem',
                    height: '10rem',
                    objectFit: 'contain',
                  }}
                  src={avatar.preview}
                />
                {avatar.error && (
                  <Typography m={'1rem'} color="error" variant="caption">
                    {avatar.error}
                  </Typography>
                )}
                <IconButton
                  aria-label="upload avatar"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                  }}
                  onClick={handleIconClick}
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput
                    ref={fileInputRef}
                    type="file"
                    onChange={avatar.changeHandler}
                  />
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                fullWidth
                sx={{
                  marginTop: '1rem',
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>
              <Typography textAlign="center">OR</Typography>
              <Button
                fullWidth
                sx={{
                  marginTop: '1rem',
                }}
                variant="text"
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
