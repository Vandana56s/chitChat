import React, { Fragment, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { orange } from '@mui/material/colors';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox, sampleMessage } from '../components/styles/styledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  _id: "dfdfdfd",
  name: "sakshi rai"
};

const Chat = () => {
  const containRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containRef}
        boxSizing="border-box"
        padding="1rem"
        spacing="1rem"
        bgcolor={orange} // Adjust bgcolor as needed
        height="calc(100% - 3.5rem)" // Subtract the form's height
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
          position: 'relative', // Ensure relative positioning for absolute children
        }}
      >
        {/* Displaying messages */}
        {sampleMessage.map((msg) => (
          <MessageComponent key={msg._id} message={msg} user={user} />
        ))}
      </Stack>
      
      <form
        style={{
          position: 'absolute',
          bottom: '1rem', // Adjust bottom spacing as needed
          left: '50%', // Center horizontally
          transform: 'translateX(-50%)', // Center horizontally
          width: 'calc(30% - 2rem)', // Adjust width to stay within grid 2
          maxWidth: 'calc(100% - 2rem)', // Ensure maxWidth doesn't exceed grid 2 width
          zIndex: 1,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          padding="1rem"
          bgcolor={orange[200]} // Adjust bgcolor as needed
          borderRadius="5px" // Rounded corners for the form container
        >
          {/* Attach File Icon */}
          <IconButton sx={{ transform: "rotate(30deg)" }}>
            <AttachFileIcon />
          </IconButton>
          
          {/* Input Box for typing message */}
          <InputBox placeholder="Type Message Here" sx={{ flex: 1, marginLeft: '1rem' }} />
          
          {/* Send Icon */}
          <IconButton
            type="submit"
            sx={{
              backgroundColor: orange[500],
              color: "white",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      
      <FileMenu />
    </Fragment>
  );
};

export default AppLayout(Chat);
