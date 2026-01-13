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
                Role: Product Manager | Domain: Energy / Logistics (B2B)
              </Typography>

              <Grid container spacing={4}>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Problem Statement</SectionTitle>
                  <Typography color="textSecondary">
                    The customer-facing application handled high-volume B2B orders but
                    suffered from frequent payment failures, unclear order states, and
                    delayed confirmations. Operations teams depended heavily on manual
                    reconciliation, resulting in poor user experience and increased
                    support overhead.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Objective</SectionTitle>
                  <Typography color="textSecondary">
                    Design a reliable end-to-end order and payment workflow with
                    predictable lifecycle states, real-time status visibility, and
                    accurate financial reconciliation.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>My Role</SectionTitle>
                  <Typography color="textSecondary">
                    • Owned end-to-end order and payment workflows<br />
                    • Led requirement gathering and stakeholder alignment<br />
                    • Defined PRDs, user journeys, edge cases, and success metrics<br />
                    • Created user stories and acceptance criteria<br />
                    • Worked closely with design, backend, and QA teams in Agile sprints
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Solution</SectionTitle>
                  <Typography color="textSecondary">
                    Designed and delivered a robust order lifecycle integrated with
                    secure payment gateways, automated status handling, retry
                    mechanisms, and failure states. Defined API contracts to ensure
                    consistency between frontend flows and backend systems.
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <SectionTitle>Impact</SectionTitle>
                  <Typography color="textSecondary">
                    • Improved operational efficiency by <strong>25–30%</strong><br />
                    • Reduced manual reconciliation and support tickets<br />
                    • Improved transaction success rates for high-volume orders<br />
                    • Increased customer trust through transparent order states
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <SectionTitle>Tools & Skills</SectionTitle>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {[
                      'Product Discovery',
                      'PRDs & User Stories',
                      'Agile / Scrum',
                      'Payments',
                      'Order Management',
                      'API Design',
                      'Stakeholder Management',
                      'Analytics'
                    ].map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        sx={{
                          bgcolor: 'rgba(76,175,80,0.15)',
                          color: '#4CAF50',
                        }}
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
                Role: Product Manager | Domain: Internal Operations & Analytics
              </Typography>

              <Grid container spacing={4}>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Problem</SectionTitle>
                  <Typography color="textSecondary">
                    Operations and business teams relied on spreadsheets and
                    disconnected tools to manage customers, orders, and performance
                    metrics. This resulted in duplicated work, delayed insights, and
                    limited real-time visibility for leadership.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Objective</SectionTitle>
                  <Typography color="textSecondary">
                    Build a centralized internal CRM and analytics platform to
                    streamline workflows, reduce manual effort, and enable
                    data-driven decision-making.
                  </Typography>
                </Grid>

                {/* <Box sx={{ mt: 3 ,  ml:10}}>
                  <img
                    src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVbpYmx6o8.M/v2/-1x-1.webp"
                    alt="Order & Payment Flow Diagram"
                    style={{ width: '20%', borderRadius: '12px' }}
                  />
                </Box> */}

                <Grid item xs={12} md={6}>
                  <SectionTitle>My Role</SectionTitle>
                  <Typography color="textSecondary">
                    • Conducted stakeholder interviews across operations and leadership<br />
                    • Defined workflows, data models, and reporting needs<br />
                    • Prioritized MVP features based on impact<br />
                    • Delivered the platform in phased releases with engineering teams
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <SectionTitle>Solution</SectionTitle>
                  <Typography color="textSecondary">
                    Delivered a centralized CRM system with role-based access,
                    standardized workflows, and real-time dashboards. Defined APIs
                    and reporting structures to support scalable analytics.
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <SectionTitle>Impact</SectionTitle>
                  <Typography color="textSecondary">
                    • Reduced manual tracking effort by <strong>40%</strong><br />
                    • Improved operational visibility across teams<br />
                    • Enabled faster, data-driven leadership decisions<br />
                    • Platform adopted by multiple internal stakeholders
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
