import React, { useCallback } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  color: 'white',
});

const GradientText = styled('span')({
  background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const Home = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Box id="home" sx={{ bgcolor: '#0A0A0A', position: 'relative' }}>
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
              value: 60
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
        <Box sx={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" sx={{ fontWeight: 500 }}>
              Hello,
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              I am <GradientText>Aishwarya Jain</GradientText>,
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h2" sx={{ mb: 4 }}>
              Front End Engineer
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography variant="subtitle1" sx={{ mb: 4, color: '#888', maxWidth: '600px' }}>
              Leveraging my skills, technical knowledge, and solution-oriented mindset to craft seamless user experiences.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              variant="outlined"
              size="large"
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
          </motion.div>
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Home;