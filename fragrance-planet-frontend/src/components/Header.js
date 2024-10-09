import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="frag.html">Fragrances</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </Typography>
        <button class="profile-button" onclick="handleProfileClick()">
          <img src="https://via.placeholder.com/40" alt="Profile Icon" />
        </button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;