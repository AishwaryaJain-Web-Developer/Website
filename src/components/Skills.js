import React from 'react';
import { Container, Typography, Grid, Box, LinearProgress, useMediaQuery } from '@mui/material';
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

// Images list
const images = [
  "https://etraverse.com/wp-content/uploads/2023/12/front-end-development-company-in-hyderabad.jpg",
  "https://st4.depositphotos.com/12536728/22181/i/450/depositphotos_221818860-stock-photo-writing-codes-typing-data-code.jpg",
  "https://f1studioz.com/blog/wp-content/uploads/2024/10/DALL%C2%B7E-2024-10-16-13.11.27-A-minimalist-futuristic-illustration-showing-a-developer-using-an-AI-powered-code-completion-tool.-The-scene-features-a-dark-grey-high-tech-workspac-1024x585.webp"
];

// Grouped skills
const skillsData = {
  "Frontend Core": [
    { name: 'React.js & Next.js', level: 92 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'Redux & State Management', level: 88 },
    { name: 'HTML5 & Responsive Design', level: 90 },
  ],
  "Styling & UI": [
    { name: 'CSS3, Material UI, Tailwind CSS, Styled Components', level: 85 },
  ],
  "Tools & Workflow": [
    { name: 'RESTful API & GraphQL', level: 85 },
    { name: 'Git, GitHub & Bitbucket', level: 82 },
    { name: 'CI/CD & Deployment (Vercel, Netlify)', level: 75 },
    { name: 'Webpack & Babel', level: 78 },
  ],
  "Testing & Quality": [
    { name: 'Jest & React Testing Library', level: 78 },
  ],
  "Leadership & Methodologies": [
    { name: 'Agile / Scrum & Team Leadership', level: 80 },
  ]
};

const Skills = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

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

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left side - Images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {(isMobile ? [images[0]] : images).map((src, i) => (
                <Box
                  key={i}
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
                    src={src}
                    alt={`Skills visualization ${i + 1}`}
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
              ))}
            </Box>
          </Grid>

          {/* Right side - Skills grouped */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              {Object.entries(skillsData).map(([category, skills], catIndex) => (
                <Box key={catIndex} sx={{ mb: 5 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#4CAF50', 
                      mb: 2, 
                      fontWeight: 600 
                    }}
                  >
                    {category}
                  </Typography>

                  {skills.map((skill, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        mb: 3,
                        opacity: 0,
                        animation: 'fadeIn 0.5s ease-out forwards',
                        animationDelay: `${index * 0.1}s`,
                        '@keyframes fadeIn': {
                          from: { opacity: 0, transform: 'translateY(20px)' },
                          to: { opacity: 1, transform: 'translateY(0)' }
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
                          sx={{ color: '#4CAF50' }}
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
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
