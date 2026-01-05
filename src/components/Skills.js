import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Chip
} from '@mui/material';
import {
  Insights,
  RocketLaunch,
  Groups,
  QueryStats,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '14px',
  height: '80%',
}));

const SkillItem = ({ icon, title, description }) => (
  <Card>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Box sx={{ color: '#4CAF50', mr: 1 }}>{icon}</Box>
      <Typography variant="h6">{title}</Typography>
    </Box>
    <Typography variant="body2" color="textSecondary">
      {description}
    </Typography>
  </Card>
);

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 12, bgcolor: '#0A0A0A' }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography variant="h3" align="center" sx={{ mb: 8 }}>
          Skills & <span style={{ color: '#4CAF50' }}>Expertise</span>
        </Typography>

        <Grid container spacing={6}>
          {/* LEFT — Product & Business */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ color: '#4CAF50', mb: 3 }}
            >
              Product & Business
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SkillItem
                  icon={<Insights />}
                  title="Product Strategy & Thinking"
                  description="Problem discovery, opportunity sizing, roadmap planning, and outcome-driven decision making."
                />
              </Grid>

              <Grid item xs={12}>
                <SkillItem
                  icon={<RocketLaunch />}
                  title="Product Execution"
                  description="User stories, acceptance criteria, backlog prioritization, sprint planning, and delivery ownership."
                />
              </Grid>

              <Grid item xs={12}>
                <SkillItem
                  icon={<Groups />}
                  title="Stakeholder Management"
                  description="Cross-functional collaboration with business, design, engineering, QA, and leadership."
                />
              </Grid>

              <Grid item xs={12}>
                <SkillItem
                  icon={<QueryStats />}
                  title="Analytics & Metrics"
                  description="Defining success metrics, dashboards, tracking KPIs, and data-driven product decisions."
                />
              </Grid>
            </Grid>
          </Grid>

          {/* RIGHT — Technical & Tools */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ color: '#4CAF50', mb: 3 }}
            >
              Technical & Tools
            </Typography>

            <Card>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Technical Foundation
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                {[
                  'React.js',
                  'Next.js',
                  'JavaScript (ES6+)',
                  'TypeScript',
                  'Redux',
                  'REST APIs',
                  'Payment Integrations',
                  'System Understanding',
                ].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      bgcolor: 'rgba(76,175,80,0.15)',
                      color: '#4CAF50',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>

              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Tools & Methodologies
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                {[
                  'Agile / Scrum',
                  'JIRA',
                  'Confluence',
                  'Figma (Collaboration)',
                  'Postman',
                  'Git & GitHub',
                  'CI/CD Basics',
                  'Dashboarding',
                ].map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    sx={{
                      bgcolor: 'rgba(33,150,243,0.15)',
                      color: '#90CAF9',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
