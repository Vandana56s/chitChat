import React from 'react';
import Header from './Header';
import { Grid } from '@mui/material';
import ChatList from '../specific/ChatList';
import { sampleChats } from '../styles/styledComponents'; // Corrected import path
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';

const AppLayout = (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };

    return (
      <div className="app-layout">
        <Header />
        <Grid container style={{ height: "calc(100vh - 4rem)" }}>
          <Grid item xs={12} md={4} height={"100%"} sx={{ bgcolor: '#899499', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <ChatList chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat} />
          </Grid>
          <Grid item xs={12} md={4} height={"100%"} sx={{ bgcolor: '#D3D3D3', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item xs={12} md={4} height={"100%"} sx={{ bgcolor: '#36454F', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Profile />
          </Grid>
        </Grid>
        <div className="footer">Footer</div>
        <style jsx>{`
          .app-layout {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .footer {
            text-align: center;
            padding: 1rem;
            background-color: #f0f0f0;
          }
        `}</style>
      </div>
    );
  };
};

export default AppLayout;
