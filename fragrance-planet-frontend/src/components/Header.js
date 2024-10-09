import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './header.css';

function Header() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="AI.html">Fragrances</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </nav>
        </Typography>
        <a href="user.html">
          <button class="profile-button" onclick="handleProfileClick()">
            <img src="#" />
          </button>
        </a>
      </Toolbar>
    </AppBar>
  );
}

export default Header;