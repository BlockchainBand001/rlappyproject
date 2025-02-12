'use client';

import { useState, useContext, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LaptopIcon from '@mui/icons-material/Laptop';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '@/components/ThemeRegistry';
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

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Catalog', href: '/catalog' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem button component={Link} href={item.href} key={item.text}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{ 
        backdropFilter: 'blur(20px)',
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)' 
          : 'rgba(0, 0, 0, 0.8)',
      }}
    >
      <Toolbar className="container mx-auto">
        <Link href="/" className="flex items-center gap-2 no-underline text-inherit">
          <LaptopIcon color="primary" />
          <span className="text-xl font-bold">RLappy</span>
        </Link>

        <div className="flex-grow" />

        <IconButton 
          sx={{ ml: 1 }} 
          onClick={colorMode.toggleColorMode} 
          color="inherit"
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better mobile performance
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <nav className="flex items-center gap-4">
            {menuItems.map((item) => (
              <Button
                key={item.text}
                href={item.href}
                variant="text"
                color="inherit"
              >
                {item.text}
              </Button>
            ))}
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
                <Button 
                  href="/login"
                  variant="outlined"
                  sx={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  Login
                </Button>
                <Button 
                  href="/signup"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #00b894 30%, #00cec9 90%)',
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </nav>
        )}
      </Toolbar>
    </AppBar>
  );
}
