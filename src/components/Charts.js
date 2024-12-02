import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { barChartData, pieDataMonth, pieDataYear } from '../data';

const barData = [
  { name: 'Jan', value: 32 },
  { name: 'Feb', value: 25 },
  { name: 'Mar', value: 35 },
  { name: 'Apr', value: 32 },
  { name: 'May', value: 21 },
  { name: 'Jun', value: 50 },
  { name: 'Jul', value: 32 },
  { name: 'Aug', value: 31 },
  { name: 'Sep', value: 34 },
  { name: 'Oct', value: 41 },
  { name: 'Nov', value: 14 },
  { name: 'Dec', value: 22 },
];

const COLORS = ['#391b58', '#a9a9a9'];

const CustomLegend = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
      <Box
        sx={{
          width: 12,
          height: 12,
          backgroundColor: COLORS[0],
          marginRight: 1,
        }}
      />
      <Typography variant="body2">Occupied</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: 12,
          height: 12,
          backgroundColor: COLORS[1],
          marginRight: 1,
        }}
      />
      <Typography variant="body2">Vacant</Typography>
    </Box>
  </Box>
);

const Charts = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="#999"
        textColor="#999"
        sx={{
          '& .MuiTab-root': { color: '#999' },
          '& .Mui-selected': { color: '#391b58 !important' },
          '& .MuiTabs-indicator': { backgroundColor: '#391b58' },
        }}
      >
        <Tab label="Occupancy" />
        <Tab label="Renewals" />
      </Tabs>
      <Grid container spacing={3}>
        {selectedTab === 0 && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Occupancy Rate
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={2}>
                    <Typography variant="body2" gutterBottom>
                      This Month
                    </Typography>
                    <PieChart width={150} height={150}>
                      <Pie
                        data={pieDataMonth}
                        cx={'50%'}
                        cy={'50%'}
                        innerRadius={40}
                        outerRadius={60}
                        fill="#391b58"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieDataMonth.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                    <CustomLegend />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="body2" gutterBottom>
                      Year to date
                    </Typography>
                    <PieChart width={150} height={150}>
                      <Pie
                        data={pieDataYear}
                        cx={'50%'}
                        cy={'50%'}
                        innerRadius={40}
                        outerRadius={60}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieDataYear.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </Grid>
                  <Grid
                    sx={{
                      borderLeft: '1px solid #a9a9a9',
                      marginLeft: 2,
                      alignContent: 'flex-start',
                    }}
                    item
                    xs={12}
                    md={6}
                  >
                    <Typography variant="h6" gutterBottom>
                      Occupancy Rate by Month
                    </Typography>
                    <BarChart width={600} height={250} data={barChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="occupancyRate" fill="rgb(58, 188, 155)" />
                    </BarChart>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}
        {selectedTab === 1 && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upcoming Renewals
                </Typography>
                <BarChart width={600} height={250} data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="rgb(58, 188, 155)" />
                </BarChart>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Charts;
