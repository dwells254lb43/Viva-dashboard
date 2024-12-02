import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, LinearProgress } from '@mui/material';
import { mockTableData } from '../data';

const columns = [
  { field: 'unit', headerName: 'Unit', width: 100 },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'renewalDate', headerName: 'Renewal Date', width: 150 },
  {
    field: 'savingsGoal',
    headerName: 'Savings Goal',
    width: 150,
    valueGetter: (value) => {
      return '$' + value;
    },
  },
  {
    field: 'savingsProgress',
    headerName: 'Savings Progress',
    width: 300,
    renderCell: (params) => (
      <Box
        display="flex"
        justifyItems="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Box width="100%" mr={1}>
          <LinearProgress
            sx={{
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#391b58',
              },
              backgroundColor: '#d3d3d3',
            }}
            variant="determinate"
            value={params.value}
          />
        </Box>
        <Box minWidth={35}>
          <Typography
            variant="body2"
            color="textSecondary"
          >{`${params.value}%`}</Typography>
        </Box>
      </Box>
    ),
  },
  { field: 'vivaScore', headerName: 'Viva Score', width: 120 },
];

const rows = mockTableData.map((resident, index) => ({
  id: index,
  ...resident,
}));

const ResidentsTable = () => {
  return (
    <Box
      sx={{ height: 400, width: '100%', marginTop: 5, backgroundColor: '#fff' }}
    >
      <DataGrid rows={rows} columns={columns} pagination pageSize={10} />
    </Box>
  );
};

export default ResidentsTable;
