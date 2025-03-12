import React from 'react';
import styled from 'styled-components';
import { Container, PageTitle } from '../styles/StyledComponents';
import { FiCreditCard, FiDollarSign, FiShield, FiHelpCircle } from 'react-icons/fi';

const PaymentContainer = styled.div`
  padding: 2rem 0;
`;

const IntroText = styled.div`
  margin-bottom: 2rem;
  
  p {
    color: var(--text-color);
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`;

const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const PaymentMethod = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  text-align: center;
  
  svg {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--dark-gray);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  ul {
    text-align: left;
    padding-left: 1.5rem;
    color: var(--text-color);
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const SecuritySection = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  margin: 3rem 0;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 1rem;
      color: var(--primary-color);
    }
  }
  
  p {
    color: var(--dark-gray);
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
    color: var(--text-color);
    
    li {
      margin-bottom: 0.75rem;
    }
  }
`;

const FAQSection = styled.div`
  margin: 3rem 0;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 1rem;
      color: var(--primary-color);
    }
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
    line-height: 1.6;
  }
`;

const Payment = () => {
  return (
    <Container>
      <PaymentContainer>
        <PageTitle>Payment Methods</PageTitle>
        
        <IntroText>
          <p>
            At MegaMarket, we offer a variety of secure payment options to make your shopping experience as convenient as possible. Choose the payment method that works best for you.
          </p>
        </IntroText>
        
        <PaymentGrid>
          <PaymentMethod>
            <FiCreditCard />
            <h2>Credit & Debit Cards</h2>
            <p>Pay securely with your credit or debit card.</p>
            <ul>
              <li>Visa</li>
              <li>MasterCard</li>
              <li>American Express</li>
              <li>Discover</li>
            </ul>
          </PaymentMethod>
          
          <PaymentMethod>
            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512" style={{ fill: 'var(--primary-color)' }}>
              <path d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zm-105.1-48.5c-18.2 18.5-35.2 35.7-54.4 53.9-1.7 1.6-3.3 2.9-5.4 3.5-2.7 0.8-5.5 0.5-8.2-0.3-14.2-4.8-29-9.1-44.5-9.1-23.9 0-30.8 15.4-30.8 29.5 0 7.1 0.9 13.5 2.3 19.8 6.5 28.2 30.8 115.3 81.8 115.3 19 0 38.5-21.6 61.8-68 4.3-8.6 7.8-17.5 10.7-26.6 9.1-27.7 13.6-52.2 13.6-68.7 0-13.7-2.3-25.9-8-35.5-6.5-10.6-16.7-19.9-38.4-19.9-37.3 0-69.6 23.7-89.4 60.4-9.5 17.9-15.8 36.6-18.3 53.5-0.6 3.7-0.9 7.4-0.9 11-0.1 14.3 5.5 28.1 15.1 38.6 3.6 3.9 7.7 7.3 12.3 10.1 7.8 4.7 16.9 7.3 26.1 7.3 19.6 0 42.9-11.7 63.1-32.5 21.1-22.2 35.8-49.6 43.9-78.7 1.6-5.3 3-10.7 4.3-16.1 0.3-1.3 0.6-2.7 0.8-4.1 0.8-4.8 1.4-9.6 1.9-14.4 0.2-2 0.4-4 0.5-6 0.2-3.3 0.3-6.7 0.3-10 0-19.2-5.6-37-16.5-51.4-11.3-15.2-24.8-26.7-54.8-26.7-45.4 0-74 38.2-89.3 77-15.8 40-25 83.9-38.8 125.5-7.1 21.8-16 42.9-29.9 61.4-4.3 5.8-9.3 11.2-15.2 15.6-2.9 2.2-6.1 4.2-9.5 5.5-6.9 2.9-14.3 3.5-21.6 1.9-4.5-1-8.7-2.8-12.4-5.4-4.3-3-7.7-7-10.1-11.8-1.9-3.9-3-8.1-3.2-12.5-0.2-2.7-0.2-5.4 0.2-8.1 0.7-5.2 2.3-10.3 4.6-14.9 4.1-8 9.6-15.2 15.2-22.3 7.5-9.1 15.5-17.8 23.6-26.3 38.6-40.3 87.8-90.9 105.8-111.1 14-15.6 31.3-37.8 31.3-59.6 0-30.6-25.2-44.9-50.9-44.9-14.9 0-26.8 4.3-41.1 17.1-2.2 1.9-4.8 2.8-7.5 2.5-2.5-0.2-4.9-1.2-6.9-2.8-3.8-3.1-4.3-8.9-1.2-12.7 18.8-22.9 46.2-32.8 66.6-32.8 55.1 0 82.6 37.8 82.6 77.5 0 32.4-24.3 65.6-52.4 94.7-34.2 35.2-80.3 82.7-105.1 110.4-1.6 1.8-3.3 3.6-4.9 5.4z"/>
            </svg>
            <h2>PayPal</h2>
            <p>Fast, secure payments with your PayPal account.</p>
            <ul>
              <li>Link your bank account or cards</li>
              <li>Pay without sharing financial information</li>
              <li>Purchase protection policy</li>
            </ul>
          </PaymentMethod>
          
          <PaymentMethod>
            <FiDollarSign />
            <h2>Cash on Delivery</h2>
            <p>Pay with cash when you receive your order.</p>
            <ul>
              <li>Available for select regions</li>
              <li>Pay only after product inspection</li>
              <li>Additional fee may apply</li>
            </ul>
          </PaymentMethod>
        </PaymentGrid>
        
        <SecuritySection>
          <h2><FiShield /> Payment Security</h2>
          <p>
            We take payment security very seriously at MegaMarket. All transactions on our site are protected with the latest encryption technology and security measures.
          </p>
          <ul>
            <li>128-bit SSL encryption for all transactions</li>
            <li>PCI DSS compliant payment processing</li>
            <li>Secure storage of payment information</li>
            <li>Fraud monitoring and prevention systems</li>
            <li>Regular security audits and updates</li>
          </ul>
          <p>
            We never store your complete credit card information on our servers. Your payment details are transmitted securely to our payment processor, ensuring that your sensitive information remains protected.
          </p>
        </SecuritySection>
        
        <FAQSection>
          <h2><FiHelpCircle /> Frequently Asked Questions</h2>
          
          <FAQItem>
            <h3>When will my credit card be charged?</h3>
            <p>
              Your credit card will be authorized when you place your order and charged when your order ships. If you pay with PayPal, you will be charged immediately.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>Can I use multiple payment methods for a single order?</h3>
            <p>
              Currently, we only support one payment method per order. If you wish to use a different payment method, you may need to place separate orders.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>Do you offer installment payment options?</h3>
            <p>
              Yes, we offer installment payment options on eligible purchases through select credit cards. The available installment plans will be shown at checkout if your card is eligible.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>What should I do if my payment is declined?</h3>
            <p>
              If your payment is declined, verify that your card information is correct and that you have sufficient funds. If problems persist, contact your bank or try an alternative payment method.
            </p>
          </FAQItem>
        </FAQSection>
      </PaymentContainer>
    </Container>
  );
};

export default Payment; 