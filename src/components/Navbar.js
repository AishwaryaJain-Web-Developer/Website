import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { Link } from 'react-scroll';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  transition: 'all 0.3s',
  '&.scrolled': {
    background: 'rgba(10, 10, 10, 0.95)',
    backdropFilter: 'blur(10px)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  margin: '0 10px',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledAppBar position="fixed" className={scrolled ? 'scrolled' : ''}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box component="span" sx={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
            AJ
          </Box>
          <Box>
            {['home', 'about', 'skills', 'experience', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavButton>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavButton>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;