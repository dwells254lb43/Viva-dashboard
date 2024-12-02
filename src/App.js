import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Sidebar from './components/Sidebar';
import StatCards from './components/StatCards';
import Charts from './components/Charts';
import ResidentsTable from './components/ResidentsTable';

const App = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          overflowY: 'auto',
          backgroundColor: '#f1f1f1',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Portfolio Overview
        </Typography>
        <StatCards />
        <Charts />
        <ResidentsTable />
      </Box>
    </Box>
  );
};

export default App;
