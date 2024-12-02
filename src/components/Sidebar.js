import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Box,
  Avatar,
} from '@mui/material';

const Sidebar = () => {
  const menuItems = ['Portfolio', 'Community', 'Assets', 'Settings'];
  const accountName = 'Samantha Lynn'; // Replace with actual account name
  const avatarUrl = 'https://avatar.iran.liara.run/public/64'; // Replace with actual avatar URL

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Box
        sx={{
          padding: 2,
          backgroundColor: '#391b58',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://viva.fund/assets/viva-logo.0106d719.svg"
          alt="Viva Logo"
          style={{ width: '100px', height: '50px' }}
        />
      </Box>
      <Divider />
      <List
        sx={{
          padding: 2,
          backgroundColor: '#391b58',
          height: 'calc(100% - 64px)',
        }}
      >
        {menuItems.map((item, index) => (
          <ListItem
            sx={{
              color: 'white',
              backgroundColor: index === 0 ? 'rgb(58, 188, 155)' : 'inherit',
              borderRadius: '6px',
              ':hover': {
                backgroundColor: 'rgb(58, 188, 155)',
                cursor: 'pointer',
              },
            }}
            button
            key={index}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          padding: 2,
          backgroundColor: '#391b58',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <Avatar src={avatarUrl} alt={accountName} sx={{ marginRight: 2 }} />
        <Typography variant="body1" sx={{ color: 'white' }}>
          {accountName}
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
