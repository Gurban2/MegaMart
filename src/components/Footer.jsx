import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';

const FooterWrapper = styled.footer`
  background-color: var(--footer-bg);
  padding: 3rem 0 1rem;
  margin-top: 2rem;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-family: var(--font-headings);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: var(--font-primary);
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: var(--dark-gray);
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.95rem;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: var(--dark-gray);
    transition: color 0.3s;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--dark-gray);
  font-size: 0.9rem;
  font-family: var(--font-primary);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterSection>
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>For Customers</h3>
            <ul>
              <li><Link to="/">Catalog</Link></li>
              <li><Link to="/how-to-order">How to Order</Link></li>
              <li><Link to="/payment">Payment Methods</Link></li>
              <li><Link to="/delivery">Delivery</Link></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact</h3>
            <ul>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Email: info@megamarket.com</li>
              <li>Address: 123 Main St, New York, NY</li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Social Media</h3>
            <SocialLinks>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FiFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter size={24} />
              </a>
            </SocialLinks>
          </FooterSection>
        </FooterContainer>
        
        <Copyright>
          &copy; {new Date().getFullYear()} MegaMarket. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 