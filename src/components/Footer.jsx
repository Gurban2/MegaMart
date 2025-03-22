import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { 
  Box, 
  Container as MuiContainer, 
  Typography, 
  Grid, 
  List, 
  ListItem, 
  Link, 
  IconButton,
  Divider,
  useTheme
} from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
      ]
    },
    {
      title: "For Customers",
      links: [
        { name: "Catalog", path: "/" },
        { name: "How to Order", path: "/how-to-order" },
        { name: "Payment Methods", path: "/payment" },
        { name: "Delivery", path: "/delivery" },
      ]
    }
  ];
  
  const contactInfo = [
    "Phone: +1 (123) 456-7890",
    "Email: info@megamarket.com",
    "Address: 123 Main St, New York, NY"
  ];
  
  const socialLinks = [
    { icon: <Facebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter />, url: "https://twitter.com", label: "Twitter" }
  ];
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper',
        py: 6,
        mt: 4,
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <MuiContainer maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  fontFamily: theme.typography.h1.fontFamily,
                }}
              >
                {section.title}
              </Typography>
              <List disablePadding>
                {section.links.map((link, linkIndex) => (
                  <ListItem disablePadding key={linkIndex} sx={{ mb: 0.5 }}>
                    <Link 
                      component={RouterLink} 
                      to={link.path}
                      underline="hover"
                      color="text.secondary"
                      sx={{ 
                        fontSize: '0.95rem',
                        transition: 'color 0.3s',
                        '&:hover': {
                          color: 'primary.main'
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                mb: 2,
                fontWeight: 600,
                fontFamily: theme.typography.h1.fontFamily,
              }}
            >
              Contact
            </Typography>
            <List disablePadding>
              {contactInfo.map((info, index) => (
                <ListItem disablePadding key={index} sx={{ mb: 0.5 }}>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: '0.95rem' }}
                  >
                    {info}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                mb: 2,
                fontWeight: 600,
                fontFamily: theme.typography.h1.fontFamily,
              }}
            >
              Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  color="primary"
                  sx={{ 
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'transparent'
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{ pt: 2 }}
        >
          &copy; {currentYear} MegaMarket. All rights reserved.
        </Typography>
      </MuiContainer>
    </Box>
  );
};

export default Footer; 