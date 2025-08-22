import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { CheckCircleOutline } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
  },
}));

const CompanyLogo = styled('img')({
  width: '80px',
  height: '80px',
  objectFit: 'contain',
  marginRight: '20px',
  backgroundColor: '#fff',
  padding: '5px',
  borderRadius: '10px',
});

const Experience = () => {
  const achievements = [
    "Led a team of 3 developers, conducting code reviews and mentoring juniors to improve code quality and accelerate delivery.",
    "Spearheaded the development and implementation of the **Order Flow feature** in the Customer Application, leveraging **React.js** for a seamless UX.",
    "Redesigned and implemented **Partner Applications** using **Next.js**, improving SEO and boosting page load speed by 30%.",
    "Built a bespoke **CRM system** for internal use, simplifying workflows for 500+ internal stakeholders.",
    "Developed **dynamic dashboards and analytics tools** for super admin applications using **React.js** and visualization libraries.",
    "Integrated and configured multiple payment gateways (**CCAvenue, Razorpay, HDFC, ICICI, Axis Bank**), ensuring secure and efficient transactions.",
    "Optimized application performance with lazy loading and code splitting, improving Lighthouse performance scores by 25%.",
    "Collaborated in Agile teams, contributing to sprint planning, requirement gathering, and timely delivery of features.",
  ];

  return (
    <Box id="experience" sx={{ py: 10, bgcolor: '#0A0A0A' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ mb: 6, textAlign: 'center' }}>
            Work <span style={{ color: '#4CAF50' }}>Experience</span>
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <StyledPaper>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
                  <CompanyLogo 
                    src="image/Logo.svg" 
                    alt="Repos Energy Logo"
                  />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Associate Frontend Engineer
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Repos Energy · Pune, India
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      July 2022 – Present
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body1" sx={{ mb: 3 }}>
                  Managing and enhancing the organization’s internal and customer-facing applications,
                  with a focus on frontend architecture, secure payments, and performance optimization.
                </Typography>

                <Typography variant="h6" sx={{ mb: 2, color: '#4CAF50' }}>
                  Key Achievements
                </Typography>

                <Grid container spacing={2}>
                  {achievements.map((achievement, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                          <CheckCircleOutline sx={{ color: '#4CAF50', mr: 1, mt: 0.5 }} />
                          <Typography variant="body2">
                            {achievement}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </StyledPaper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
