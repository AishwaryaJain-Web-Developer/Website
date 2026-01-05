import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { BarChart, Timeline, School, Groups, WorkspacePremium } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
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
      title: 'Product Thinking & Analysis',
      description:
        'Breaking down business problems, analyzing workflows, and defining effective product solutions',
    },
    {
      icon: <Timeline />,
      title: 'Agile Product Delivery',
      description:
        'Hands-on experience with sprint planning, backlog grooming, prioritization, and iterative delivery',
    },
    {
      icon: <Groups />,
      title: 'Stakeholder Collaboration',
      description:
        'Working closely with business, design, backend, and leadership teams to align product goals',
    },
    {
      icon: <School />,
      title: 'Technical Product Expertise',
      description:
        'Strong technical foundation enabling effective communication with engineering teams',
    },
  ];

  const certifications = [
    'Complete Web Development Certification',
    'Self-Learning: Product Management Fundamentals',
    'Agile & Scrum Practices',
    'User-Centered Design & Business Metrics',
  ];

  return (
    <Box id="about" sx={{ py: 10, bgcolor: '#0A0A0A' }}>
      <Container maxWidth="lg">
        {/* Heading */}
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

        {/* Summary */}
        <Typography
          variant="body1"
          sx={{ mb: 8, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}
        >
          I am a <strong>product-focused professional</strong> with 3+ years of experience
          working at the intersection of <strong>business, design, and engineering</strong>.
          I have owned <strong>end-to-end product workflows</strong> including order
          management, payment systems, internal tools, and analytics dashboards in Agile
          environments.
          <br />
          <br />
          With a strong technical background, I collaborate closely with stakeholders to
          define requirements, prioritize features, and deliver scalable, user-centric
          digital products that create measurable business impact.
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT COLUMN */}
          <Grid item xs={12} md={6}>
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: '#4CAF50' }}>
                Education & Academic Background
              </Typography>

              <Box sx={{ mb: 5 }}>
                {[
                  {
                    degree: 'Master of Computer Science',
                    year: '2020–2022',
                    score: 'Achieved 73.24%',
                  },
                  {
                    degree: 'Bachelor of Computer Science',
                    year: '2017–2020',
                    score: 'Achieved 68%',
                  },
                  {
                    degree: 'Senior Secondary Education',
                    year: '2016–2017',
                    score: 'Achieved 68.7%',
                  },
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
                        top: 6,
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#4CAF50',
                      },
                    }}
                  >
                    <Typography variant="h6">{edu.degree}</Typography>
                    <Typography color="textSecondary">{edu.year}</Typography>
                    <Typography>{edu.score}</Typography>
                  </Box>
                ))}
              </Box>

              {/* Certifications */}
              <Typography
                variant="h5"
                sx={{ mb: 3, color: '#4CAF50', display: 'flex', alignItems: 'center' }}
              >
                <WorkspacePremium sx={{ mr: 1 }} />
                Certifications & Learning
              </Typography>

              <StyledPaper>
                {certifications.map((cert, index) => (
                  <Typography key={index} color="textSecondary" sx={{ mb: 1 }}>
                    • {cert}
                  </Typography>
                ))}
              </StyledPaper>
            </motion.div>
          </Grid>

          {/* RIGHT COLUMN */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: '#4CAF50' }}>
                Product Strengths
              </Typography>

              <Grid container spacing={3}>
                {strengths.map((strength, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <StyledPaper>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ mr: 2, color: '#4CAF50' }}>
                          {strength.icon}
                        </Box>
                        <Typography variant="h6">{strength.title}</Typography>
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
