import React from 'react';
import { Container, Typography, Grid, Box, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box id="skills" sx={{ py: 10, bgcolor: '#0A0A0A' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ mb: 6, textAlign: 'center' }}>
            My <span style={{ color: '#4CAF50' }}>Skills</span>
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src="/api/placeholder/500/500"
                  alt="Skills visualization"
                  sx={{
                    width: '100%',
                    borderRadius: '10px',
                    mb: { xs: 4, md: 0 }
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {skillsList.map((skill, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div variants={itemVariants}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {skill.name}
                        </Typography>
                        <StyledLinearProgress
                          variant="determinate"
                          value={skill.level}
                        />
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;