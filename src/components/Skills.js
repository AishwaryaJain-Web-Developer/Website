import React from 'react';
import { Container, Typography, Grid, Box, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled progress bar
const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
  },
}));

const Skills = () => {
  const skillsList = [
    { name: 'React.js & Next.js', level: 90 },
    { name: 'JavaScript & ES6', level: 85 },
    { name: 'CSS & Material UI', level: 88 },
    { name: 'HTML & React-Bootstrap', level: 90 },
    { name: 'Redux', level: 85 },
    { name: 'Webpack & Babel', level: 80 },
    { name: 'RESTful API', level: 85 },
    { name: 'Git', level: 82 },
    { name: 'Jest', level: 75 }
  ];

  return (
    <Box 
      id="skills" 
      sx={{ 
        py: 10, 
        bgcolor: '#0A0A0A',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            fontWeight: 'bold',
            '& span': {
              color: '#4CAF50'
            }
          }}
        >
          My <span>Skills</span>
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* Left side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(76,175,80,0.1), rgba(33,150,243,0.1))',
                  borderRadius: '10px',
                  zIndex: 1
                }
              }}
            >
              <Box
                component="img"
                src="https://blocks-images-prod.btw.so/screenshot-1722162435492.webp"
                alt="Skills visualization"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </Box>
          </Grid>

          {/* Right side - Skills bars */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              {skillsList.map((skill, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    mb: 3,
                    opacity: 0,
                    animation: 'fadeIn 0.5s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    '@keyframes fadeIn': {
                      from: {
                        opacity: 0,
                        transform: 'translateY(20px)'
                      },
                      to: {
                        opacity: 1,
                        transform: 'translateY(0)'
                      }
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: '#fff'
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#4CAF50'
                      }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                  <StyledLinearProgress 
                    variant="determinate" 
                    value={skill.level} 
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scaleX(1.01)'
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;