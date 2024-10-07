import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { BarChart, Timeline, School, Language } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const About = () => {
  const strengths = [
    {
      icon: <BarChart />,
      title: 'Analytical Thinking',
      description: 'Strong problem-solving abilities and attention to detail'
    },
    {
      icon: <Timeline />,
      title: 'Organizational Skill',
      description: 'Excellent project management and time optimization'
    },
    {
      icon: <School />,
      title: 'Leadership Ability',
      description: 'Experience in team leadership and project coordination'
    },
    {
      icon: <Language />,
      title: 'Languages',
      description: 'Fluent in English and Hindi'
    }
  ];

  return (
    <Box id="about" sx={{ py: 10, bgcolor: '#0A0A0A' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ mb: 6, textAlign: 'center' }}>
            About <span style={{ color: '#4CAF50' }}>Me</span>
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Education Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: '#4CAF50' }}>
                Education
              </Typography>
              <Box sx={{ position: 'relative' }}>
                {[
                  {
                    degree: 'Master of Computer Science',
                    year: '2020-2022',
                    score: 'Achieved 73.24%'
                  },
                  {
                    degree: 'Bachelor of Computer Science',
                    year: '2017-2020',
                    score: 'Achieved 68%'
                  },
                  {
                    degree: 'Senior Secondary Education',
                    year: '2016-2017',
                    school: 'Kendriya Vidyalaya Dhar',
                    score: 'Achieved 68.7%'
                  }
                ].map((edu, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 3,
                      pl: 3,
                      borderLeft: '2px solid #4CAF50',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '-6px',
                        top: 0,
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#4CAF50',
                      }
                    }}
                  >
                    <Typography variant="h6">{edu.degree}</Typography>
                    <Typography color="textSecondary">{edu.year}</Typography>
                    {edu.school && (
                      <Typography color="textSecondary">{edu.school}</Typography>
                    )}
                    <Typography>{edu.score}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Strengths Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: '#4CAF50' }}>
                Strengths
              </Typography>
              <Grid container spacing={3}>
                {strengths.map((strength, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <StyledPaper>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ mr: 2, color: '#4CAF50' }}>
                          {strength.icon}
                        </Box>
                        <Typography variant="h6">
                          {strength.title}
                        </Typography>
                      </Box>
                      <Typography color="textSecondary">
                        {strength.description}
                      </Typography>
                    </StyledPaper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;