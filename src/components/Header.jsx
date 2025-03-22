import React, { useState } from 'react';
import { Link as RouterLink, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { ShoppingCart, Person, DarkMode, LightMode, Menu, Close } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Badge,
  Button,
  useTheme as useMuiTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery
} from '@mui/material';
import { alpha } from '@mui/material/styles';

const Header = () => {
  const { totalCount } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { text: 'Home', path: '/', icon: null },
    { text: 'Profile', path: '/auth', icon: <Person /> },
    { text: 'Cart', path: '/cart', icon: <ShoppingCart /> }
  ];

  const NavLink = ({ to, children, ...props }) => (
    <Button
      component={RouterNavLink}
      to={to}
      sx={{
        color: 'text.primary',
        fontWeight: 500,
        textTransform: 'none',
        '&.active': {
          color: 'primary.main',
        },
        '&:hover': {
          color: 'primary.main',
          backgroundColor: 'transparent'
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );

  const mobileMenu = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: 240,
          backgroundColor: 'background.default'
        }
      }}
    >
      <Box sx={{ textAlign: 'right', p: 1 }}>
        <IconButton onClick={toggleDrawer} size="large">
          <Close />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={RouterNavLink}
              to={item.path}
              onClick={toggleDrawer}
              sx={{
                '&.active': {
                  backgroundColor: alpha(muiTheme.palette.primary.main, 0.1),
                  color: 'primary.main',
                }
              }}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.text} />
              {item.path === '/cart' && totalCount > 0 && (
                <Badge badgeContent={totalCount} color="secondary" sx={{ ml: 1 }} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={toggleTheme}>
            <ListItemIcon>
              {isDarkMode ? <LightMode /> : <DarkMode />}
            </ListItemIcon>
            <ListItemText primary={isDarkMode ? "Light Mode" : "Dark Mode"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="sticky" color="default" elevation={2} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              fontFamily: 'var(--font-headings)',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              letterSpacing: '-0.03em',
              '&:hover': {
                color: 'secondary.main'
              }
            }}
          >
            MegaMarket
          </Typography>
          
          {location.pathname === '/' && !isMobile && (
            <Box sx={{ flexGrow: 1, mx: 3 }}>
              <SearchBar />
            </Box>
          )}

          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={toggleTheme}
                sx={{ color: 'text.primary', mr: 1 }}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
              
              <NavLink to="/" end>
                Home
              </NavLink>
              
              <NavLink to="/auth">
                <Person />
              </NavLink>
              
              <NavLink to="/cart">
                <Badge badgeContent={totalCount > 0 ? totalCount : null} color="secondary">
                  <ShoppingCart />
                </Badge>
              </NavLink>
            </Box>
          ) : (
            <>
              <Box sx={{ display: 'flex' }}>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <Menu />
                </IconButton>
              </Box>
              {mobileMenu}
            </>
          )}
        </Toolbar>
        
        {location.pathname === '/' && isMobile && (
          <Box sx={{ pb: 2 }}>
            <SearchBar />
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Header; 