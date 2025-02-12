'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LaptopIcon from '@mui/icons-material/Laptop';

export default function NavBar() {
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar className="container mx-auto">
        <div className="flex items-center gap-2">
          <LaptopIcon color="primary" />
          <span className="text-xl font-bold">RLappy</span>
        </div>
        <nav className="ml-auto flex gap-4">
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/catalog">Catalog</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button variant="contained" color="primary" href="/login">
            Login 👤
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
