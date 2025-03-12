import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageTransition } from '../styles/animations';
import { Container, PageTitle } from '../styles/StyledComponents';
import { FiUsers, FiAward, FiShoppingBag, FiSmile } from 'react-icons/fi';

const AboutContainer = styled(motion.div)`
  padding: 2rem 0;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-headings);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-weight: 600;
  letter-spacing: -0.025em;
`;

const Text = styled.p`
  color: var(--text-color);
  line-height: 1.8;
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
  
  strong {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const FeatureCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  text-align: center;
  
  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--dark-gray);
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .info {
    padding: 1.5rem;
    
    h3 {
      font-family: var(--font-headings);
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: var(--text-color);
      font-weight: 600;
    }
    
    .position {
      color: var(--primary-color);
      font-weight: 500;
      margin-bottom: 1rem;
      font-size: 0.95rem;
    }
    
    p {
      color: var(--dark-gray);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled(motion.div)`
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  text-align: center;
  
  .value {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: var(--text-color);
    font-weight: 500;
  }
`;

const About = () => {
  return (
    <AboutContainer
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <Container>
        <PageTitle>About Us</PageTitle>
        
        <Section>
          <Text>
            MegaMarket was founded in 2010 with a simple mission: to create the most convenient online shopping experience for our customers. 
            What started as a small tech gadget store has grown into a comprehensive marketplace offering products across various categories.
          </Text>
          <Text>
            Our dedication to quality products, competitive prices, and exceptional customer service has made us one of the fastest-growing 
            e-commerce platforms. We continuously strive to improve our services and expand our product range to meet our customers' evolving needs.
          </Text>
        </Section>
        
        <Stats>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="value">10+</div>
            <div className="label">Years in Business</div>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="value">2M+</div>
            <div className="label">Happy Customers</div>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="value">50K+</div>
            <div className="label">Products</div>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="value">24/7</div>
            <div className="label">Customer Support</div>
          </StatItem>
        </Stats>
        
        <Section>
          <SectionTitle>Our Team</SectionTitle>
          <Text>
            At MegaMarket, our success is driven by our dedicated team of professionals who are passionate about creating 
            the best online shopping experience. Meet some of the key people who make MegaMarket possible:
          </Text>
          
          <TeamGrid>
            <TeamMember
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="John Smith" />
              <div className="info">
                <h3>John Smith</h3>
                <div className="position">CEO & Founder</div>
                <p>John founded MegaMarket with a vision to revolutionize online shopping. His leadership and innovation continue to drive the company forward.</p>
              </div>
            </TeamMember>
            
            <TeamMember
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sarah Johnson" />
              <div className="info">
                <h3>Sarah Johnson</h3>
                <div className="position">CTO</div>
                <p>Sarah oversees all technical aspects of MegaMarket, ensuring that our platform is secure, efficient, and user-friendly.</p>
              </div>
            </TeamMember>
            
            <TeamMember
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Michael Chen" />
              <div className="info">
                <h3>Michael Chen</h3>
                <div className="position">Marketing Director</div>
                <p>Michael leads our marketing strategies, helping us connect with customers and share our story with the world.</p>
              </div>
            </TeamMember>
            
            <TeamMember
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Emily Rodriguez" />
              <div className="info">
                <h3>Emily Rodriguez</h3>
                <div className="position">Customer Experience Manager</div>
                <p>Emily ensures that every interaction with MegaMarket exceeds customer expectations, from browsing to after-sales support.</p>
              </div>
            </TeamMember>
          </TeamGrid>
        </Section>
        
        <Section>
          <SectionTitle>Our Values</SectionTitle>
          <Text>
            <strong>Customer First:</strong> Our customers are at the heart of everything we do. We continuously listen to feedback and improve our services to meet their needs.
          </Text>
          <Text>
            <strong>Quality & Reliability:</strong> We curate our product selection carefully, ensuring that we offer only high-quality items that our customers can rely on.
          </Text>
          <Text>
            <strong>Innovation:</strong> We embrace technology and innovative solutions to create a shopping experience that's smooth, intuitive, and enjoyable.
          </Text>
          <Text>
            <strong>Integrity:</strong> We operate with transparency and honesty in all aspects of our business, from pricing to privacy policies.
          </Text>
        </Section>
        
        <FeatureGrid>
          <FeatureCard>
            <FiShoppingBag />
            <h3>Quality Products</h3>
            <p>We carefully select every product to ensure the highest quality standards for our customers.</p>
          </FeatureCard>
          
          <FeatureCard>
            <FiAward />
            <h3>Best Prices</h3>
            <p>We offer competitive prices and regular discounts to provide the best value for your money.</p>
          </FeatureCard>
          
          <FeatureCard>
            <FiUsers />
            <h3>Customer Support</h3>
            <p>Our dedicated support team is always ready to assist you with any questions or concerns.</p>
          </FeatureCard>
          
          <FeatureCard>
            <FiSmile />
            <h3>Satisfaction Guarantee</h3>
            <p>We're not happy unless you are. Easy returns and refunds if you're not completely satisfied.</p>
          </FeatureCard>
        </FeatureGrid>
      </Container>
    </AboutContainer>
  );
};

export default About; 