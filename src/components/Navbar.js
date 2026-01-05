import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll';
import { ThemeToggle } from '../App'; 

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 10, 10, 0.95)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
}));

const NavLink = styled(Link)({
  color: 'white',
  padding: '8px 16px',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#4CAF50',
  },
});

const HamburgerIcon = styled('div')(({ isOpen }) => ({
  width: '24px',
  height: '20px',
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& span': {
    display: 'block',
    height: '2px',
    width: '100%',
    background: 'white',
    borderRadius: '3px',
    transition: 'all 0.3s ease',
    transformOrigin: 'left',

    '&:nth-of-type(1)': {
      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
    },
    '&:nth-of-type(2)': {
      opacity: isOpen ? 0 : 1,
      transform: isOpen ? 'translateX(20px)' : 'translateX(0)',
    },
    '&:nth-of-type(3)': {
      transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
    },
  },
}));

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work Experience', id: 'experience' },
    { label: 'Product Case Studies', id: 'caseStudy' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
      }}
      role="presentation"
    >
      <List sx={{ pt: 4 }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                color: 'white',
                '& .MuiTypography-root': {
                  fontSize: '1.1rem',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo or Brand Name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="home" smooth={true} duration={500}>
            <Box 
              component="span" 
              sx={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AJ
            </Box>
          </NavLink>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-64}
              >
                {item.label}
              </NavLink>
            ))}
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, padding: 0 }}
          >
            <HamburgerIcon isOpen={mobileOpen}>
              <span />
              <span />
              <span />
            </HamburgerIcon>
          </IconButton>
        )}
          <ThemeToggle />
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
};

export default NavBar;