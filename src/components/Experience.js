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
    "Acted as a Product Owner proxy, working closely with business stakeholders, designers, and engineering teams to define requirements and deliver scalable digital products.",
    "Owned end-to-end order flow and payment workflows for customer applications, improving transaction success and operational efficiency.",
    "Led the revamp of Partner Applications by identifying user pain points, defining product requirements, and coordinating UI/UX redesign.",
    "Conceptualized and delivered a custom internal CRM system, streamlining task management and internal communication across teams.",
    "Designed and delivered admin dashboards and analytics tools, enabling leadership to make faster, data-driven decisions.",
    "Collaborated with backend teams to define API contracts, workflows, and edge cases for critical product features.",
    "Played a key role in integrating and managing multiple payment gateways (CCAvenue, Razorpay, HDFC, ICICI, Axis Bank), ensuring secure and reliable transactions.",
    "Worked in Agile environments, participating in sprint planning, backlog grooming, reviews, and retrospectives to ensure on-time delivery."
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
                      Associate Product Manager (Technical)
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
                  Functioning as a product-focused professional, owning critical business workflows
                  and collaborating with cross-functional teams to design, build, and optimize
                  customer-facing and internal digital products.
                </Typography>

                <Typography variant="h6" sx={{ mb: 2, color: '#4CAF50' }}>
                  Key Contributions & Impact
                </Typography>

                <Grid container spacing={2}>
                  {achievements.map((achievement, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
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
