import React, { useCallback } from 'react';
import { Container, Typography, Button, Box, Stack, useTheme, useMediaQuery } from '@mui/material';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  color: 'white',
  paddingTop: '64px', // Height of navbar
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '80px 1rem 2rem 1rem', // Increased top padding for mobile
  },
  '@media (max-width: 600px)': {
    padding: '100px 1rem 2rem 1rem', // Even more top padding for smaller screens
  }
}));

const GradientText = styled('span')({
  background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '250px',
  height: '350px',
  borderRadius: '10%',
  overflow: 'hidden',
  marginLeft: 'auto',
  flexShrink: 0,
  position: 'relative',
  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  '@media (max-width: 900px)': {
    width: '200px',
    height: '280px',
    margin: '2rem auto 0',
  },
  '@media (max-width: 600px)': {
    width: '180px',
    height: '250px',
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  '@media (max-width: 900px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  '@media (max-width: 900px)': {
    fontSize: '2.5rem !important',
  },
  '@media (max-width: 600px)': {
    fontSize: '2rem !important',
  },
}));

const ButtonContainer = styled(Stack)({
  flexDirection: 'row',
  gap: '1rem',
  '@media (max-width: 900px)': {
    justifyContent: 'center',
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    width: '100%',
    maxWidth: '280px',
  },
});

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const resumePath = 'image/resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Aishwarya-Jain-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="home"
      sx={{
        bgcolor: '#0A0A0A',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: ["#4CAF50", "#2196F3"] },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              enable: true,
              speed: 1
            },
            size: {
              value: { min: 1, max: 3 },
            },
            number: {
              value: isMobile ? 30 : 60 // Reduce particles on mobile
            }
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />

      <StyledContainer maxWidth="lg">
        <ContentContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ResponsiveTypography variant="h2" sx={{ fontWeight: 500 }}>
              Hello,
            </ResponsiveTypography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ResponsiveTypography variant="h2" sx={{ mb: 2 }}>
              I am <GradientText>Aishwarya Jain</GradientText>,
            </ResponsiveTypography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ResponsiveTypography variant="h2" sx={{ mb: 4 }}>
              Frontend Developer
            </ResponsiveTypography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ResponsiveTypography variant="h5" sx={{ mb: 4 }}>
              React.js | Next.js | UI/UX Enthusiast | Team Lead | Payment Gateway Integrations
            </ResponsiveTypography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mb: 4,
                color: '#888',
                maxWidth: '600px',
                fontSize: { xs: '1rem', sm: '1.1rem' }
              }}
            >
              Frontend Developer with 3+ years of experience in building scalable,
              responsive web applications using React & Next.js. Experienced in
              leading teams, optimizing performance, and delivering user-centric
              solutions.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ButtonContainer>
              <Button
                variant="outlined"
                size="large"
                onClick={scrollToContact}
                fullWidth={isMobile}
                sx={{
                  color: '#4CAF50',
                  borderColor: '#4CAF50',
                  '&:hover': {
                    borderColor: '#45a049',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)'
                  }
                }}
              >
                Let's Connect
              </Button>

              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadResume}
                fullWidth={isMobile}
                sx={{
                  background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #45a049, #1e88e5)',
                  }
                }}
              >
                Download Resume
              </Button>
            </ButtonContainer>
          </motion.div>
        </ContentContainer>

        <ImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <img
              src="image/photo.jpg"
              alt="Aishwarya Jain"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>
        </ImageContainer>
      </StyledContainer>
    </Box>
  );
};

export default Home;