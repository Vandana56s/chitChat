import React from 'react';
import Header from './Header';
import { Grid } from '@mui/material';

const AppLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="app-layout">
        <Header />
        <Grid container style={{ height: "calc(100vh - 4rem)" }}>
          <Grid item xs={12} md={4} height={"100%"} sx={{ bgcolor: '#f44336', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            First
          </Grid>
          <Grid item xs={12} md={4} height={"100%"} sx={{ bgcolor: '#4caf50', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item xs={12} md={4} height={"100%"} sx={{ bgcolor: '#2196f3', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            Third
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
