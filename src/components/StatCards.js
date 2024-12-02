import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ReplayIcon from '@mui/icons-material/Replay';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const stats = [
  {
    title: 'Occupied Units',
    value: 1202,
    goal: 1226,
    separateText: 'out of ',
    icon: <PeopleIcon sx={{ fontSize: 50, color: '#391b58' }} />,
  },
  {
    title: 'Pending Renewals',
    value: 34,
    goal: '50 days',
    separateText: 'Next ',
    icon: <ReplayIcon sx={{ fontSize: 50, color: '#391b58' }} />,
  },
  {
    title: 'Viva Score',
    value: 95,
    goal: 100,
    separateText: 'out of ',
    icon: <TrackChangesIcon sx={{ fontSize: 50, color: '#391b58' }} />,
  },
];

const StatCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 2,
              }}
            >
              {/* Icon Section */}
              <Box sx={{ mr: 2 }}>{stat.icon}</Box>

              {/* Text Section */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {/* Value and Separate Text on Same Line */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    sx={{ color: 'rgb(58, 188, 155)', fontWeight: 'bold' }}
                    variant="h4"
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{ marginLeft: 1 }}
                    variant="body2"
                    color="textSecondary"
                  >
                    {stat.separateText}
                    {stat.goal}
                  </Typography>
                </Box>

                {/* Title */}
                <Typography sx={{ color: '#391b58', mt: 1 }} variant="h6">
                  {stat.title}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatCards;
