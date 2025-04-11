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
  backgroundColor: '#fff', // Add background color for better visibility
  padding: '5px', // Optional padding for spacing
  borderRadius: '10px', // Optional rounded corners
});

const Experience = () => {
  const achievements = [
    "Spearheaded the development and implementation of the **Order Flow feature** within the Customer Application's Profile Section, leveraging **React.js** for a seamless user experience.",
    "Led the complete redesign and implementation of **Partner Applications**, utilizing **Next.js** to enhance performance and SEO capabilities.",
    "Architected and developed a **bespoke CRM system** tailored to internal requirements, building a user-friendly interface with **React.js**.",
    "Developed **dynamic dashboards and analytics tools** for super admin web applications, employing **React.js** and data visualization libraries to provide actionable insights.",
    "Designed and implemented robust **backend API integrations** to facilitate data flow and functionality within **React.js** and **Next.js** applications.",
    "Successfully managed **third-party integrations**, ensuring seamless connectivity and data exchange with external services.",
    "Crucially **integrated and configured multiple payment gateway solutions (ICICI, HDFC, and others)** within the application, ensuring secure and efficient transaction processing.",
    "Successfully implemented **Agile methodologies** in project development, contributing to efficient workflows and timely delivery.",
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
                      Repos Energy Pune
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      July 2022 - Present
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body1" sx={{ mb: 3 }}>
                  Successfully managed the organization's internal application, overseeing all aspects of order processing,
                  payment transactions, order status tracking, order flow optimization, and cash flow management.
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
