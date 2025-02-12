'use client';

import { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import { account } from '@/lib/appwrite/config';
import Button from '../ui/Button';
import Link from 'next/link';

export default function NavBar() {
  const [user, setUser] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const session = await account.get();
      setUser(session);
    } catch (error) {
      console.error('Not logged in');
    }
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
      handleClose();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar className="container mx-auto">
        <Link href="/" className="flex items-center gap-2 no-underline text-inherit">
          <LaptopIcon color="primary" />
          <span className="text-xl font-bold">RLappy</span>
        </Link>
        
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/catalog" passHref>
            <Button variant="outline">Browse Laptops</Button>
          </Link>
          
          {user ? (
            <>
              <IconButton onClick={handleMenu}>
                <Avatar src={user.avatarUrl} alt={user.name} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} href="/dashboard">Dashboard</MenuItem>
                <MenuItem component={Link} href="/profile">Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" passHref>
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/signup" passHref>
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
}
