import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const CasePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.06)',
  backdropFilter: 'blur(12px)',
  borderRadius: '16px',
  height: '100%',
}));

const SectionTitle = ({ children }) => (
  <Typography
    variant="h6"
    sx={{ color: '#4CAF50', mb: 1, fontWeight: 600 }}
  >
    {children}
  </Typography>
);

const CaseStudy = () => {
  return (
    <Box id="caseStudy" sx={{ py: 10, bgcolor: '#0A0A0A' }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ mb: 6, textAlign: 'center' }}>
            Product <span style={{ color: '#4CAF50' }}>Case Studies</span>
          </Typography>
        </motion.div>

        <Grid container spacing={6}>

          {/* ================= CASE STUDY 1 ================= */}
          <Grid item xs={12}>
            <CasePaper>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Order Flow & Payment System – Customer Application
              </Typography>

              <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 3 }}>
                Role: Product Manager (Product Owner Proxy) | Domain: Energy / Logistics
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <SectionTitle>Problem</SectionTitle>
                  <Typography color="textSecondary">
                    Customers faced frequent order failures, unclear payment statuses,
                    and delayed confirmations, leading to poor user experience and
                    increased operational dependency on support teams.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Objective</SectionTitle>
                  <Typography color="textSecondary">
                    Design a seamless, reliable end-to-end order and payment workflow
                    with real-time tracking and accurate financial reconciliation.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>My Role</SectionTitle>
                  <Typography color="textSecondary">
                    • Gathered business and stakeholder requirements<br />
                    • Defined user journeys, edge cases, and success metrics<br />
                    • Created user stories & acceptance criteria<br />
                    • Prioritized features and coordinated Agile delivery<br />
                    • Collaborated closely with design, backend, and QA teams
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Solution</SectionTitle>
                  <Typography color="textSecondary">
                    Delivered an optimized order flow integrated with multiple secure
                    payment gateways, automated status updates, and failure-handling
                    mechanisms to ensure transaction reliability.
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <SectionTitle>Impact</SectionTitle>
                  <Typography color="textSecondary">
                    • Improved transaction success rate<br />
                    • Reduced manual intervention and support tickets<br />
                    • Enabled accurate cash-flow tracking and reporting<br />
                    • Improved customer trust and usability
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <SectionTitle>Tools & Skills</SectionTitle>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {[
                      'Product Strategy',
                      'User Stories',
                      'Agile / Scrum',
                      'Payments',
                      'Stakeholder Management',
                      'APIs',
                      'Analytics'
                    ].map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        sx={{ bgcolor: 'rgba(76,175,80,0.15)', color: '#4CAF50' }}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CasePaper>
          </Grid>

          {/* ================= CASE STUDY 2 ================= */}
          <Grid item xs={12}>
            <CasePaper>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Internal CRM & Admin Analytics Platform
              </Typography>

              <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 3 }}>
                Role: Product Manager | Domain: Internal Operations
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <SectionTitle>Problem</SectionTitle>
                  <Typography color="textSecondary">
                    Internal teams relied on fragmented tools and manual processes,
                    resulting in poor visibility, duplicated work, and delayed decisions.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Objective</SectionTitle>
                  <Typography color="textSecondary">
                    Build a centralized CRM and analytics platform to streamline
                    operations and provide leadership with actionable insights.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>My Role</SectionTitle>
                  <Typography color="textSecondary">
                    • Conducted internal stakeholder interviews<br />
                    • Defined workflows and data requirements<br />
                    • Prioritized MVP features<br />
                    • Worked with engineering teams to deliver in phases
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Solution</SectionTitle>
                  <Typography color="textSecondary">
                    Delivered a custom CRM system with dashboards, role-based access,
                    and real-time reporting tailored to internal business needs.
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <SectionTitle>Impact</SectionTitle>
                  <Typography color="textSecondary">
                    • Improved operational efficiency<br />
                    • Reduced manual tracking and follow-ups<br />
                    • Enabled data-driven leadership decisions<br />
                    • Adopted across multiple teams
                  </Typography>
                </Grid>
              </Grid>
            </CasePaper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudy;
