import React from 'react';
import styled from 'styled-components';
import { Container, PageTitle } from '../styles/StyledComponents';
import { FiTruck, FiClock, FiPackage, FiGlobe } from 'react-icons/fi';

const DeliveryContainer = styled.div`
  padding: 2rem 0;
`;

const DeliverySection = styled.section`
  margin-bottom: 3rem;
  
  p {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`;

const DeliveryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const DeliveryCard = styled.div`
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
    margin-bottom: 0;
  }
`;

const DeliveryTable = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  overflow: hidden;
  margin: 2rem 0;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
    }
    
    th {
      background-color: var(--light-gray);
      font-weight: 500;
      color: var(--text-color);
    }
    
    td {
      color: var(--text-color);
    }
    
    tr:last-child td {
      border-bottom: none;
    }
  }
`;

const FAQ = styled.div`
  margin-top: 3rem;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
`;

const FAQItem = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  margin-bottom: 1rem;
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--dark-gray);
    margin-bottom: 0;
    line-height: 1.6;
  }
`;

const Delivery = () => {
  return (
    <Container>
      <DeliveryContainer>
        <PageTitle>Delivery Information</PageTitle>
        
        <DeliverySection>
          <p>
            At MegaMarket, we strive to provide fast, reliable shipping for all your orders. We offer various delivery options to meet your needs, whether you need your items quickly or prefer a more economical shipping method.
          </p>
          
          <DeliveryGrid>
            <DeliveryCard>
              <FiTruck />
              <h3>Standard Delivery</h3>
              <p>3-5 business days<br />Free shipping on orders over $50</p>
            </DeliveryCard>
            
            <DeliveryCard>
              <FiClock />
              <h3>Express Delivery</h3>
              <p>1-2 business days<br />Additional fee applies</p>
            </DeliveryCard>
            
            <DeliveryCard>
              <FiPackage />
              <h3>Store Pickup</h3>
              <p>Ready within 24 hours<br />Free of charge</p>
            </DeliveryCard>
            
            <DeliveryCard>
              <FiGlobe />
              <h3>International Shipping</h3>
              <p>7-14 business days<br />Rates vary by location</p>
            </DeliveryCard>
          </DeliveryGrid>
        </DeliverySection>
        
        <DeliverySection>
          <h2>Shipping Rates</h2>
          
          <DeliveryTable>
            <table>
              <thead>
                <tr>
                  <th>Delivery Method</th>
                  <th>Estimated Time</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard Shipping</td>
                  <td>3-5 business days</td>
                  <td>$5.99 (Free on orders over $50)</td>
                </tr>
                <tr>
                  <td>Express Shipping</td>
                  <td>1-2 business days</td>
                  <td>$12.99</td>
                </tr>
                <tr>
                  <td>Same Day Delivery</td>
                  <td>Same day (order before 12 PM)</td>
                  <td>$19.99</td>
                </tr>
                <tr>
                  <td>Store Pickup</td>
                  <td>Ready within 24 hours</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>International Shipping</td>
                  <td>7-14 business days</td>
                  <td>Starting at $15.99</td>
                </tr>
              </tbody>
            </table>
          </DeliveryTable>
          
          <p>
            Please note that delivery times are estimates and may vary depending on your location and other factors. During peak seasons or holidays, delivery times may be longer than usual.
          </p>
        </DeliverySection>
        
        <FAQ>
          <h2>Frequently Asked Questions</h2>
          
          <FAQItem>
            <h3>How can I track my order?</h3>
            <p>
              Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website under "My Orders" in your account, or on the carrier's website.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>What if I'm not home when my order arrives?</h3>
            <p>
              For standard and express deliveries, the carrier will typically leave the package at your doorstep if it doesn't require a signature. If a signature is required, they will leave a notice and attempt delivery again on the next business day. For same-day deliveries, our courier will contact you before delivery.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>Do you deliver to P.O. boxes?</h3>
            <p>
              Yes, we deliver to P.O. boxes for standard shipping only. Express and same-day delivery options are not available for P.O. boxes.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>How do I change my delivery address?</h3>
            <p>
              If your order hasn't been shipped yet, you can change the delivery address by contacting our customer service team immediately. Once an order has been shipped, we cannot change the delivery address.
            </p>
          </FAQItem>
        </FAQ>
      </DeliveryContainer>
    </Container>
  );
};

export default Delivery; 