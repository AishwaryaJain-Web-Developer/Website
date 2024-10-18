import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Phone, Email, LocationOn, LinkedIn ,  } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: '#4CAF50',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4CAF50',
    },
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(2),
    color: '#4CAF50',
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: '#0A0A0A' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ mb: 6, textAlign: 'center' }}>
            Get in <span style={{ color: '#4CAF50' }}>Touch</span>
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <StyledPaper>
                <Typography variant="h5" sx={{ mb: 4, color: '#4CAF50' }}>
                  Contact Information
                </Typography>

                <ContactItem>
                  <Phone />
                  <Typography>
                    +91 8349160698
                  </Typography>
                </ContactItem>

                <ContactItem>
                  <Email />
                  <Typography>
                    aishwaryajn321@gmail.com
                  </Typography>
                </ContactItem>

                <ContactItem>
                  <LocationOn />
                  <Typography>
                    Pune, Maharashtra(411033)
                  </Typography>
                </ContactItem>

                <ContactItem>
                  <LinkedIn />
                  <Typography>
                    <a 
                      href="https://www.linkedin.com/in/aishwarya-jain-b163161b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      LinkedIn Profile
                    </a>
                  </Typography>
                </ContactItem>

                <ContactItem>
                  <GitHubIcon />
                  <Typography>
                    <a 
                      href="https://github.com/AishwaryaJain-Web-Developer"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      GitHub
                    </a>
                  </Typography>
                </ContactItem>
              </StyledPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <StyledPaper>
                <Typography variant="h5" sx={{ mb: 4, color: '#4CAF50' }}>
                  Send Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #45a049, #1e88e5)',
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </StyledPaper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;