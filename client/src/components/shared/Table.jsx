import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
  return (
    <Container sx={{ height: '100vh' }}>
      <Paper
        elevation={3}
        sx={{
          margin: 'auto',
          height: '100%',
          width: '100%',
          padding: '1rem 2rem',
          overflow: 'hidden',
          boxShadow: 'none',
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ margin: '2rem', textTransform: 'uppercase' }}
        >
          {heading}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          style={{ height: '80%' }}
          className="table-grid"
          sx={{
            '& .table-header': {
              backgroundColor: '#36454F',
              color: 'white',
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default Table;
