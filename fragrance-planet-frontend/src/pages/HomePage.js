import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: (theme) => theme.palette.background.default,
        padding: 4,
      }}
    >
      <Typography variant="h2" color="primary" gutterBottom>
        Fragrance Planet
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center">
        Discover scents that suit your personality
      </Typography>
      <form action="#" method="GET">
        <input type="text" placeholder="search" id="input" />
        <button type="submit" class="search_button">
          <img src="" alt="" />
        </button>
      </form>
    </Box>
  );
}

export default HomePage;